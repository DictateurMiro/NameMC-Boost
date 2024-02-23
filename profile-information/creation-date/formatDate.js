// Function formatDate to pickup date (YYYY-MM-DD) to convert to (DD month-in-letter YYYY) (23/02/2024)
// By DictateurMiro

function formatDate(dateString) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let parts = dateString.split('-'); // split YYYY-MM-DD
  let year = parts[0];
  let monthIndex = parseInt(parts[1], 10) - 1;
  let day = parts[2];

  return `${day} ${months[monthIndex]} ${year}`;
}
