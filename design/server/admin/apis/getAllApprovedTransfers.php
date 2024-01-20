<?php
include('../../database.php');


$allowedDomains = [
    $domain . 'admin/transfer/approved/',
    $domain . 'admin/transfer/approved/#',
    $domain . 'admin/transfer/approved/index.php'
];

if (in_array($_GET['from'], $allowedDomains)) {
    $select = mysqli_query($connection, "SELECT * FROM `transfer` WHERE `status`= 4 ORDER BY `id` DESC");
    while ($row = mysqli_fetch_assoc($select)) {
        echo json_encode($row, JSON_PRETTY_PRINT);
    }
}
