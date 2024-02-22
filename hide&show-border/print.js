// Print element in the page of profile NameMC (21/02/2024)
// By DictateurMiro

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
