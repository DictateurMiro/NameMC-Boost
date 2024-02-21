// Function ShowBorder (21/02/2024)
// By DictateurMiro

function showBorder() {
    var divs = document.querySelectorAll('div');
    divs.forEach(function(div) {
        if (div.style.width === "300px" && div.style.margin === "auto" && div.style.textAlign === "center") {
            div.style.width = "324px";
        }
    });

    var skin2dElements = document.querySelectorAll('.skin-2d');
    skin2dElements.forEach(function(element) {
        element.style.borderRadius = "12.5%";
    });

  var skinbuttonElement = document.querySelectorAll('.skin-button');
  skinbuttonElement.forEach(function(element) {
    element.style.margin = "2px";
  });
}
