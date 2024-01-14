<?php
include('../../database.php');

echo 'send';

$allowedDomains = [
         $domain . 'design/user/dashboard/',
         $domain . 'design/user/dashboard/#',
         $domain . 'design/user/dashboard/index.php'
];

if (in_array($_GET['from'], $allowedDomains)){
         $select = mysqli_query($connection, "SELECT * FROM `transfer`");
         while ($row = mysqli_fetch_assoc($select)) {
                  echo json_encode($row, JSON_PRETTY_PRINT);
         }
}


?>