
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-burger");
    const nav = document.querySelector("#nav");
    const ul = document.querySelector(".ul");
    const burgerBtn = document.querySelector(".menu-burger");

    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("show-menu");
        ul.classList.toggle("unhide-menu");
        burgerBtn.classList.toggle("fixed")
    });
});

document.querySelector('.container')
.addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
});