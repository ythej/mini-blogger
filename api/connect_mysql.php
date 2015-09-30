<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blogger"

// Create connection
$conn = mysql_connect($servername, $username, $password, $dbname) ;
	or die("Unable to connect to MySQL and Database");

?>