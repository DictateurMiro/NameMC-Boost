// Function checkStartCreationDate (23/02/2024)
// By DictateurMiro

function checkStartCreationDate() {
  if (window.location.href.includes("profile")) {
    creationDate();
  } else {
    console.log("La fonction 'creationDate()' n'est pas exécutée car le titre de la page ne contient pas 'Profil'.");
  }
}

// Call function to start
checkStartCreationDate();
