<?php
$pdo = new PDO("mysql:host=localhost;dbname=energy", "root", "");

// Controleer of het formulier is ingediend via POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Controleer of de velden bestaan
    if (isset($_POST['username']) && isset($_POST['wachtwoord'])) {
        $username = $_POST['username'];
        $wachtwoord = $_POST['wachtwoord'];

        $stmt = $pdo->prepare("SELECT * FROM gebruiker WHERE username = ?");
        $stmt->execute([$username]);
        $gebruiker = $stmt->fetch();

        if ($gebruiker && password_verify($wachtwoord, $gebruiker['wachtwoord'])) {
            // echo "✅ Inloggen geslaagd. Welkom, " . htmlspecialchars($username) . "!";
            header("Location: ../dashboard.html"); // hier we go to the second page by the HTML page name
            exit();
        } else {
            echo "❌ Onjuiste gebruikersnaam of wachtwoord.";
        }
    } else {
        echo "⚠️ Vul gebruikersnaam en wachtwoord in.";
    }
} else {
    echo "⚠️ Toegang geweigerd. Gebruik het loginformulier.";
}
?>