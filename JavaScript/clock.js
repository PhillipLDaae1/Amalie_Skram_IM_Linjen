// Funksjon som sjekker hva tiden er og allokerer veriden til variabler
function startTime() {
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    m = checkTime(m)
    document.getElementById("clock").innerHTML = h + ":" + m
    setTimeout(startTime, 10000)
}

// Legger til en "0" til minutter når de er under 10
function checkTime(i) {
    if (i < 10) { i = "0" + i}
    return i
}

