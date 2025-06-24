<?php

// Path to the CSV file
$csvFile = '../data/energyData.csv';

// Array to store the data
$data = [];

// Open the CSV file
if (($handle = fopen($csvFile, "r")) !== FALSE) {

    // Read the first line with headers
    $headers = fgetcsv($handle, 1000, ";"); // Change ";" if your CSV uses a different delimiter
    
    // Loop through each row
    while (($row = fgetcsv($handle, 1000, ";")) !== FALSE) {
        // The first column is the date/time ('Tijdstip')
        $date = $row[0];

        // Create the array for this date if it doesn't exist yet
        if (!isset($data[$date])) {
            $data[$date] = [];
        }

        // Save each value with its corresponding header
        foreach ($headers as $index => $header) {
            // Convert comma decimal to dot decimal and to float if numeric
            $value = str_replace(',', '.', $row[$index]);
            if (is_numeric($value)) {
                $value = (float)$value;
            }
            $data[$date][$header] = $value;
        }
    }
    fclose($handle);
} else {
    echo "Could not open the CSV file.";
    exit;
}

// Function to get all data of a specific date
function getDataByDate($data, $date) {
    return $data[$date] ?? null;
}

// Function to get all values of a column for all dates
function getColumnValues($data, $columnName) {
    $result = [];
    foreach ($data as $date => $values) {
        if (isset($values[$columnName])) {
            $result[$date] = $values[$columnName];
        }
    }
    return $result;
}

// Example usage:

// 1. Get all data for a specific date
$exampleDate = '14-6-2025 00:00';
$dateData = getDataByDate($data, $exampleDate);
echo "Data for date $exampleDate:\n";
print_r($dateData);

// 2. Get all values from a specific column across all dates
$exampleColumn = 'Binnentemperatuur (°C)';
$columnValues = getColumnValues($data, $exampleColumn);
echo "Values for column '$exampleColumn' across all dates:\n";
print_r($columnValues);

?>
