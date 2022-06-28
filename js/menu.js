var inicio = document.querySelector("#inicio");
var menu = document.querySelector(".header__menu");
var openMenuBtn = document.querySelector(".btn__menu__abrir");
var closeMenuBtn = document.querySelector(".btn__menu__cerrar");
var menuEnlaces = document.querySelector(".header__menu");//clase padre
var enlaceMenu = menuEnlaces.querySelectorAll(".header__menu_item")
function toggleMenu(){
    menu.classList.toggle("invisible");
}
openMenuBtn.addEventListener("click",toggleMenu);
closeMenuBtn.addEventListener("click",toggleMenu);
inicio.addEventListener("click",function(){
    scrollTo(0,0);
});
menuEnlaces.addEventListener("click",toggleMenu);

   