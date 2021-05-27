const jumbotron = document.querySelector("header.jumbotron");
const jumbotron_height = jumbotron.offsetHeight;
const navbar = document.querySelector("div.navbar")
let scrollPos = window.scrollY;

const add_class_on_scroll = () => navbar.classList.add("bg-white");
const remove_class_on_scroll = () => navbar.classList.remove("bg-white");

window.addEventListener("scroll", function () {
  scrollPos = window.scrollY;

  if (scrollPos >= jumbotron_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});
