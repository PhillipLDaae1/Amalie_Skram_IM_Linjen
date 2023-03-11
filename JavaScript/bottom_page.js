let popup = document.getElementById("popup");

// Når en bruker scroller helt ned på siden vil klassen "open_popup" legges til i html, som gjør den synlige via css
window.onscroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2) {
        popup.classList.add("open_popup");
    }
}

function closePopup() {
    popup.classList.remove("open_popup");
}

function goBackOnePage() {
    window.history.go(-1);
    return false;
}

