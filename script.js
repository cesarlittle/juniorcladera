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

document.addEventListener("DOMContentLoaded", function () {
    // Lista de canciones de Spotify (URLs de Spotify)
    const spotifyTracks = [
        "https://open.spotify.com/embed/track/62mEKHjai7usrhyijNUxf8?utm_source=generator",
        "https://open.spotify.com/embed/track/20Vc6KmPFJixmDq9ZkJdcZ?utm_source=generator",
        "https://open.spotify.com/embed/track/6ediV9G8JCWHW8MHmly4Bd?utm_source=generator",
    ];

    // Lista de canciones de YouTube (URLs de YouTube)
    const youtubeTracks = [
        "https://www.youtube.com/embed/3I5YxtOfm0g",
        "https://www.youtube.com/embed/VYymPJofH-Q",
        "https://www.youtube.com/embed/g8H7w4rFHto",
        "https://www.youtube.com/embed/QINJRlKwOXo",
    ];

    let currentSpotifyIndex = 0; // Índice de la canción actual de Spotify
    let currentYoutubeIndex = 0; // Índice de la canción actual de YouTube

    const spotifyPlayer = document.getElementById("spotify-player");
    const youtubePlayer = document.getElementById("youtube-player");

    // Función para cambiar las canciones en Spotify
    function changeSpotifyTrack(index) {
        if (index < 0) {
            currentSpotifyIndex = spotifyTracks.length - 1;
        } else if (index >= spotifyTracks.length) {
            currentSpotifyIndex = 0;
        } else {
            currentSpotifyIndex = index;
        }
        spotifyPlayer.src = spotifyTracks[currentSpotifyIndex];
    }

    // Función para cambiar las canciones en YouTube
    function changeYoutubeTrack(index) {
        if (index < 0) {
            currentYoutubeIndex = youtubeTracks.length - 1;
        } else if (index >= youtubeTracks.length) {
            currentYoutubeIndex = 0;
        } else {
            currentYoutubeIndex = index;
        }
        youtubePlayer.src = youtubeTracks[currentYoutubeIndex];
    }

    // Spotify Controls
    document.querySelector(".spotify-prev").addEventListener("click", function () {
        changeSpotifyTrack(currentSpotifyIndex - 1);
    });

    document.querySelector(".spotify-next").addEventListener("click", function () {
        changeSpotifyTrack(currentSpotifyIndex + 1);
    });

    // YouTube Controls
    document.querySelector(".youtube-prev").addEventListener("click", function () {
        changeYoutubeTrack(currentYoutubeIndex - 1);
    });

    document.querySelector(".youtube-next").addEventListener("click", function () {
        changeYoutubeTrack(currentYoutubeIndex + 1);
    });
});


