var arrPreviousButtonNames = [];

/* standard for hvordan careersne ser ud
{
		name: "",
		type: "",
		mainstats: {
			ws: 0,
			bs: 0,
			s: 0,
			t: 0,
			ag: 0,
			int: 0,
			wp: 0,
			fel: 0
		},
		secondstats: {
			attacks: 0,
			wounds: 0,
			magic: 0
		},
		skills: "",
		talents: "",
		trappings: "",
		notes: "",
		entries: "",
		exits: "",
		description: "",
		source: "",
	},	
*/




var careers = new Map()
var basicCareers = []
var advancedCareers = []
//Convert array to map 
for (let i = 0; i < careersJSON.length; i++) {
	var e = careersJSON[i];
	const name = e.name
	delete e.name
	careers.set(name, e)
	if (e.type === "Basic") basicCareers.push(name)
	else advancedCareers.push(name)
}

careersJSON = 0

function loadButtons(array, location) {
	var fragment = new DocumentFragment()
	for (let i = 0; i < array.length; i++) {
		const element = document.createElement("button")
		element.classList = "careerButton"
		element.textContent = array[i]
		element.onclick = () => { showCareer(array[i]) }
		element.id = "career_" + array[i]
		fragment.append(element)
	}
	location.append(fragment)
}

/**
 * 
 * @param {Object} stats
 * @param {Number} stats.ws
 * @param {Number} stats.bs
 * @param {Number} stats.s
 * @param {Number} stats.t
 * @param {Number} stats.ag
 * @param {Number} stats.int
 * @param {Number} stats.wp
 * @param {Number} stats.fel
 */
function loadMainStats(stats) {
	Object.keys(stats).forEach(key => {
		document.getElementById(`mainStats_${key}`).textContent = stats[key]
	})
}
function loadSecondStats(stats) {
	Object.keys(stats).forEach(key => {
		document.getElementById(`secondStats_${key}`).textContent = stats[key]
	})
}
function careerInfoToString(array) {
	var returnVal = array[0].toString()
	for (let i = 1; i < array.length; i++) {
		returnVal += ", " + array[i]
	}
	return returnVal
}

function doubleIndexOf(array,searchFor) {
	for (let i = 0; i < array.length; i++) {
		if(array[i].toLowerCase().indexOf(searchFor.toLowerCase()) !== -1) return i
	}
	return -1
}

/**
 * 
 * @param {String} careerName 
 */
