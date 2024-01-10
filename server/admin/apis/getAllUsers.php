<?php

include('../../database.php');

if (isset($_GET['from'])) {

         // $allowedDomains = [
         //          $domain . 'admin/clients/',
         //          $domain . 'admin/clients/index.php'
         // ];

         // if (in_array($_GET['from'], $allowedDomains)) {
                  $select = mysqli_query($connection, "SELECT * FROM `clients`");
                  while ($row = mysqli_fetch_assoc($select)) {
                           echo json_encode($row, JSON_PRETTY_PRINT);
                  }
         // }
}
