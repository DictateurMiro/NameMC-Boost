// Function show MinecraftCapes (21/02/2024)
// By DictateurMiro

var pageTitle = document.title;
var username = pageTitle.split('|')[0].trim();

let ourSubstring = "Rechercher";

if (pageTitle.includes(ourSubstring)) {
	console.log("Debug (NameMC-Boost) >>> Don't show minecraft cape here")
} 

else {
	fetch('https://api.capes.dev/load/' + username)
	  .then(response => response.json())
	  .then(data => {
		// verif if cape exist
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
			// debug capes doesn't exist
			console.log("Debug (NameMC-Boost) >>> no find for MinecraftCapes to", username);
		}
	  })
	  .catch(error => {
		// debug api dead or no connecion internet, api not reachable
		console.log('Debug (NameMC-Boost) >>> Error to find cape from MinecraftCapes, api dead ? ', error);
	  });
}