function showCareer(careerName) {
	console.log(careerName);
	/**
	 * @type {{mainstats: {
			ws: Number,
			bs: Number,
			s: Number,
			t: Number,
			ag: Number,
			int: Number,
			wp: Number,
			fel: Number
		},
		secondstats: {
			attacks: Number,
			wounds: Number,
			magic: Number
		},
		skills: String[],
		talents: String[],
		trappings: String[],
		notes: String,
		entries: String[],
		exits: String[],
		description: String,
		source: String,}}
	 */
	var career = careers.get(careerName)

	loadMainStats(career.mainstats)
	loadSecondStats(career.secondstats)

	document.getElementById("selectedCareerName").textContent = careerName
	document.getElementById("careerInfo_type").textContent = career.type
	document.getElementById("careerInfo_description").textContent = career.description
	document.getElementById("careerInfo_source").textContent = career.source
	document.getElementById("careerInfo_skills").textContent = careerInfoToString(career.skills)
	document.getElementById("careerInfo_talents").textContent = careerInfoToString(career.talents)
	document.getElementById("careerInfo_trappings").textContent = careerInfoToString(career.trappings)
	document.getElementById("careerInfo_entries").textContent = careerInfoToString(career.entries)
	document.getElementById("careerInfo_exits").textContent = careerInfoToString(career.exits)

	// reset previous button colors
	var buttons = document.querySelectorAll(".careerButton:not(.example)")
	for (let i = 0; i < buttons.length; i++) {
		const element = buttons[i];
		element.classList.value = "careerButton"
	}
	document.getElementById("career_" + careerName).classList += " careerChosen"
	var fixedExits = []
	career.exits.forEach(element => {
		if(element.split(" (")[0] !== element) {
			fixedExits.push({name: element.split(" (")[0], special:true})
		} else {
			fixedExits.push({name: element, special: false})
		}
	});
	if(career.entries.toString() !== "None")
	for (let i = 0; i < career.entries.length; i++) {
		document.getElementById("career_" + career.entries[i]).classList += " careerEntry"
	}
	for (let i = 0; i < fixedExits.length; i++) {
		if(fixedExits[i].special) {
			document.getElementById("career_" + fixedExits[i].name).classList += " careerExit careerSpecial"
		} else {
			document.getElementById("career_" + fixedExits[i].name).classList += " careerExit"
		}
	}

	/*
	career.fixedEntries = []
	for (let i = 0; i < career.entries.length; i++) {
		const element = career.entries[i];
		career.fixedEntries.push(element.split(" (")[0])
	}
	career.fixedExits = []
	for (let i = 0; i < career.exits.length; i++) {
		const element = career.exits[i];
		career.fixedExits.push(element.split(" (")[0])
	}

	// set current to orange
	document.getElementById("button_" + career.name.replace(/ /g, '')).classList.add("orange")

	// set exits to green

	for (let i = 0; i < career.fixedExits.length; i++) {
		const element = career.fixedExits[i];
		for (let o = 0; o < careers.length; o++) {
			const element2 = careers[o];
			if (element2.name.toLowerCase() == element.toLowerCase()) {
				document.getElementById("button_" + element2.name.replace(/ /g, '')).classList.add("green")

			}
		}
	}

	// set entries to red

	for (let i = 0; i < career.fixedEntries.length; i++) {
		const element = career.fixedEntries[i];
		for (let o = 0; o < careers.length; o++) {
			const element2 = careers[o];
			if (element2.name.toLowerCase() == element.toLowerCase()) {
				document.getElementById("button_" + element2.name.replace(/ /g, '')).classList.add("red")

			}
		}
	}

	// set entries that are also exits to dark red

	for (let i = 0; i < career.fixedEntries.length; i++) {
		const element = career.fixedEntries[i];
		if (career.fixedExits.indexOf(element) == -1) continue
		for (let o = 0; o < careers.length; o++) {
			const element2 = careers[o];
			if (element2.name.toLowerCase() == element.toLowerCase()) {
				document.getElementById("button_" + element2.name.replace(/ /g, '')).classList.add("darkred")
				document.getElementById("button_" + element2.name.replace(/ /g, '')).classList.remove("red")
				document.getElementById("button_" + element2.name.replace(/ /g, '')).classList.remove("green")

			}
		}
	}

	var cleanExits = []
	for (let i = 0; i < career.fixedExits.length; i++) {
		const element = career.fixedExits[i];
		if (element != "None" && element != "All") cleanExits.push(element)
	}
	var cleanEntries = []
	for (let i = 0; i < career.fixedEntries.length; i++) {
		const element = career.fixedEntries[i];
		if (element != "None" && element != "All") cleanEntries.push(element)
	}

	arrPreviousButtonNames = cleanExits.concat(cleanEntries);
	arrPreviousButtonNames.push(career.name);
	*/
};



window.onload = (event) => {
	loadButtons(basicCareers, document.getElementById("basicCareers"))
	loadButtons(advancedCareers, document.getElementById("advancedCareers"))


	document.querySelector("#selectForm").addEventListener("submit", function (event) {
		event.preventDefault()
		var input = document.getElementById("chooseByName")
		if (careers.has(input.value)) {
			showCareer(input.value)
			input.value = ""
		} else {
			alert("Denne career eksisterer ikke.")
			input.value = ""
		}
	})

	document.querySelector("#search").addEventListener("submit", function (event) {
		event.preventDefault()
		
		var buttons = document.querySelectorAll(".careerButton:not(.example)")
		for (let i = 0; i < buttons.length; i++) {
			const element = buttons[i];
			element.classList.value = "careerButton"
		}
		
		var searchingIn = document.getElementById("searchIn")
		var searchingFor = document.getElementById("chooseValue")
		careers.forEach((value, key) => {
			if (doubleIndexOf(value[searchingIn.value], searchingFor.value) !== -1) {
				document.getElementById("career_" + key).classList = "careerButton searchResult"
			}
		})

		searchingIn.value = ""
		searchingFor.value = ""
	})
}