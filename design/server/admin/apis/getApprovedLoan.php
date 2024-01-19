<?php
include('../../database.php');


$allowedDomains = [
         $domain . 'admin/loan/approved/',
         $domain . 'admin/loan/approved/#',
         $domain . 'admin/loan/approved/index.php'
];

if (in_array($_GET['from'], $allowedDomains)) {
         $select = mysqli_query($connection, "SELECT * FROM `loan` WHERE `status`='1' ORDER BY `id` DESC");
         while ($row = mysqli_fetch_assoc($select)) {
                  echo json_encode($row, JSON_PRETTY_PRINT);
         }
}
