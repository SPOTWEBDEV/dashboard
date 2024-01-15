<?php
include('../../database.php');



$allowedDomains = [
         $domain . '/user/dashboard/',
         $domain . '/user/dashboard/#',
         $domain . '/user/dashboard/index.php'
];

if (in_array($_GET['from'], $allowedDomains)){
         $select = mysqli_query($connection, "SELECT * FROM `transfer`");
         while ($row = mysqli_fetch_assoc($select)) {
                  echo json_encode($row, JSON_PRETTY_PRINT);
         }
}


?>