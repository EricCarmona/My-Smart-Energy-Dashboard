<?php
// -----------------------------
// USER LOGIN SCRIPT / SCRIPT DE INICIO DE SESIÓN DE USUARIO
//
// This script handles user login by verifying credentials against the database.
// Este script gestiona el inicio de sesión del usuario verificando las credenciales en la base de datos.
// -----------------------------

$pdo = new PDO("mysql:host=localhost;dbname=energy", "root", "");

// Check if the form was submitted via POST / Verifica si el formulario fue enviado por POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Check if fields exist / Verifica si existen los campos
    if (isset($_POST['username']) && isset($_POST['wachtwoord'])) {
        $username = $_POST['username'];
        $wachtwoord = $_POST['wachtwoord'];

        // Prepare and execute query / Prepara y ejecuta la consulta
        $stmt = $pdo->prepare("SELECT * FROM gebruiker WHERE username = ?");
        $stmt->execute([$username]);
        $gebruiker = $stmt->fetch();

        // Verify password / Verifica la contraseña
        if ($gebruiker && password_verify($wachtwoord, $gebruiker['wachtwoord'])) {
            // Redirect to dashboard / Redirige al panel principal
            header("Location: ../dashboard.html");
            exit();
        } else {
            echo "❌ Onjuiste gebruikersnaam of wachtwoord."; // Incorrect username or password / Usuario o contraseña incorrectos
        }
    } else {
        echo "⚠️ Vul gebruikersnaam en wachtwoord in."; // Fill in username and password / Rellene usuario y contraseña
    }
} else {
    echo "⚠️ Toegang geweigerd. Gebruik het loginformulier."; // Access denied. Use the login form / Acceso denegado. Use el formulario de inicio de sesión
}
?>