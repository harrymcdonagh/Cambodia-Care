//Hamburger

const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar-menu")

menu.addEventListener("click", function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
