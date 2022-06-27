const inicio = document.querySelector("#inicio");
const menu = document.querySelector(".header__menu");
const openMenuBtn = document.querySelector(".btn__menu__abrir");
const closeMenuBtn = document.querySelector(".btn__menu__cerrar");
function toggleMenu(){
    menu.classList.toggle("invisible");
}
openMenuBtn.addEventListener("click",toggleMenu);
closeMenuBtn.addEventListener("click",toggleMenu);
inicio.addEventListener("click",function(){
    scrollTo(0,0);
})