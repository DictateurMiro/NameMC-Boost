// Function to print element in the page of profile NameMC (21/02/2024)
// By DictateurMiro

function loadFontAwesome() {
    if (!document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"]')) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css';
        document.head.appendChild(link);
    }
}

function show() {
    loadFontAwesome();

    var elements = document.querySelectorAll('.card-header.py-1');

    var targetElement;
    for (var i = 0; i < elements.length; i++) {
        if (/(Skins|Rupa|Aparences|Kulit|Skiny|Välimused|Aspectos|Presvlake|Skin|Skini|Išvaizdos|Kinézetek|Skall|Skórki|Skinuri|Skinit|Utseenden|Ciltler|Облици|Скины|Скинови|Скіни|त्वचा|สกิน|스킨|スキン|皮肤|外觀) \(\d+\)/.test(elements[i].textContent)) {
            targetElement = elements[i];
            break;
        }
    }

    if (targetElement) {
        var link = document.createElement('a');
        link.href = 'javascript:void(0);';
        link.id = 'toggleborder';
        link.innerHTML = '<i class="fas fa-download"></i>';
        link.style.cssText = 'float: right;';

        targetElement.appendChild(link);

        link.addEventListener('click', function() {
            combineCanvasImages();
        });
    }
}

show();
