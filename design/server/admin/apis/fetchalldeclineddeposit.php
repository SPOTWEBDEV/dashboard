<?php
include('../../database.php');


$allowedDomains = [
    $domain . 'admin/deposit/declined/',
    $domain . 'admin/deposit/declined/#',
    $domain . 'admin/deposit/declined/index.php'
];

if (in_array($_GET['from'], $allowedDomains)) {
    $select = mysqli_query($connection, "SELECT * FROM `deposit` WHERE `status` !=0 AND `status` !=1 ORDER BY `id` DESC");
    while ($row = mysqli_fetch_assoc($select)) {
        echo json_encode($row, JSON_PRETTY_PRINT);
    }
}
