<?php
// Destinatario (cambia por tu email)
$destinatario = "info@juniorcalderatm.com"; 

// Datos del formulario
$nombre = $_POST['nombre'] . " " . $_POST['apellido'];
$email = $_POST['email'];
$pais = $_POST['pais'];
$whatsapp = $_POST['whatsapp'] ?? "No proporcionado";
$redes = "Instagram: " . ($_POST['instagram'] ?? "N/A") . " | TikTok: " . ($_POST['tiktok'] ?? "N/A");

// Asunto y mensaje
$asunto = "Nuevo miembro VIP: $nombre";
$mensaje = "
Nombre: $nombre
Email: $email
País: $pais
WhatsApp: $whatsapp
Redes Sociales: $redes
";

// Cabeceras para formato HTML
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";

// Envía el email
$mailEnviado = mail($destinatario, $asunto, $mensaje, $headers);

// Redirección
if ($mailEnviado) {
    header('Location: gracias.html'); // Crea esta página después
} else {
    header('Location: error.html');
}
?>