<?php
// Function to load CSV into an associative array
function loadCSV($filename) {
    $rows = [];
    if (($handle = fopen($filename, "r")) !== FALSE) {
        $header = fgetcsv($handle, 1000, ";");
        if (isset($header[0])) {
            $header[0] = preg_replace('/^\x{FEFF}/u', '', $header[0]); // Remove BOM if present
        }
        // Remove empty headers
        $header = array_filter($header, function($h) { return $h !== ''; });
        while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
            // Cut data to match header length
            $data = array_slice($data, 0, count($header));
            if(count($data) == count($header)) {
                $row = array_combine($header, $data);
                $rows[] = $row;
            }
        }
        fclose($handle);
    }
    return $rows;
}



// Function to save entire array to a PHP file
function saveAllDataAsPHP($allRows, $filename) {
    $exported = var_export($allRows, true);
    $phpCode = "<?php\nreturn " . $exported . ";\n";
    file_put_contents($filename, $phpCode);
}

// MAIN
$csvFile = "../data/energyData.csv";
$dataRows = loadCSV($csvFile);

$outputFile = "all_energy_data.php";
saveAllDataAsPHP($dataRows, $outputFile);

echo "Data saved to file: $outputFile\n";
?>
