// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  //Get the button
  var gotopBtn = document.getElementById("gotopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    gotopBtn.style.display = "block";
  } else {
    gotopBtn.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onscroll = function() {scrollFunction()};