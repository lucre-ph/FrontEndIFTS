// Esperar que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  const nombre = prompt("¡Hola! ¿Cuál es tu nombre?");

  if (nombre && nombre.trim() !== "") {
    alert("Hola, " + nombre + ". Me presento:");
  } else {
    alert("Hola. Me presento:");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const flecha = document.querySelector('.flecha');

  setInterval(() => {
    // alterna la opacidad entre 1 y 0
    flecha.style.opacity = flecha.style.opacity === '0' ? '1' : '0';
  }, 500); // medio segundo
});