<!DOCTYPE html>
<html>
<head>
<style>
body {
background-color: #fcb900;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
}
</style>
</head>
<body>

<div>

<?php

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "Hallo";
$dbname = "wpress";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the data from the form
$name = $_POST['name'][0];
$nachname = $_POST['nachname'][0];

// Insert the data into the database
$sql = "INSERT INTO wp_ustest (name, nachname) VALUES ('$name', '$nachname')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>

    <button onclick="goBack()">Zurück</button>
</div>

<script>
function goBack() {
  window.history.back();
}
</script>

</body>
</html>

