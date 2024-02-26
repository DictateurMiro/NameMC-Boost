// Function badges to fetch and print badges to profile of user (26/02/2024)
// By DictateurMiro

// function sleep(ms) -> to make a pause to fix the problem of creation date and badges intertwines
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function final() {
	await sleep(1000); // wait 1 second before launch all function
    if (document.title.includes("Profil")) {
        badgesPrint(); // start function badgesPrint()
        for (let i = 0; i < 3; i++) {
            await sleep(i * 1000);
        }
        await fetchBadges(); // wait the function fetchBadges to finish
    } else {
        console.log("Debug (NameMC-Boost) >>> Badges can't show here, we are not in Profile zone");
    }
}

if (document.title.includes("Profil")) {
  // the function is already call in final() function
} else {
  console.log("Debug (NameMC-Boost) >>> Badges can't show here, we are not in Profile zone");
}

function badgesPrint() {
  var rows = document.querySelectorAll('.row.g-0');
  if (rows.length >= 4) {
    var thirdRow = rows[3];
    var newRow = document.createElement('div');

    newRow.className = 'row g-0';

    newRow.innerHTML = `
            <div class="col col-lg-3"><strong>Badges</strong></div>
            <div class="col-auto" id="badges_list">Loading...</div>`;

    thirdRow.parentNode.insertBefore(newRow, thirdRow.nextSibling);
  } else {
    console.error("Debug (NameMC-Boost) >>> Badges print can't show up here because the number of rows is less than 3.");
  }
}

async function fetchBadges() {
    let xpathExpressions = [
    '/html/body/main/div[2]/div[1]/div[1]/div[2]/div[1]/div[3]/samp', // xpath 1
    '/html/body/main/div[2]/div[1]/div[2]/div[2]/div[2]/div[3]/samp' // xpath 2
	  ];


	  let element = null;

	  for (let i = 0; i < xpathExpressions.length; i++) {
		try {
		  var xpathResult = document.evaluate(xpathExpressions[i], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
		  element = xpathResult.singleNodeValue;
		  if (element) break;
		} catch (error) {
		  console.error("Debug (NameMC-Boost) >>> Error (creationDate) :", xpathExpressions[i]);
		}
	  }

	  if (!element) {
		console.error("Debug (NameMC-Boost) >>> Nothing find with the xpath");
		return;
	  }
	
    var uuid = element.innerText;

    let apiUrl = "https://laby.net/api/v3/user/" + uuid + "/badges";
    let proxyUrl = "https://puzzle-verbena-flea.glitch.me/";

    try {
        let response = await fetch(proxyUrl + apiUrl);
        let data = await response.json();

        var badgesContainer = document.getElementById('badges_list');
        if (badgesContainer) {
            badgesContainer.innerHTML = ''; // clear the message "Loading..."

            if (data && data.length > 0) {
                data.forEach(badge => {
                    var badgeElement = document.createElement('span');
                    badgeElement.textContent = badge.name;
                    badgeElement.title = badge.description;
                    badgeElement.style.cursor = 'help';

                    if (badge !== data[data.length - 1]) {
                        badgeElement.textContent += ', ';
                    }

                    badgesContainer.appendChild(badgeElement);
                });
            } else {
                badgesContainer.textContent = '❌';
            }
        } else {
            console.error('Debug (NameMC-Boost) >>> Element with ID "badges_list" not found');
        }
    } catch (error) {
        console.error('Debug (NameMC-Boost) >>> Badges not found error : ', error);
    }
}

final();
