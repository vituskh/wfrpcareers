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
		description: ""
	},	
*/




function findCareer(arrayToSearch, nameToSearchFor) {
	for (var i = 0; i < arrayToSearch.length; i++) {
		if (arrayToSearch[i].name.toLowerCase() == nameToSearchFor.toLowerCase()) {
			return arrayToSearch[i];
		}
	}
};

function returnCareersButtonsHTML(arrayToSearch, careerType) {
	var text = ''
	for (var i = 0; i < arrayToSearch.length; i++) {
		if(arrayToSearch[i].type.toLowerCase() == careerType.toLowerCase()) text = text + '<button id="button_' + arrayToSearch[i].name.replace(/ /g, '') + '" class="showCareer" onclick="showCareer(\'' + arrayToSearch[i].name + '\')"> ' + arrayToSearch[i].name + '</button>\n'
		
	}
	return text
};

function showCareer(careerName) {
	console.log(careerName);
	var career = findCareer(careers, careerName);


	document.getElementById("valueName").innerHTML = (careerName);
	document.getElementById("valueType").innerHTML = (career.type);
	document.getElementById("valueWS").innerHTML = (career.mainstats.ws);
	document.getElementById("valueBS").innerHTML = (career.mainstats.bs);
	document.getElementById("valueS").innerHTML = (career.mainstats.s);
	document.getElementById("valueT").innerHTML = (career.mainstats.t);
	document.getElementById("valueAg").innerHTML = (career.mainstats.ag);
	document.getElementById("valueInt").innerHTML = (career.mainstats.int);
	document.getElementById("valueWP").innerHTML = (career.mainstats.wp);
	document.getElementById("valueFel").innerHTML = (career.mainstats.fel);
	document.getElementById("valueA").innerHTML = (career.secondstats.attacks);
	document.getElementById("valueW").innerHTML = (career.secondstats.wounds);
	document.getElementById("valueSB").innerHTML = "-"
	document.getElementById("valueTB").innerHTML = "-"
	document.getElementById("valueM").innerHTML = "-"
	document.getElementById("valueMag").innerHTML = (career.secondstats.magic);
	document.getElementById("valueIP").innerHTML = "-"
	document.getElementById("valueFP").innerHTML = "-"
	document.getElementById("valueDescription").innerHTML = (career.description);
	document.getElementById("valueSource").innerHTML = (career.source);
	var skills = ""
	for (let i = 0; i < career.skills.length; i++) {
		const element = career.skills[i];
		skills += element + ", "
	}
	document.getElementById("valueSkills").innerHTML = (skills);
	var talents = ""
	for (let i = 0; i < career.talents.length; i++) {
		const element = career.talents[i];
		talents += element + ", "
	}
	document.getElementById("valueTalents").innerHTML = (talents);
	var trappings = ""
	for (let i = 0; i < career.trappings.length; i++) {
		const element = career.trappings[i];
		trappings += element + ", "
	}
	document.getElementById("valueTrappings").innerHTML = (trappings);
	var entries = ""
	for (let i = 0; i < career.entries.length; i++) {
		const element = career.entries[i];
		entries += element + ", "
	}
	document.getElementById("valueEntries").innerHTML = (entries);
	var exits = ""
	for (let i = 0; i < career.exits.length; i++) {
		const element = career.exits[i];
		exits += element + ", "
	}
	document.getElementById("valueExits").innerHTML = (exits);
	document.getElementById("valueNotes").innerHTML = (career.notes);

	// reset previous button colors
	for (var p = 0; p < arrPreviousButtonNames.length; p++) {
		var previousButtonName = 'button_' + arrPreviousButtonNames[p].replace(/ /g, '');
		document.getElementById(previousButtonName).classList.remove('green');
		document.getElementById(previousButtonName).classList.remove('orange');
		document.getElementById(previousButtonName).classList.remove('red');
	}

	// set current to orange
	document.getElementById("button_" + career.name.replace(/ /g, '')).classList.add("orange")

	// set exits to green

	for (let i = 0; i < career.exits.length; i++) {
		const element = career.exits[i];
		for (let o = 0; o < careers.length; o++) {
			const element2 = careers[o];
			if (element2.name.toLowerCase() == element.toLowerCase()) {
				document.getElementById("button_" + element2.name.replace(/ /g, '')).classList.add("green")
				
			}
		}
	}

	// set entries to red

	for (let i = 0; i < career.entries.length; i++) {
		const element = career.entries[i];
		for (let o = 0; o < careers.length; o++) {
			const element2 = careers[o];
			if (element2.name.toLowerCase() == element.toLowerCase()) {
				document.getElementById("button_" + element2.name.replace(/ /g, '')).classList.add("red")
				
			}
		}
	}
	
	var cleanExits = []
	for (let i = 0; i < career.exits.length; i++) {
		const element = career.exits[i];
		if (element != "None" && element != "All") cleanExits.push(element)
	}
	var cleanEntries = []
	for (let i = 0; i < career.entries.length; i++) {
		const element = career.entries[i];
		if (element != "None" && element != "All") cleanEntries.push(element)
	}

	arrPreviousButtonNames = cleanExits.concat(cleanEntries);
	arrPreviousButtonNames.push(career.name);
};	

window.onload = (event) => {
	document.getElementById("basiccareers").innerHTML = returnCareersButtonsHTML(careers, "basic")
	document.getElementById("advancedcareers").innerHTML = returnCareersButtonsHTML(careers, "advanced")
}