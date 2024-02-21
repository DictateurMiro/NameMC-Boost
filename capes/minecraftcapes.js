var pageTitle = document.title;
var username = pageTitle.split('|')[0].trim();

fetch('https://api.capes.dev/load/' + username)
  .then(response => response.json())
  .then(data => {
    // Vérifier si la cape est trouvée
    if (data.minecraftcapes && data.minecraftcapes.frontImageUrl) {
        var cards = document.querySelectorAll('.card.mb-3');
        var lastCard = cards[cards.length - 2];
        var newCard = document.createElement('div');
        newCard.className = 'card mb-3';

        newCard.innerHTML = `
            <div class="card-header py-1">
                <strong>Cape de <a href="https://minecraftcapes.net/" target="_blank" rel="nofollow noopener noreferrer">MinecraftCapes</a></strong>
            </div>
            <div class="card-body text-center" id="capeContainer" style="padding: 3px">
                <img src="${data.minecraftcapes.frontImageUrl}" class="cape-2d align-top skin-button skin-button-selected" alt="Cape MinecraftCapes" width="40px" height="64" style="image-rendering: pixelated;">
            </div>`;

        lastCard.parentNode.insertBefore(newCard, lastCard.nextSibling);
    } else {
        // La cape n'est pas trouvée: Il faut rien afficher
        console.log("Debug (NameMC-Boost) >>> no find for MinecraftCapes to", username);
    }
  })
  .catch(error => {
    console.error('Debug (NameMC-Boost) >>> Error to find cape from MinecraftCapes, api dead ? ', error);
  });
