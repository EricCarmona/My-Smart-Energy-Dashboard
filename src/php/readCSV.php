<?php
$filename = '../data/energyData.csv';

if (!file_exists($filename)) {
    die("File not found.");
}

$data = [];

if (($handle = fopen($filename, "r")) !== FALSE) {
    while (($row = fgetcsv($handle, 1000, ";")) !== FALSE) {
        $data[] = $row;
    }
    fclose($handle);
}

header('Content-Type: application/json');
echo json_encode($data);
?>