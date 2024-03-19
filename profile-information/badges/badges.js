// Function badges to fetch and print badges to profile of user (26/02/2024)
// By DictateurMiro

// variable badges json file + laby 
let badgesFromLabyFound = false;
let badgesFromJsonFound = false;

// function sleep(ms) -> to make a pause to fix the problem of creation date and badges intertwines
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// function fetchBadgeNames() -> to fetch badge names from JSON
async function fetchBadgeNames() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/DictateurMiro/NameMC-Boost/Chrome/profile-information/badges/rank.json");
        const text = await response.text();
        console.log("Debug (NameMC-Boost) >>> Raw JSON Data: ", text);
        const badgeData = JSON.parse(text);
        return badgeData;
    } catch (error) {
        console.error('Debug (NameMC-Boost) >>> Error fetching or parsing JSON: ', error);
    }
}

// function final() -> Main function to execute badge fetching
async function final() {
    await sleep(1000);
    if (document.title.includes("Profil")) {
        badgesPrint();
        for (let i = 0; i < 3; i++) {
            await sleep(i * 1000);
        }
        await fetchLabyBadges();
        await fetchJsonBadges();

        var badgesContainer = document.getElementById('badges_list');
        if (!badgesFromLabyFound && !badgesFromJsonFound && badgesContainer) {
            badgesContainer.textContent = '❌';
        }
    } else {
        console.log("Debug (NameMC-Boost) >>> Badges can't show here, we are not in Profile zone");
    }
}

// function badgesPrint() -> to print badge area
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

// function fetchLabyBadges() -> to fetch badges from Laby
async function fetchLabyBadges() {
    let xpathExpressions = [
        '/html/body/main/div[2]/div[1]/div[1]/div[2]/div[1]/div[3]/samp',
        '/html/body/main/div[2]/div[1]/div[2]/div[2]/div[2]/div[3]/samp'
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
            badgesContainer.innerHTML = '';

            if (data && data.length > 0) {
                badgesFromLabyFound = true;
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
            }
        } else {
            console.error('Debug (NameMC-Boost) >>> Element with ID "badges_list" not found');
        }
    } catch (error) {
        console.error('Debug (NameMC-Boost) >>> Badges not found error : ', error);
    }
	
	if (badgesFromLabyFound && badgesContainer.childNodes.length > 0) {
        badgesContainer.appendChild(document.createTextNode(', ')); // Ajouter une virgule et un espace
    }
}

// function fetchJsonBadges() -> to fetch badges from JSON
async function fetchJsonBadges() {
    let badgeNamesData = await fetchBadgeNames();

    var badgesContainer = document.getElementById('badges_list');
    if (!badgesContainer) {
        console.error('Debug (NameMC-Boost) >>> Element with ID "badges_list" not found');
        return;
    }

    let badgesJsonArray = [];

    Object.keys(badgeNamesData).forEach(badgeKey => {
        const badgeInfo = badgeNamesData[badgeKey];
        Object.keys(badgeInfo).forEach(userKey => {
            if (["name", "description", "icon_url"].includes(userKey)) {
                return;
            }

            let username = badgeInfo[userKey];
            if (document.URL.includes(username)) {
                badgesFromJsonFound = true;
                var badgeElement = document.createElement('span');
                badgeElement.textContent = badgeInfo.name;
                badgeElement.title = badgeInfo.description;
                badgeElement.style.cursor = 'help';

                badgesJsonArray.push(badgeElement);
            }
        });
    });

    for (let i = 0; i < badgesJsonArray.length; i++) {
        badgesContainer.appendChild(badgesJsonArray[i]);
        if (i !== badgesJsonArray.length - 1) {
            badgesContainer.appendChild(document.createTextNode(', '));
        }
    }
	if (!badgesFromJsonFound && badgesFromLabyFound) {
        badgesContainer.removeChild(badgesContainer.lastChild); // Enlever le dernier nœud (virgule et espace)
    }

    for (let i = 0; i < badgesJsonArray.length; i++) {
        badgesContainer.appendChild(badgesJsonArray[i]);
        if (i !== badgesJsonArray.length - 1) {
            badgesContainer.appendChild(document.createTextNode(', '));
        }
    }
}

final();
