// Funcionalidad de secciones colapsables para la página de Tincho (martinComito.html)
// Este script implementa secciones colapsables estilo acordeón con animaciones

document.addEventListener("DOMContentLoaded", () => {
  const encabezadosColapsables = document.querySelectorAll(
    ".encabezado-colapsable"
  );

  encabezadosColapsables.forEach((encabezado) => {
    encabezado.addEventListener("click", () => {
      const contenido = encabezado.nextElementSibling;
      const estaActivo = encabezado.classList.contains("activo");

      // Cerrar todos los demás colapsables (comportamiento acordeón)
      encabezadosColapsables.forEach((otroEncabezado) => {
        if (otroEncabezado !== encabezado) {
          otroEncabezado.classList.remove("activo");
          otroEncabezado.nextElementSibling.classList.remove("activo");
        }
      });

      // Alternar colapsable actual
      if (estaActivo) {
        encabezado.classList.remove("activo");
        contenido.classList.remove("activo");
      } else {
        encabezado.classList.add("activo");
        contenido.classList.add("activo");
      }
    });
  });
});
