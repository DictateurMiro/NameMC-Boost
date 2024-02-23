// Function badges (22/02/2024)
// By DictateurMiro

function badgesPrint() {
  var rows = document.querySelectorAll('.row.g-0');
  if (rows.length >= 4) {
    var thirdRow = rows[3];
    var newRow = document.createElement('div');

    newRow.className = 'row g-0';

    newRow.innerHTML = `
            <div class="col col-lg-3"><strong>Badges</strong></div>
            <div class="col-auto" id="show_here_badges_list">Loading ...</div>`;

    thirdRow.parentNode.insertBefore(newRow, thirdRow.nextSibling);
  } else {
    console.error("Debug (NameMC-Boost) >>> Badges print can't show up here because the number of rows is less than 3.");
  }
}

if (document.title.includes("Profil")) {
  badgesPrint();
  fetchBadges();
} else {
  console.log("Debug (NameMC-Boost) >>> Badges can't show here, we are not in Profile zone");
}
