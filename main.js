const jumbotron = document.querySelector("header.jumbotron");
const navbar = document.querySelector("div.navbar");
const menuButton = document.querySelector("#menuButton");
const menuButtonIcon = document.querySelector(".bi-text-right");
const siteNav = document.querySelector("#siteNav");
const navLinks = document.querySelectorAll(".nav-link");
const icons = document.querySelectorAll("i");
let scrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  scrollPos = window.scrollY;
  if (scrollPos >= 1) {
    navbar.classList.add("fade-in", "bg-white", "shadow");
  } else {
    navbar.classList.remove("fade-in", "bg-white", "shadow");
  }
});

function showNav() {
  siteNav.classList.remove("hidden");
  menuButtonIcon.className = "bi-x";
  icons.forEach((icon) => icon.classList.add("text-white"));
}
function hideNav() {
  siteNav.classList.add("hidden");
  menuButtonIcon.className = "bi-text-right";
  icons.forEach((icon) => icon.classList.remove("text-white"));
}
menuButton.addEventListener("click", function () {
  if (menuButtonIcon.className === "bi-text-right") {
    showNav();
  } else {
    hideNav();
  }
});
navLinks.forEach((link) => {
  link.addEventListener("click", hideNav)
})
