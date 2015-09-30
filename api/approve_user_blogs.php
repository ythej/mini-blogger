<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blog";
$id=$_GET['id'];

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "UPDATE posts SET isActive='true' WHERE id='$id';";
$result = mysqli_query($conn, $sql);

mysqli_close($conn);


?>
