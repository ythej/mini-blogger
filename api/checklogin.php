<?php


/* If form is submitted then authenticate it*/

    parse_str($_SERVER['QUERY_STRING']);
    $conn =mysqli_connect("localhost","root","","blog");
    /* Check connection */
    if(mysqli_connect_error()) {
        echo "Connection failed";
        printf("Error : %s",mysqli_connect_error());
    } 
    /* Check login  correctness*/
    $query="SELECT * FROM users WHERE username='$username' AND password='$password' ";
    $result=mysqli_query($conn , $query);
    $rows=mysqli_num_rows($result);
    if($rows==1) {
        $_SESSION['username']=$username;
        $_SESSION['password']=$password;
       
        echo $username;
                
    } else {
        printf("Username or password is incorrect\n");
        printf("Login Again ");
        echo "<a href='login.html' >Login</a>";
    }
     




?>