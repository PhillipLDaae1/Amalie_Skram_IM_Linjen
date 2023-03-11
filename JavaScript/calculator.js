// Lager variablene som trengs
let history = [];
let operation;
let seperator;

// Funksjonen som kjører når "legg til" trykkes.
function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;

    // Kalkulerer og legger til symbol til "operation" som brukes for å vise utregningen i loggen
    if (op == "add") {
        calculate = a + b;
        operation = "+";
    } else if (op == "min") {
        calculate = a - b;
        operation = "-";
    } else if (op == "div") {
        calculate = a / b;
        operation = "/";
    } else if (op == "mul") {
        calculate = a * b;
        operation = "*";
    }
    
    document.getElementById("result").innerHTML = calculate;

    // Legger kalkulasjonen til i localstorage
    // Hvis det allerede er noe i localStoragen
    if(localStorage.getItem("historyStorage")){  

      // Split verdiene inn i et array
      history = JSON.parse(localStorage.getItem("historyStorage"));
      history.push(` ${a} ${operation} ${b} = ${calculate}`);
      localStorage.setItem("historyStorage", JSON.stringify(history));
    } else{
        // Hvis localStoragen ikke finnes allerede
        history.push(` ${a} ${operation} ${b} = ${calculate}`);
        localStorage.setItem("historyStorage", JSON.stringify(history));
    }    
      
}

// Kjører når "legg til" trykkes og viser utregningen i loggen
function checkLocalStorage() {
    if (history != null) {
        document.getElementById("his").innerHTML = localStorage.getItem("historyStorage");
    }

}

// Fjerner verdiene i inputs
function clearAll() {
    document.getElementById("form").reset();
    document.getElementById("result").innerHTML = "";
}

// Fjerner verdier i localStorage
const clearLocalStorage = () => {
  localStorage.removeItem("historyStorage");
  history = [];
}
