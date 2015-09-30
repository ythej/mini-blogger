<?php
session_start();
/* If not logged in then redirect to login page */
if($_SERVER["REQUEST_METHOD"] == "GET"){
  parse_str($_SERVER['QUERY_STRING']);
  $post_time = strftime("%X"); //time
  $post_date = strftime("%B %d, %Y"); //date
 
  /* Connection to database */
  $conn =mysqli_connect("localhost","root","","blog");
  /* Check connection */
  if(mysqli_connect_error()) {
    echo "Connection failed";
    printf("Error : %s",mysqli_connect_error());
  } 
  /* CHECK if same user or email exists or not ? */
  $query="INSERT INTO posts (isActive)
      VALUES ('yes') ";
  mysqli_query($conn , $query);
  
  echo $row["id"];
  
  }


?>