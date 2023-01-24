 <!DOCTYPE html>
<html>
<body>
 
 <?php
include 'db_connection.php'; 

$sql = "SELECT name, nachname FROM user ORDER BY name";

if ($result = $mysqli -> query($sql)) {
  while ($row = $result -> fetch_row()) {
    printf ("%s (%s)\n", $row[0], $row[1]);
  }
  $result -> free_result();
}

$mysqli -> close();

?> 

</body>
</html>
