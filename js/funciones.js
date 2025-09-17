document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.querySelector(".avatar");
    const aliasParrafo = document.querySelector(".tarjeta p strong"); 

    let esBlanco = true;

    avatar.addEventListener("click", () => {
        avatar.classList.add("fade"); // activa animación CSS

        setTimeout(() => {
            if (esBlanco) {
                avatar.src = "./img/gandalf1.png"; // Gandalf el Gris
                aliasParrafo.textContent = "Alias: Lichalf el Gris";
            } else {
                avatar.src = "./img/gandalf2.png"; // Gandalf el Blanco
                aliasParrafo.textContent = "Alias: Lichalf el Blanco";
            }
            esBlanco = !esBlanco;

            avatar.classList.remove("fade"); // vuelve a aparecer
        }, 600);
    });
});
