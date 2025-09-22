// Declaracion de constantes
const pokeCerrado = document.getElementById("pokedex1");
const pokeAbierto = document.getElementById("pokedex2");
const btnMenu = document.getElementById("menu");
const botonBienvenida = document.querySelector(".botonBienvenida");
const nav = document.querySelector(".linksNavegacion");
const saludo = document.querySelector(".bienvenida");
const playlist = [
  "./music/Pewter City.mp3", 
  "./music/Cerulean City.mp3", 
  "./music/Celadon City.mp3", 
  "./music/Cinnabar Island.mp3", 
  "./music/Pallet Town.mp3", 
  "./music/Vermillion City.mp3", 
  "./music/Pewter City.mp3", 
  "./music/Surfing.mp3"
];

// Funciones y eventos
//Desplegar bienvenida al hacer click en boton ver mas
botonBienvenida.addEventListener("click", () => {
  botonBienvenida.style.display = "none";
  saludo.style.display = "block";
});

//--------Abrir y cerrar pokedex--------
pokeCerrado.addEventListener("click", () => {
  pokeCerrado.style.display = "none";
  pokeAbierto.style.display = "block";
  saludo.style.display = "none";

//Zoom pokedex2 en pantallas medianas y grandes
  if (window.innerWidth >= 800) {
      pokeAbierto.classList.add("zoom");
      saludo.style.display = "none";
    }
});
pokeAbierto.addEventListener("click", () => {
  pokeAbierto.style.display = "none";
  pokeCerrado.style.display = "block";
  saludo.style.display = "none";

  pokeAbierto.classList.remove("zoom");
});

// Mostrar y ocultar menu desplegable del navegador
btnMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Reproducir musica y cambiar canciones
let index = 0;
const player = document.querySelector(".controlAudio");

player.src = playlist[index];
player.addEventListener("ended", () => {
  index = (index + 1) % playlist.length;
  player.src = playlist[index];
  player.play();
});
