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

<script>
    // Lista de canciones (urls de Spotify)
    const tracks = [
        "https://open.spotify.com/embed/track/62mEKHjai7usrhyijNUxf8?utm_source=generator",
        "https://open.spotify.com/embed/track/20Vc6KmPFJixmDq9ZkJdcZ?utm_source=generator",
        "https://open.spotify.com/embed/track/6ediV9G8JCWHW8MHmly4Bd?utm_source=generator"
    ];

    let currentTrackIndex = 0; // Índice de la canción actual
    const spotifyPlayer = document.getElementById("spotify-player");

    // Función para cambiar la canción
    function changeTrack(index) {
        currentTrackIndex = index;
        if (currentTrackIndex < 0) currentTrackIndex = tracks.length - 1; // Volver al último
        if (currentTrackIndex >= tracks.length) currentTrackIndex = 0; // Volver al primero
        spotifyPlayer.src = tracks[currentTrackIndex];
    }

    // Listeners para los botones
    document.querySelector(".spotify-prev").addEventListener("click", () => {
        changeTrack(currentTrackIndex - 1);
    });

    document.querySelector(".spotify-next").addEventListener("click", () => {
        changeTrack(currentTrackIndex + 1);
    });
</script>
