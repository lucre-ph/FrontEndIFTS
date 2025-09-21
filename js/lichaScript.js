document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.querySelector(".avatar");
  const aliasParrafo = document.querySelector(".tarjeta p strong");

  let esGris = true;

  if (!avatar || !aliasParrafo) return;

  avatar.addEventListener("click", () => {
    avatar.classList.add("fade");

    setTimeout(() => {
      if (esGris) {
        avatar.src = "./img/gandalf2.png";
        aliasParrafo.textContent = "Alias: Lichalf el Blanco";
      } else {
        avatar.src = "./img/gandalf1.png";
        aliasParrafo.textContent = "Alias: Lichalf el Gris";
      }
      esGris = !esGris;

      avatar.classList.remove("fade");
    }, 600);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  
  const buttonEstadoParrafo = document.querySelector("aside .tarjeta button")
  let estado = "Vivo"

  if (!buttonEstadoParrafo) return;

  buttonEstadoParrafo.addEventListener("click", (e) => {

    e.preventDefault();
    const pEstado = document.createElement("p");
    pEstado.innerHTML = `<strong>Estado:</strong> ${estado}`;
    buttonEstadoParrafo.classList.add("fade");

    const padre = buttonEstadoParrafo.parentElement;
    padre.replaceChild(pEstado, buttonEstadoParrafo)

    setTimeout(() => {
  });
});

