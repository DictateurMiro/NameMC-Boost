// Function HideBorder (21/02/2024)
// By DictateurMiro

function hideBorder() {
    var divs = document.querySelectorAll('div');
    divs.forEach(function(div) {
        if (div.style.width === "324px" && div.style.margin === "auto" && div.style.textAlign === "center") {
            div.style.width = "300px";
        }
    });

    var skin2dElements = document.querySelectorAll('.skin-2d');
    skin2dElements.forEach(function(element) {
        element.style.borderRadius = "0%";
    });

    var skinbuttonElement = document.querySelectorAll('.skin-button');
    skinbuttonElement.forEach(function(element) {
      element.style.margin = "0";
    });
}
