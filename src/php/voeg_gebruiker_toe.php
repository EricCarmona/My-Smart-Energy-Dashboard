<?php
// Verbind met de database 'energy'
$pdo = new PDO("mysql:host=localhost;dbname=energy", "root", "");

// Voorbeeldgegevens voor een nieuwe gebruiker
$username = "Eric";
$wachtwoord = password_hash("Eric123", PASSWORD_DEFAULT); // Versleutelen

// Gebruik de juiste tabel- en kolomnamen
$stmt = $pdo->prepare("INSERT INTO gebruiker (username, wachtwoord) VALUES (?, ?)");
$stmt->execute([$username, $wachtwoord]);

echo "✅ Gebruiker succesvol toegevoegd aan de database 'energy'.";
?>