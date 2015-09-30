<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blog";
$user=$_GET['username'];

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM posts WHERE postAuthor = '$user'  ";
$result = mysqli_query($conn, $sql);


    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "<div class='blog-listing'>";
        echo "<h1>" . $row["postTitle"] . "</h1>";
        echo "<label>Tags: <span>" . $row["postTag"] . "</span></label>";
        echo "<label>Author: <span>" . $row["postAuthor"] . "</span></label>";
        echo "<p>" . $row["postDesc"] . "</p>";
        echo "<input id=" . $row["id"] . " type='button' value='delete' onClick='Login.deleteBlog(id)' />";
        echo "<input id=edit-" . $row["id"] . " type='button' value='edit' onClick='Login.editBlog(id)' />";
        echo "</div>";
    }

mysqli_close($conn);


?>
