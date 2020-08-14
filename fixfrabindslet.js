    var outputarray = []
    function exists(check) {
        for (let i = 0; i < outputarray.length; i++) {
            const element = outputarray[i];
            if (element.name.toLowerCase() == check.toLowerCase()) return true
        }

        return false
    }
    for (let i = 0; i < arrCareers.length; i++) {
        const element = arrCareers[i];
        var thisOutput = {}
        thisOutput.name = element[0]
        thisOutput.type = element[1]
        thisOutput.mainstats = {}
        thisOutput.mainstats.ws = element[3]
        thisOutput.mainstats.bs = element[4]
        thisOutput.mainstats.s = element[5]
        thisOutput.mainstats.t = element[6]
        thisOutput.mainstats.ag = element[7]
        thisOutput.mainstats.int = element[8]
        thisOutput.mainstats.wp = element[9]
        thisOutput.mainstats.fel = element[10]
        thisOutput.secondstats = {}
        thisOutput.secondstats.attacks = element[11]
        thisOutput.secondstats.wounds = element[12]
        thisOutput.secondstats.magic = element[16]
        thisOutput.description = element[19]
        thisOutput.skills = element[20].split(";")[0].split(", ").concat(element[20].split(";").splice(1,100000))
        thisOutput.talents = element[21].split(";")[0].split(", ").concat(element[21].split(";").splice(1,100000))
        thisOutput.trappings = element[22].split(";")[0].split(", ").concat(element[22].split(";").splice(1,100000))
        thisOutput.entries = element[23].split(";")[0].split(", ").concat(element[23].split(";").splice(1,100000))
        thisOutput.exits = element[24].split(";")[0].split(", ").concat(element[24].split(";").splice(1,100000))
        thisOutput.notes = element[25]
        thisOutput.source = element[26]
        outputarray.push(thisOutput)
    }
    for (let i = 0; i < outputarray.length; i++) {
        //først gå igennem entries + exits og fjern alle der ikke eksisterer

        const element = outputarray[i];
        
        for (let o = 0; o < element.entries.length; o++) {
            const element2 = element.entries[o];
            if (!exists(element2) && element2 != "All") {
                element.entries.splice(o, 1)
                o -= 1
            }
        }
        for (let o = 0; o < element.exits.length; o++) {
            const element2 = element.exits[o];
            if(element.name == "Apprentice Witch") console.log("Tjekker " + element.name + " - exit " + element2 + " (cleaned: " + element2.split(" (")[0] + " (eksisterer: " + exists(element2.split(" (")[0]))
            if (!exists(element2.split(" (")[0]) && element2 != "All") {
                if(element.name == "Apprentice Witch") console.log("Fjernede " + element2.split(" (")[0] + " fra " + element.name)
                element.exits.splice(o, 1)
                o -= 1
            }
        }


        //derefter, hvis career y har career x som exit, så sørg for at career x har career y som entry
        //console.log("checking " + element.name)
        for (let o = 0; o < element.exits.length; o++) {
            const element2 = element.exits[o];
            //console.log("found exit " + element2)
            for (let k = 0; k < outputarray.length; k++) {
                const element3 = outputarray[k];
                if (element3.name.split(" (")[0].toLowerCase() != element2.split(" (")[0].toLowerCase()) continue
                //console.log("found exit match " + element3.name)
                //console.log("entries: " + element3.entries)
                if (element3.entries.indexOf(element.name.split(" (")[0]) == -1) { outputarray[k].entries.push(element.name); /*console.log("did not find " + element.name + " in entries, added. new entries: " + outputarray[k].entries) */}


                break
            }
        }
        for (let o = 0; o < element.entries.length; o++) {
            const element2 = element.entries[o];
            //console.log("found exit " + element2)
            for (let k = 0; k < outputarray.length; k++) {
                const element3 = outputarray[k];
                if (element3.name.split(" (")[0].toLowerCase() != element2.split(" (")[0].toLowerCase()) continue
                //console.log("found exit match " + element3.name)
                //console.log("entries: " + element3.entries)
                if (element3.exits.indexOf(element.name.split(" (")[0]) == -1) { outputarray[k].exits.push(element.name); /*console.log("did not find " + element.name + " in entries, added. new entries: " + outputarray[k].entries) */}


                break
            }
        }



        //tilsidst vil vi ikke have at exits + entries er tomme

        if (element.exits.length == 0) element.exits = ["None"]
        if (element.entries.length == 0) element.entries = ["None"]
    }




