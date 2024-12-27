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
    // Funcionalidad del slider de Spotify
const spotifySlider = document.querySelector("#spotify-slider");
const spotifyTracks = spotifySlider.querySelectorAll("iframe");
let currentTrackIndex = 0;

function showTrack(index) {
    spotifyTracks.forEach((track, i) => {
        track.style.display = i === index ? "block" : "none";
    });
}

document.querySelector("#spotify-prev").addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex - 1 + spotifyTracks.length) % spotifyTracks.length;
    showTrack(currentTrackIndex);
});

document.querySelector("#spotify-next").addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % spotifyTracks.length;
    showTrack(currentTrackIndex);
});

// Mostrar la primera canción al cargar
showTrack(currentTrackIndex);

});

