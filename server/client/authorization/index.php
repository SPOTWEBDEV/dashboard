<?php
include('../../database.php');
session_start();
if (isset($_POST['from'])) {
         $id = $_POST['myData'];

         $sql = "SELECT * FROM clients WHERE id = $id";
         $result = mysqli_query($connection, $sql);

         if ($result) {
                  if (mysqli_num_rows($result)) {
                           $row = mysqli_fetch_assoc($result);
                           echo json_encode($row, JSON_PRETTY_PRINT);
                  }
         }
} else {
         echo "LOGIN_INVALID";
}
