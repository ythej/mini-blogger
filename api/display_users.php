<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blog";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);


    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<div>";
        echo "<p>" . $row["full_name"] . "</p>";
        echo "<label>" . $row["username"] . "</label></br>";
        echo "<label>" . $row["phone_no"] . "</label></br>";
        echo "<label>" . $row["address"] . "</label>";
        echo "</div>";
    }

mysqli_close($conn);


?>
