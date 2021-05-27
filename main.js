const jumbotron = document.querySelector("header.jumbotron");
const navbar = document.querySelector("div.navbar")
let scrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  scrollPos = window.scrollY;
  if (scrollPos >= 1) {
    navbar.classList.add("bg-white", "shadow")
  } else {
    navbar.classList.remove("bg-white", "shadow")
  }
});
