// Lager variabler som brukes
let calendarHistory = [];
let seperator = "<br>";
let inputValue;

// Funksjon som brukes for å legge til verdiene til localStorage og vise dem i HTML
// Under hentes verdien i input formen og setter arrayet til et tomt et
const addInput = () => {
    calendarHistory = [];
    inputValue = document.getElementById("calendarInput").value;
    
    // Hvis input verdien ikke er tom settes localStorage med verdien som key og value
    if (inputValue != "") {
        localStorage.setItem(`${inputValue}`, `${inputValue}`);

        // En while løkke som går gjennom hver index av localStoragen og pusher hver verdi inn i arrayet som senere vises
        i = 0;
        while (i < localStorage.length) {
            
            if(localStorage.key(i) == "historyStorage") {
                i++;
            } else {
            calendarHistory.push(`- ${localStorage.key(i)}`);
            i++;
            }
        }

        // Funksjon som tar arrayet og all informasjonen, og legger til en HTML <br> for å få flere linjer i HTML
        // Funksjonen lager og en variable som blir vist i HTML
        const seperate = (calendarHistory, seperator) => {
            let outputValue = calendarHistory.join(seperator);
            document.getElementById("calendarOutput").innerHTML = outputValue;
        }

        // Kjører funksjonen med calendarHistory og seperator som argumenter
        seperate(calendarHistory, seperator);
    }

    // Setter input feltet til null for hver gang man trykker på "legg til"
    document.getElementById("calendarInput").value = "";
}

// Funksjon som viser hva som finnes i localStoragen hver gang siden laster
// Samme kode som tidligere, bare "for" er brukt her for å vise at begge type løkker fungerer.
const loadCalendar = () => {
    for (i = 0; i < localStorage.length; i++) {

        if(localStorage.key(i) == "historyStorage") {
            break;
        } else {
        calendarHistory.push(`- ${localStorage.key(i)}`);
        }
    }

    const seperate = (calendarHistory, seperator) => {
        let outputValue = calendarHistory.join(seperator);
        document.getElementById("calendarOutput").innerHTML = outputValue;
    }

    seperate(calendarHistory, seperator);
}

// Kode som fjerner alt i localStorage for å tømme kalenderen.
const clearAll = () => {
    calendarHistory = [];
    localStorage.clear();
    document.getElementById("calendarOutput").innerHTML = "";
}