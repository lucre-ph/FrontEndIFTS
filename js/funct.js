//INTERACTIVIDAD: CREAR BOTON EN INDEX
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("botonIndex");
  const colores = ["#f4a261", "#2a9d8f", "#e9c46a", "#264653", "#e76f51"];

  if (!btn) return;
  btn.addEventListener("click", () => {
    const randomColor = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = randomColor;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleInfo");
  const infoSection = document.getElementById("infoSection");

  if (!toggleBtn || !infoSection) return;
  toggleBtn.addEventListener("click", () => {
    infoSection.classList.toggle("hidden");
    infoSection.classList.toggle("showed");

    if (infoSection.classList.contains("showed")) {
      toggleBtn.textContent = "Ocultar Información";
    } else {
      toggleBtn.textContent = "Información Personal";
    }
  });
});

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
