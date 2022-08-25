const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const items = document.getElementsByClassName("items");

btn.addEventListener("click", navToggle);

for (var i = 0, len = items.length; i < len; i++) {
  items[i].addEventListener("click", navToggler);
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

function navToggler() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
