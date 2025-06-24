<?php
// Database connection
$pdo = new PDO('mysql:host=localhost;dbname=energyiq;charset=utf8', 'root', 'root');

// Simple query: time (tijdstip) and neelstroom_a (current)
$sql = "SELECT tijdstip, neelstroom_a FROM energy_data ORDER BY tijdstip LIMIT 100";
$stmt = $pdo->prepare($sql);
$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the data in JSON
header('Content-Type: application/json');
echo json_encode($results);
