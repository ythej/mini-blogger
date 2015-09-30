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

$sql = "SELECT * FROM posts where isActive = 'true'";
$result = mysqli_query($conn, $sql);
$rows=mysqli_num_rows($result);

if ($rows >= 1) {
    # code...
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<div class='blog-listing'>";
        echo "<h1>" . $row["postTitle"] . "</h1>";
        echo "<label>Tags: <span>" . $row["postTag"] . "</span></label>";
        echo "<label>Author: <span>" . $row["postAuthor"] . "</span></label>";
        echo "<p>" . $row["postDesc"] . "</p>";
        echo "</div>";
    }
}
else {
    echo "";
}
    

mysqli_close($conn);


?>
