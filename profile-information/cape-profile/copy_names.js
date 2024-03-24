// Function copy_names to copy the names of people with a cape into the clipboard (22/03/2024)
// By DictateurMiro

function printCopyLink() {
    // check if the page is the cape section
    var h1Exist = document.querySelector('h1.text-center');
    var smallExist = document.querySelector('small.text-muted.text-nowrap');

    if (h1Exist && smallExist) {
        var cardHeader = document.querySelector('.card-header.py-1');
        
        var link = document.createElement('a');
        link.textContent = 'copy names';
        link.href = '#';

        link.onclick = function(e) {
            e.preventDefault();
            copyNames();
        };

        var before = document.createTextNode(' (');
        var after = document.createTextNode(') ');

        cardHeader.appendChild(before);
        cardHeader.appendChild(link);
        cardHeader.appendChild(after);
    } else {
        console.log("Debug (NameMC-Boost) >>> No capes section here");
    }
}

function copyNames() {
    var links = document.querySelectorAll('.card-body.player-list.py-2 a');
    var names = Array.from(links).map(link => link.textContent).join('\n');

    navigator.clipboard.writeText(names)
        .then(() => console.log('Debug (NameMC-Boost) >>> Names copy into clipboard'))
        .catch(err => console.log('Debug (NameMC-Boost) >>> Error while copy : ', err));
}

// Print button
printCopyLink();
