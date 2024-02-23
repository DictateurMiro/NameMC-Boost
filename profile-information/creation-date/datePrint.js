function datePrint(date) {
  var content;
  if (date) {
    content = date;
  } else {
    content = `<span title="Le compte n'a pas été enregistré sur l'api que nous utilisons">❌</span>`;
  }

  var rows = document.querySelectorAll('.row.g-0');
  if (rows.length >= 4) {
    var thirdRow = rows[3];
    var newRow = document.createElement('div');

    newRow.className = 'row g-0';
    newRow.innerHTML = `
            <div class="col col-lg-3"><strong>Creation Date : </strong></div>
            <div class="col-auto" id="show_here_badges_list">${content}</div>`;

    thirdRow.parentNode.insertBefore(newRow, thirdRow.nextSibling);
  } else {
    console.error("Debug (NameMC-Boost) >>> Badges print can't show up here because the number of rows is less than 3.");
  }
}
