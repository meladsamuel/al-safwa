var bars = document.getElementById("bars");
window.onscroll = function() {myFunction()};
var nav = document.getElementById("nav");
var sticky = nav.offsetTop + 33;
console.log(nav.offsetTop);
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
bars.onclick = function () {
  nav.classList.toggle("active");
};
bars.onclick = function () {
  nav.classList.toggle("active");
};