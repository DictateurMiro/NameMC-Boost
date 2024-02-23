// Function toggleHistory to switch between "show name history" and "hide name history" (22/02/2024)
// By DictateurMiro

function toggleHistory() {
  var link = document.querySelector('#togglehistory');

  if (link.textContent === "show name history") {
    showHistory();
    link.textContent = "hide name history";
  } else if (link.textContent === "hide name history") {
    hideHistory();
    link.textContent = "show name history";
  }
}
