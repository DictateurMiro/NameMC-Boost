if (checkButton()) {
    fetchNames();
    var cardHeaders = document.querySelectorAll('.card-header.py-1');
    if (cardHeaders.length >= 2) {
        var secondCardHeader = cardHeaders[1];

        var openingParenthesis = document.createTextNode(' (');
        var closingParenthesis = document.createTextNode(')');

        var historyLink = document.createElement('a');
        historyLink.textContent = 'show name history';
        historyLink.id = "togglehistory";
        historyLink.href = '#';
        historyLink.onclick = function(event) {
            event.preventDefault();
            toggleHistory();
        };

        var strongElement = secondCardHeader.querySelector('strong');
        if (strongElement) {
            strongElement.parentNode.insertBefore(openingParenthesis, strongElement.nextSibling);
            strongElement.parentNode.insertBefore(historyLink, openingParenthesis.nextSibling);
            strongElement.parentNode.insertBefore(closingParenthesis, historyLink.nextSibling);
        }
    }
}
