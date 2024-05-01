let iconBar = document.querySelector(".icon-bar");
let share = document.querySelector("#share-symbol");

share.addEventListener('mouseenter', showSocials);
share.addEventListener('mouseout', hideSocials);

function showSocials() {
    iconBar.style.display = 'flex';
}
function hideSocials() {
  iconBar.style.display = 'none';
}
