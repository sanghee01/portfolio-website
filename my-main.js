"use strict";

const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#4f6bdb";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
