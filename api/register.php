<?php

if($_SERVER["REQUEST_METHOD"] == "GET"){
parse_str($_SERVER['QUERY_STRING']);

// Create connection
$conn = mysqli_connect("localhost", "root", "", "blog");
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO users (username, password, full_name, phone_no, address, age)
VALUES ('$username', '$password', '$fullName', '$phoneNo', '$address', '$age')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
}
?>