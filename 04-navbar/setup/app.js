// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linksList = document.querySelector(".links-list");

navToggle.addEventListener("click", function () {
    let size = (linksList.clientHeight / 16) + "rem";
    links.style.setProperty("--links-height", size);
    links.classList.toggle("show-links");
})