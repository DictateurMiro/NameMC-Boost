function checkButton() {
    var xpath = '/html/body/main/div[2]/div[1]/div[3]/div[2]';
    var xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    var element = xpathResult.singleNodeValue;
    return element && element.innerHTML.includes("—");
}
