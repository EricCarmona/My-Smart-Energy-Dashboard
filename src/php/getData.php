<?php
// -----------------------------
// ENERGY DATA FETCH SCRIPT / SCRIPT PARA OBTENER DATOS DE ENERGÍA
//
// This script connects to the MySQL database and returns all energy data as JSON.
// Este script se conecta a la base de datos MySQL y devuelve todos los datos de energía en formato JSON.
// -----------------------------

$host = "localhost";
$user = "root";
$pass = "";
$db = "energy";

// Create connection / Crear conexión
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    // Connection failed / Falló la conexión
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch all relevant energy data / Consulta SQL para obtener todos los datos de energía relevantes
$sql = "SELECT 
    zonnepaneelspanning, 
    zonnepaneelstroom, 
    waterstofproductie, 
    stroomverbruik_woning, 
    waterstofverbruik_auto, 
    buitentemperatuur, 
    binnentemperatuur, 
    luchtdruk, 
    luchtvochtigheid, 
    accuniveau, 
    co2_concentratie_binnen, 
    waterstofopslag_woning, 
    waterstofopslag_auto, 
    date, 
    time 
FROM energy_data";

$result = $conn->query($sql);

$data = [];

// Fetch each row and add to array / Obtiene cada fila y la agrega al arreglo
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Output as JSON / Salida en formato JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
