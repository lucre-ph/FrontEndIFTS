// Declaracion de constantes
const imagen = document.getElementById("pokedex");
const imgOriginal = "../img/pokedex1.png";
const imgNueva = "../img/pokedex2.png";
const btnMenu = document.getElementById("menu");
const nav = document.querySelector(".linksNavegacion");

// Funciones y eventos
// Cambiar imagen al hacer click en pokedex
imagen.addEventListener("click", () => {
  imagen.src = imagen.src.includes("pokedex1") ? imgNueva : imgOriginal;
});

// Mostrar y ocultar menu desplegable del navegador
btnMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});