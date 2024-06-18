/** @format */

const menu = document.querySelector("span");
const ul = document.querySelector("ul");

menu.addEventListener("click", function () {
  ul.classList.toggle("active");
});
