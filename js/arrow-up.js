"use strict";

const arrowBtn = document.querySelector("#arrow-up-btn");
const home2 = document.querySelector(".home__container");
const homeHeight2 = home2.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight2) {
    arrowBtn.style.opacity = 1;
  } else {
    arrowBtn.style.opacity = 0;
  }
});

arrowBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
