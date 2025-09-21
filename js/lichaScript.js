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
