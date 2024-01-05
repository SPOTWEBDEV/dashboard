<?php
include('../server/database.php');

if(isset($_POST[''])){

    $name = $_POST['name'];
    $name = $_POST['name'];
    $name = $_POST['name'];

    if(!empty($name) && !empty($name) && !empty($name)){
        
        $query = mysqli_query($connection, "INSERT INTO `clients`(`id`,`name`,`name`,`name`) VALUES('', '$name', '$name', '$name')");

        if($query){

        }else{
            echo 'form not submitted';
        }
    }
}

?>