// Function badges (22/02/2024)
// By DictateurMiro

function badgesPrint() {
  var rows = document.querySelectorAll('.row.g-0');
  if (rows.length >= 4) {
    var thirdRow = rows[3];
    var newRow = document.createElement('div');

    newRow.className = 'row g-0';

    newRow.innerHTML = `
            <div class="col col-lg-3"><strong>Badges</strong></div>
            <div class="col-auto" id="show_here_badges_list">Loading ...</div>`;

    thirdRow.parentNode.insertBefore(newRow, thirdRow.nextSibling);
  } else {
    console.error("Debug (NameMC-Boost) >>> Badges print can't show up here because the number of rows is less than 3.");
  }
}

function fetchBadges() {
  var xpathResult = document.evaluate('/html/body/main/div[2]/div[1]/div[1]/div[2]/div[1]/div[3]/samp', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  var element = xpathResult.singleNodeValue;
  var uuid = element.innerText;

  let apiUrl = "https://laby.net/api/v3/user/" + uuid + "/badges";
  let proxyUrl = "https://puzzle-verbena-flea.glitch.me/";

  fetch(proxyUrl + apiUrl)
    .then(response => response.json())
    .then(data => {
      var badgesContainer = document.getElementById('show_here_badges_list');
      badgesContainer.innerHTML = ''; // Effacer le message "Loading ..."

      if (data && data.length > 0) {
        data.forEach(badge => {
          // Créer un élément span pour chaque badge
          var badgeElement = document.createElement('span');
          badgeElement.textContent = badge.name;
          badgeElement.title = badge.description; // Ajouter la description comme info-bulle
          badgeElement.style.cursor = 'help'; // Changer le curseur pour indiquer qu'il y a une info-bulle

          // Ajouter une virgule et un espace si ce n'est pas le dernier badge
          if (badge !== data[data.length - 1]) {
            badgeElement.textContent += ', ';
          }

          // Ajouter l'élément du badge au conteneur
          badgesContainer.appendChild(badgeElement);
        });
      } else {
        badgesContainer.textContent = '❌';
      }
    })
    .catch(error => {
      console.error('Debug (NameMC-Boost) >>> Badges not found error : ', error);
    });
}

if (document.title.includes("Profil")) {
  badgesPrint();
  fetchBadges();
} else {
  console.log("Debug (NameMC-Boost) >>> Badges can't show here, we are not in Profile zone");
}
