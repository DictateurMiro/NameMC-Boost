// Function creationDate to find the creation date of account with uuid (23/02/2024)
// By DictateurMiro

function creationDate() {
  // expression xpath for the uuid (two because one with the user already register on namemc and the other not register in namemc)
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
  let apiUrl = "https://api.ashcon.app/mojang/v2/user/" + uuid;

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    if (data && data.created_at) {
      var date = formatDate(data.created_at);
      datePrint(date);
    } else {
      console.error("Debug (NameMC-Boost) >>> Unable to find the date of creation of UUID :", uuid);
      datePrint(null);
    }
  });
}

// Function formatDate to pickup date (YYYY-MM-DD) to convert to (DD month-in-letter YYYY) (23/02/2024)
// By DictateurMiro

function formatDate(dateString) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let parts = dateString.split('-'); // split YYYY-MM-DD
  let year = parts[0];
  let monthIndex = parseInt(parts[1], 10) - 1;
  let day = parts[2];

  return `${day} ${months[monthIndex]} ${year}`;
}
