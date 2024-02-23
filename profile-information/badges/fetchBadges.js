// Function fetch to pickup the badges from laby.net (22/02/2024)
// By DictateurMiro

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
      badgesContainer.innerHTML = ''; // clear message "Loading ..."

      if (data && data.length > 0) {
        data.forEach(badge => {
          // create element 'span' for all badges
          var badgeElement = document.createElement('span');
          badgeElement.textContent = badge.name;
          badgeElement.title = badge.description; // add description to the badges
          badgeElement.style.cursor = 'help'; // change cursor

          // add a space if it's not the last badges 
          if (badge !== data[data.length - 1]) {
            badgeElement.textContent += ', ';
          }

          // Ajouter l'élément du badge au conteneur
          badgesContainer.appendChild(badgeElement);
        });
      } else {
        // user don't have badges
        badgesContainer.textContent = '❌';
      }
    })
    .catch(error => {
      console.error('Debug (NameMC-Boost) >>> Badges not found error : ', error);
    });
}
