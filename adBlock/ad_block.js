function hideIframesAndAvpPlayerUi() {
    // tag : iframe
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
        iframe.style.display = 'none';
    });
  
    // tag : avp-player-ui
    var avpPlayerUiElements = document.querySelectorAll('.avp-player-ui');
    avpPlayerUiElements.forEach(function(elem) {
        elem.style.display = 'none';
    });
}

// wait for the page load
document.addEventListener('DOMContentLoaded', function() {
    hideIframesAndAvpPlayerUi();
});
