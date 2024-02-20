var elements = document.querySelectorAll('.card-header.py-1');

var targetElement;
for (var i = 0; i < elements.length; i++) {
    // Vérifie si l'élément contient l'un des textes spécifiés suivis d'un nombre
    if (/(Skins|Rupa|Aparences|Kulit|Skiny|Välimused|Aspectos|Presvlake|Skin|Skini|Išvaizdos|Kinézetek|Skall|Skórki|Skinuri|Skinit|Utseenden|Ciltler|Облици|Скины|Скинови|Скіни|त्वचा|สกิน|스킨|スキン|皮肤|外觀) \(\d+\)/.test(elements[i].textContent)) {
        targetElement = elements[i];
        break;
    }
}

if (targetElement) {
    var test = document.createElement('span');
    var link = document.createElement('a');
    var test2 = document.createElement('span');
    link.href = 'javascript:void(0);';
    link.id = 'toggleborder';
    test.textContent = " (";
    link.textContent = 'hide borders';
    test2.textContent = ")";

    var strongElement = document.createElement('strong');
    strongElement.appendChild(test);
    strongElement.appendChild(link);
    strongElement.appendChild(test2);

    // Ajoute le lien personnalisé à côté de l'élément contenant l'un des textes spécifiés
    targetElement.appendChild(strongElement);

    // Ajoute un écouteur d'événements au lien
    link.addEventListener('click', function() {
        toggleBorder();
    });
}


function toggleBorder() {
    var link = document.querySelector('#toggleborder');

    if (link.textContent === "hide borders") {
        hideBorder();
        link.textContent = "show borders";
    } else if (link.textContent === "show borders") {
        showBorder();
        link.textContent = "hide borders";
    }
}

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

//hideBorder();
