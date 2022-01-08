const navbar = document.querySelector("#navbar");

let last_known_scroll_position = 0;
let ticking = false;

window.addEventListener("scroll", function (e) {
  console.dir(window.scrollY);
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#4f6bdb";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
