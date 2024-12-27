document.addEventListener("DOMContentLoaded", function () {
    // Slider de YouTube (si lo tenías previamente configurado)
    const youtubeSlider = document.querySelector(".slider");
    if (youtubeSlider) {
        const youtubeButtons = youtubeSlider.querySelectorAll("button");
        const youtubeIframe = youtubeSlider.querySelector("iframe");

        youtubeButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                // Aquí podrías agregar funcionalidad específica para el slider de YouTube
                console.log(`Botón ${index === 0 ? "anterior" : "siguiente"} presionado`);
            });
        });
    }

    // Slider de Spotify
    const spotifySongs = [
        "https://open.spotify.com/embed/track/6rqhFgbbKwnb9MLmUQDhG6", // Canción 1
        "https://open.spotify.com/embed/track/7ouMYWpwJ422jRcDASZB7P", // Canción 2
        "https://open.spotify.com/embed/track/3AhXZa8sUQht0UEdBJgpGc", // Canción 3
        "https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b"  // Canción 4
    ];

    let currentSongIndex = 0;

    const spotifyIframe = document.querySelector(".spotify-iframe");
    const spotifyPrevButton = document.querySelector(".spotify-prev");
    const spotifyNextButton = document.querySelector(".spotify-next");

    if (spotifyIframe && spotifyPrevButton && spotifyNextButton) {
        const updateSpotifyIframe = () => {
            spotifyIframe.src = spotifySongs[currentSongIndex];
        };

        spotifyPrevButton.addEventListener("click", () => {
            currentSongIndex = (currentSongIndex - 1 + spotifySongs.length) % spotifySongs.length;
            updateSpotifyIframe();
        });

        spotifyNextButton.addEventListener("click", () => {
            currentSongIndex = (currentSongIndex + 1) % spotifySongs.length;
            updateSpotifyIframe();
        });

        // Inicializar el iframe con la primera canción
        updateSpotifyIframe();
    }
});

