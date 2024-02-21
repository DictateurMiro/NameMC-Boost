// Function ToggleBorder (21/02/2024)
// By DictateurMiro

function toggleBorder() {
    var link = document.querySelector('#toggleborder');

    if (link.textContent === "hide borders") {
        hideBorder();
        link.textContent = "show borders";
    } else if (link.textContent === "show borders") {
        showBorder();
        link.textContent = "hide borders";
    }
}
