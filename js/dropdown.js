var barsOpen = document.getElementById("barsOpen"),
  barsClose = document.getElementById("barsClose"),
  list = document.getElementById("list"),
  nav = document.getElementById("nav"),
  sticky = nav.offsetTop + 33;
window.onscroll = function() {myFunction()};
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList = "nav box-shadow sticky";
  } else {
    nav.classList = "nav box-shadow";
  }
}
barsOpen.onclick = function () {
  list.classList = "list-unstyled end-ab active";
};
barsClose.onclick = function () {
  list.classList = "list-unstyled end-ab"; 
};