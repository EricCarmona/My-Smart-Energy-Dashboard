<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "energy";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

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

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

header('Content-Type: application/json');
echo json_encode($data);
?>
