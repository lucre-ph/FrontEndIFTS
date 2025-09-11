/*- La portada principal (index.html) debe incluir al menos una interacción dinámica implementada
con JavaScript. Por ejemplo: mostrar un mensaje al hacer clic en un botón, animaciones simples,
o cambios de estilo al interactuar con algún elemento de la página.
- Cada página individual de un integrante debe contener al menos una función dinámica en
JavaScript, que modifique o actualice algún contenido de la tarjeta de presentación (por ejemplo:
desplegar/ocultar información, cambiar colores, mostrar alertas, animaciones, etc.).
- Todas las funciones implementadas deben estar mencionadas y descriptas en el archivo
README.md, indicando qué hacen y en qué sección se encuentran. */


document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleInfo");
  const infoSection = document.getElementById("infoSection");

  toggleBtn.addEventListener("click", () => {
    infoSection.classList.toggle("hidden");
    infoSection.classList.toggle("showed");

    if (infoSection.classList.contains("showed")) {
      toggleBtn.textContent = "Ocultar Información"
    } else {
      toggleBtn.textContent = "Información Personal"
    }
  })
});