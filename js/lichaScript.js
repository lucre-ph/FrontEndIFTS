document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.querySelector(".avatar");
    const aliasParrafo = document.querySelector(".tarjeta p:nth-of-type(1)");
    let esGris = true;
    if (!avatar || !aliasParrafo) return;

    avatar.addEventListener("click", () => {
        avatar.classList.add("fade");
        aliasParrafo.classList.add("fade");

        setTimeout(() => {
            if (esGris) {
                avatar.src = "./img/gandalf2.png";
                aliasParrafo.innerHTML = "<strong>Alias:</strong> Lichalf el Blanco";
            } else {
                avatar.src = "./img/gandalf1.png";
                aliasParrafo.innerHTML = "<strong>Alias:</strong> Lichalf el Gris";
            }
            esGris = !esGris;

            avatar.classList.remove("fade");
            aliasParrafo.classList.remove("fade");
        }, 600); 
    });
});

document.addEventListener("DOMContentLoaded", () => {
  
  const buttonEstadoParrafo = document.querySelector("aside .tarjeta button");
  const estadoParrafo = document.querySelector(".tarjeta p:nth-of-type(2)");

  if (!buttonEstadoParrafo) return;

  buttonEstadoParrafo.addEventListener("click", () => {
    
    buttonEstadoParrafo.classList.add("fade-out");

    
    setTimeout(() => {
      
      estadoParrafo.innerHTML = `<strong>Estado:</strong> <span class="fade-in">Vivo (o algo asi)</span>`;

      
      const nuevoTexto = estadoParrafo.querySelector("span.fade-in");

      
      setTimeout(() => {
        nuevoTexto.classList.add("show");
      }, 50);

    }, 500); 
  });
});
