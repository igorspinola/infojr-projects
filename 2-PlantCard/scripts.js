let iconBar = document.querySelector(".icon-bar");
let share = document.querySelector("#share-symbol");

share.addEventListener("click", showSocials);

function showSocials() {
  if (iconBar.style.display === "none") {
      iconBar.style.display = "flex";
  } else {
      iconBar.style.display = "none";
  }
}
