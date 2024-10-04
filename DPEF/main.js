/* Funcion para el desplazamiento suave y no se pegue al menu */
document.addEventListener("DOMContentLoaded", function() {
  const navbarLinks = document.querySelectorAll('.navbar-nav a'); /* Seleccionamos los enlaces del menu */
  const inscripcionBtn = document.getElementById('inscripcionBtn'); /* Seleccionamos el boton de inscripcion */

  navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Evitar el comportamiento por defecto del enlace

      const targetId = this.getAttribute('href'); // Obtener el ID de destino (ej. #inicio, #nosotros)
      const targetElement = document.querySelector(targetId); // Seleccionar el elemento objetivo

      // Calcular el desplazamiento teniendo en cuenta la altura del menú fijo
      const navbarHeight = document.querySelector('.navbar').offsetHeight; // Altura de la navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      // Desplazamiento suave hasta la sección
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  // Agregar evento al botón de inscripción
  if (inscripcionBtn) {
    inscripcionBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Evitar el comportamiento por defecto del enlace

      const targetId = this.getAttribute('href'); // Obtener el ID de destino
      const targetElement = document.querySelector(targetId); // Seleccionar el elemento objetivo

      // Calcular el desplazamiento teniendo en cuenta la altura del menú fijo
      const navbarHeight = document.querySelector('.navbar').offsetHeight; // Altura de la navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      // Desplazamiento suave hasta la sección
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  }
});

/* Funcion para mostrar el boton para subir arriba */
var botonSubir = document.querySelector('.subir-arriba');
window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    botonSubir.style.display = 'block'; /* Muestra el boton */

  } else {
    botonSubir.style.display = 'none'; /* Oculta el boton */ 
  }

  /* Funcion para subir arriba */
  botonSubir.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
