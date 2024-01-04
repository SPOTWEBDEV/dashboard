<?php
include('../../../server/database.php');


session_start();
if(isset($_SESSION['admin_email'])){
    $email = $_SESSION['admin_email'];
    $statement = "SELECT * FROM `admin` WHERE `email`='$email'";
    $query = mysqli_query($connection, $sql);



    if(mysqli_num_rows($query)){
        while($row = mysqli_fetch_assoc($fetch)){
            $email = $row['email'];
            $password = $row['password'];   
        }
    }
}else{
    header('location: #');
}

?>