<?php

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "blogger"

	// Create connection
	$conn = mysql_connect($servername, $username, $password, $dbname) ;
		or die("Unable to connect to MySQL and Database");

	var username = intval($_GET(u));
	var password = intval($_GET(p));
	$sql = "INSERT INTO `blogger_admin` (`admin_username`,`admin_password`) VALUES (`"+u+"`, `" +p+"`)";
	$result = $conn->query($sql);
	echo $result;
?>