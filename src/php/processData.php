<?php
// Load CSV file into an array of associative arrays
function loadCSV($filename) {
    $rows = [];
    if (($handle = fopen($filename, "r")) !== FALSE) {
        $header = fgetcsv($handle, 1000, ";"); // Read header with semicolon separator
        while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
            if(count($data) == count($header)) {
                $rows[] = array_combine($header, $data);
            }
        }
        fclose($handle);
    }
    return $rows;
}

// Prepare the data structures for quick access
function prepareData($rows) {
    $dataByDateTime = [];
    $columnsData = [];

    foreach ($rows as $row) {
        $dateTime = $row[key($row)]; // Use first column as datetime
        $dataByDateTime[$dateTime] = $row;

        foreach ($row as $key => $value) {
            if ($key === key($row)) continue; // Skip datetime column
            $columnsData[$key][$dateTime] = floatval(str_replace(',', '.', $value));
        }
    }

    return [$dataByDateTime, $columnsData];
}

// Example usage
$filename = "../data/energyData.csv";

$rows = loadCSV($filename);
list($dataByDateTime, $columnsData) = prepareData($rows);

// Show available datetimes
echo "Available datetimes:\n";
print_r(array_keys($dataByDateTime));

// Show available column names
echo "\nAvailable columns:\n";
print_r(array_keys($columnsData));

echo "\n\n";

// Get data for a specific datetime
$specificDateTime = "14-6-2025 00:00";
if (isset($dataByDateTime[$specificDateTime])) {
    echo "Data for $specificDateTime:\n";
    print_r($dataByDateTime[$specificDateTime]);
} else {
    echo "No data for this datetime.";
}

echo "\n\n";

// Get all values for a specific column
$column = "Binnentemperatuur (°C)";
if (isset($columnsData[$column])) {
    echo "Values for column '$column':\n";
    print_r($columnsData[$column]);
} else {
    echo "No data for this column.";
}
?>
