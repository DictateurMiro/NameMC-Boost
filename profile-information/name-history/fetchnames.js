// Function fetchNames from laby.net (22/02/2024)
// By DictateurMiro

function fetchNames() {
  return new Promise((resolve, reject) => {
      var xpathResult = document.evaluate('/html/body/main/div[2]/div[1]/div[1]/div[2]/div[1]/div[3]/samp', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      var element = xpathResult.singleNodeValue;
      var uuid = element.innerText;

      let apiUrl = "https://laby.net/api/v3/user/" + uuid + "/names";
      let proxyUrl = "https://puzzle-verbena-flea.glitch.me/";

    fetch(proxyUrl + apiUrl)
    .then(response => response.json())
    .then(data => {
        let names = data.map(item => item.name).reverse(); // Inverse l'ordre des noms
        resolve(names);
    })
    .catch(error => {
        console.log('Erreur lors de la récupération des noms:', error);
        reject(error);
    });
  });
}
