<?php
// -----------------------------
// USER CREATION SCRIPT / SCRIPT PARA CREAR USUARIO
//
// This script adds a new user to the 'energy' database with a hashed password.
// Este script agrega un nuevo usuario a la base de datos 'energy' con una contraseña cifrada.
// -----------------------------

// Connect to the 'energy' database / Conectar a la base de datos 'energy'
$pdo = new PDO("mysql:host=localhost;dbname=energy", "root", "");

// Example data for a new user / Datos de ejemplo para un nuevo usuario
$username = "Eric";
$wachtwoord = password_hash("Eric123", PASSWORD_DEFAULT); // Hash password / Cifrar contraseña

// Use correct table and column names / Usar los nombres correctos de tabla y columna
$stmt = $pdo->prepare("INSERT INTO gebruiker (username, wachtwoord) VALUES (?, ?)");
$stmt->execute([$username, $wachtwoord]);

// Success message / Mensaje de éxito
echo "✅ Gebruiker succesvol toegevoegd aan de database 'energy'."; // User successfully added / Usuario agregado correctamente
?>