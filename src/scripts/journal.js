const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    }
]

let makeJournalEntryComponent = (journalEntries) => {
    let formater = "";
    formater += "date: " + journalEntries.date + "<br \>";
    formater += "concept: " + journalEntries.concept + "<br \>";
    formater += "entry: " + journalEntries.entry + "<br \>";
    formater += "mood: " + journalEntries.mood + "<br \>";

    return formater + "<hr \>";
}


function writeToDom(value) {
    // selects spot on dom and writes value to it
    let entrydombuilder1 = document.querySelector(".entryLog1")
    entrydombuilder1.innerHTML += value;
}

// event listiner for submit button
let button1 = document.querySelector("#button");
button1.addEventListener("click", dbwork);
function dbwork() {
    //concatinates ui values into journal entry object
    let date = document.getElementById("journaldate").value;
    let concept = document.getElementById("concepts").value;
    let entry = document.getElementById("entry").value;
    let mood = document.getElementById("mood").value;

    let journalEntry =
    {
        date: date,
        concept: concept,
        entry: entry,
        mood: mood
    }

    //write to dom
    writeToDom(makeJournalEntryComponent(journalEntry));
    //post to json file
    data.postjournalEntry(journalEntry);
}

// let journalarry = {};
fetch("http://localhost:8088/entries")
    .then(entries => entries.json())
    .then(parsaeddatabase => {
        console.table(parsaeddatabase)
    })
const data = {
    postjournalEntry(journalEntry) {
        fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntry)
        })
    }
}

function startUp() {
    //concatinate the constant journal entries into a string and write to dom
    let journalValue = "";
    for (let index = 0; index < journalEntries.length; index++) {
        journalValue += makeJournalEntryComponent(journalEntries[index]);
    }
    writeToDom(journalValue);
}
let fillin = document.querySelector("#sections")
let radioButton = document.querySelector("#radiobutton1")
radioButton.addEventListener("click", event => {
    journalEntries.forEach(journalEntries => {
       let finllin1 = journalEntries.filter(Sad)
        fillin.innerHTML = finllin1
    });
})


// startup call
startUp();
