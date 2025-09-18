/*
    Funcionalidad: Theming (Modo Claro/Oscuro)
    - Objetivo: Cumplir con el requisito de una función dinámica implementada en JavaScript
    - Mecanismo: Utiliza 'localStorage' para garantizar la persistencia del tema
      seleccionado por el usuario a través de sesiones y navegación entre páginas
    - Implementación: El script se ejecuta en el evento 'DOMContentLoaded' para asegurar
      que el DOM esté completamente cargado y se manipula el 'body' del documento
      añadiendo/quitando la clase 'dark-mode', permitiendo que el CSS aplique los
      estilos correspondientes de forma reactiva
*/
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DEL MODO "CLARO/OSCURO" ---
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        const themeToggleIcon = document.getElementById('theme-toggle-icon');
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggleIcon.src = 'img/pablo/modo-claro.png';
        }
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeToggleIcon.src = 'img/pablo/modo-claro.png';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggleIcon.src = 'img/pablo/modo-oscuro.png';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- LÓGICA PARA LA INTERACCIÓN TÁCTIL DE LA TARJETA ---
    /*
        Se añade esta lógica para mejorar la UX en dispositivos táctiles
        Este bloque de código se ejecuta "CONDICIONALMENTE"
        Utilizando 'window.matchMedia', se detecta si el dispositivo principal
        del usuario NO tiene capacidad de hover y de esta forma, el script
        solo se activa en pantallas táctiles, preservando la experiencia
        nativa de :hover en computadoras portátiles y PC de escritorio
    */
    
    // Si el dispositivo NO puede hacer hover (es "táctil")...
    if (!window.matchMedia('(hover: hover)').matches) {
        
        const flipper = document.querySelector('.image-flipper');
        if (flipper) {
            flipper.addEventListener('click', (event) => {
                const isFlipped = flipper.classList.contains('is-flipped');
                
                if (!isFlipped) {
                    // Se previene la navegación en el primer toque para permitir el giro
                    event.preventDefault();
                    flipper.classList.add('is-flipped');
                }
            });

            // Se utiliza listener para girar la tarjeta si se toca por afuera
            document.addEventListener('click', (event) => {
                if (!flipper.contains(event.target)) {
                    flipper.classList.remove('is-flipped');
                }
            });
        }
    }
});