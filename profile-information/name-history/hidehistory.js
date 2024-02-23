// Function hideHistory from history profile (22/02/2024)
// By DictateurMiro

function hideHistory() {
    var xpathBase = '/html/body/main/div[2]/div[1]/div[3]/div[2]/table/tbody/tr';
    var index = 3; // Commencer par le deuxième nom (en supposant que le premier est à l'index 1)

    while (true) {
        var xpath = `${xpathBase}[${index}]/td[2]`;
        var xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        var element = xpathResult.singleNodeValue;

        if (!element) break;

        element.textContent = '—'; // Remplacer le contenu par un trait, pour être comme sur namemc
        index += 2; // Passer au prochain nom (en sautant une ligne à chaque fois)
    }
}
