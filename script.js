// Obtener el botón
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Cuando el usuario haga scroll, mostrar u ocultar el botón
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    // Si el usuario hace scroll hacia abajo 100px, mostrar el botón
    scrollTopBtn.style.display = 'block';
  } else {
    // Si el usuario está arriba, ocultar el botón
    scrollTopBtn.style.display = 'none';
  }
};

// Cuando el usuario haga clic en el botón, ir al top de la página
scrollTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

