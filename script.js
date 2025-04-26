// Obtener el botón
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Cuando el usuario haga scroll, mostrar u ocultar el botón
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // Si el usuario hace scroll hacia abajo 100px, mostrar el botón
        scrollTopBtn.style.display = 'block';
    } else {
        // Si el usuario está arriba, ocultar el botón
        scrollTopBtn.style.display = 'none';
    }
};

// Cuando el usuario haga clic en el botón, ir al top de la página
scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.addEventListener("DOMContentLoaded", function () {
    // Lista de canciones de Spotify (URLs de Spotify)
    const spotifyTracks = [
        "https://open.spotify.com/embed/track/5TqT0S6qip8aBvkzpt5R9M?utm_source=generator",
        "https://open.spotify.com/embed/track/7IbeY6vm8uKY3BJSne8FlT?utm_source=generator",
        "https://open.spotify.com/embed/track/59is1hDxW8vt7U1DrJ0wL5?utm_source=generator",
        "https://open.spotify.com/embed/track/3MT6yckQlnXfbLLgMFIYc4?utm_source=generator",
        "https://open.spotify.com/embed/track/6ediV9G8JCWHW8MHmly4Bd?utm_source=generator",
        "https://open.spotify.com/embed/track/20Vc6KmPFJixmDq9ZkJdcZ?utm_source=generator",
        "https://open.spotify.com/embed/track/62mEKHjai7usrhyijNUxf8?utm_source=generator",
        "https://open.spotify.com/embed/track/77LySeeDxPO92DDQkbihoo?utm_source=generator",
        "https://open.spotify.com/embed/track/7qEMYzGVK4Ul9YQtWdy1Wk?utm_source=generator",
        "https://open.spotify.com/embed/track/3WVqwQjKQvC15983z1Jgxe?utm_source=generator",
        "https://open.spotify.com/embed/track/5SEYBnzJX62CBzvjb1ctMD?utm_source=generator",
        "https://open.spotify.com/embed/track/59is1hDxW8vt7U1DrJ0wL5?utm_source=generator"
    ];

    // Lista de canciones de YouTube (URLs de YouTube)
    const youtubeTracks = [
        "https://www.youtube.com/embed/9QMzwcNqdyA?si=-ZGR0iavGQSPj4fd",
        "https://www.youtube.com/embed/_Z3Mu38CUb4?si=OxQB2htojjNtIzJ7",
        "https://www.youtube.com/embed/_Z3Mu38CUb4?si=9W5sOYeH_hCO2Btf",
        "https://www.youtube.com/embed/4KEBSpOwgeE?si=sgzGC4tYtXppB5xY",
        "https://www.youtube.com/embed/QINJRlKwOXo",
        "https://www.youtube.com/embed/g8H7w4rFHto",
        "https://www.youtube.com/embed/NIY8BiBVK1g?si=9diMDs_Rs59uyMrS",
        "https://www.youtube.com/embed/3I5YxtOfm0g",
        "https://www.youtube.com/embed/U4H1tX2A-6o?si=T2H1pFg25duxRJ4R"

    ];

    let currentSpotifyIndex = 0; // Índice de la canción actual de Spotify
    let currentYoutubeIndex = 0; // Índice de la canción actual de YouTube


    // Función para cambiar las canciones en Spotify

    function changeSpotifyTrack(newIndex) {
        if (newIndex < 0) {

            currentSpotifyIndex = spotifyTracks.length - 1;
        } else if (newIndex >= spotifyTracks.length) {

            currentSpotifyIndex = 0;
        } else {
            currentSpotifyIndex = newIndex;
        }

        const spotifyPlayer = document.getElementById("spotify-player");
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

        const youtubePlayer = document.getElementById("youtube-player");
        youtubePlayer.src = youtubeTracks[currentYoutubeIndex];
    }

    // Spotify Controls
    document.querySelector(".spotify-prev").addEventListener("click", () => {
        changeSpotifyTrack(currentSpotifyIndex - 1);
    });

    document.querySelector(".spotify-next").addEventListener("click", () => {
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

// Seleccionar el formulario y el popup
const form = document.getElementById("custom-form");
const popup = document.getElementById("popup");

// Función para cerrar el popup
function closePopup() {
    popup.style.display = "none";
}

// Agregar loading state
function setLoadingState(isLoading) {
    const submitButton = form.querySelector('.btn-submit');
    if (isLoading) {
        submitButton.textContent = 'ENVIANDO...';
        submitButton.disabled = true;
    } else {
        submitButton.textContent = 'QUIERO SER PARTE';
        submitButton.disabled = false;
    }
}

// Validar el formulario
function validateForm() {
    // Validar que los emails coincidan
    const email = document.getElementById('email').value;
    const confirmarEmail = document.getElementById('confirmar_email').value;

    if (email !== confirmarEmail) {
        alert('Los correos electrónicos no coinciden');
        return false;
    }

    // Validar campos requeridos
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'red';
            isValid = false;
        } else {
            field.style.borderColor = '#ddd';
        }
    });

    if (!isValid) {
        alert('Por favor completa todos los campos obligatorios');
        return false;
    }

    return true;
}

// Manejar el envío del formulario
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    try {
        setLoadingState(true);

        const result = await emailjs.sendForm(
            'service_0xl9net',
            'template_cjv9g11',
            form,
            'aNXptCVJphrzVFQwh'
        );

        if (result.text === 'OK') {
            popup.style.display = "block";
            form.reset();
        } else {
            throw new Error('Error en el envío');
        }
    } catch (error) {
        console.error("Error al enviar los datos:", error);
        alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
    } finally {
        setLoadingState(false);
    }
});
