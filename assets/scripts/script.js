const toggle_btn = document.querySelector(".nav-toggle");
const nav_ul = document.querySelector(".nav-ul");

toggle_btn.addEventListener("click", () => {
  toggle_btn.classList.toggle("open");
  nav_ul.classList.toggle("open");
});
