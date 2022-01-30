"use strict";
const navbarMenu = document.querySelectorAll(".navbar__menu__item");
const homeLoc = document.querySelector("#home").offsetTop;
const aboutLoc = document.querySelector("#about").offsetTop;
const skillsLoc = document.querySelector("#skills").offsetTop;
const workLoc = document.querySelector("#work").offsetTop;
const testimonLoc = document.querySelector("#testimonials").offsetTop;
const contactLoc = document.querySelector("#contact").offsetTop;
const contactmeBtn = document.querySelector(".home__contact");

navbarMenu[0].addEventListener("click", () => {
  window.scrollTo({ top: homeLoc - navbarHeight, behavior: "smooth" });
  console.dir(navbar);
});
navbarMenu[1].addEventListener("click", () => {
  window.scrollTo({ top: aboutLoc - navbarHeight, behavior: "smooth" });
  console.dir(navbar);
});
navbarMenu[2].addEventListener("click", () => {
  window.scrollTo({ top: skillsLoc - navbarHeight, behavior: "smooth" });
});
navbarMenu[3].addEventListener("click", () => {
  window.scrollTo({ top: workLoc - navbarHeight, behavior: "smooth" });
});
navbarMenu[4].addEventListener("click", () => {
  window.scrollTo({ top: testimonLoc - navbarHeight, behavior: "smooth" });
});
navbarMenu[5].addEventListener("click", () => {
  window.scrollTo({ top: contactLoc - navbarHeight, behavior: "smooth" });
});
contactmeBtn.addEventListener("click", () => {
  window.scrollTo({ top: contactLoc - navbarHeight, behavior: "smooth" });
});
