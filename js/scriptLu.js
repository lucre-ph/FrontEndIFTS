// Declaracion de constantes
const imagen = document.getElementById("pokedex");
const imgOriginal = "./img/pokedex1.png";
const imgNueva = "./img/pokedex2.png";
const btnMenu = document.getElementById("menu");
const nav = document.querySelector(".linksNavegacion");
const saludo = document.querySelector(".bienvenida");

// Funciones y eventos
// Cambiar imagen al hacer click en pokedex y ocultar saludo
imagen.addEventListener("click", () => {
  imagen.src = imagen.src.includes("pokedex1") ? imgNueva : imgOriginal;
  
  //No incluye zoom en pantallas chicas
  if (window.innerWidth >= 800) {
    imagen.src.includes("pokedex2") ? imagen.classList.add("zoom") : imagen.classList.remove("zoom");
  }

  saludo.style.display = saludo.style.display === "none" ? "block" : "none";
  
});

// Mostrar y ocultar menu desplegable del navegador
btnMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});
