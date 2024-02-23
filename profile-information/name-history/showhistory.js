function showHistory() {
    fetchNames().then(names => {
        names.forEach((name, index) => {
            var xpath = `/html/body/main/div[2]/div[1]/div[3]/div[2]/table/tbody/tr[${1 + index * 2}]/td[2]`;
            var xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            var element = xpathResult.singleNodeValue;

            if (element) {
                if (name === "－") {
                    element.textContent = '❌';
                } else {
                    var nameLink = document.createElement('a');
                    nameLink.href = '/search?q=' + encodeURIComponent(name);
                    nameLink.textContent = name;
                    element.textContent = '';
                    element.appendChild(nameLink);
                }
            }
        });
    });
}
