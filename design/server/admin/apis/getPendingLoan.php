<?php
include('../../database.php');


$allowedDomains = [
    $domain . 'admin/loan/pending/',
    $domain . 'admin/loan/pending/#',
    $domain . 'admin/loan/pending/index.php',
    $domain . 'admin/loan/',
    $domain . 'admin/loan/#',
    $domain . 'admin/loan/index.php/'
];

if (in_array($_GET['from'], $allowedDomains)) {
    $select = mysqli_query($connection, "SELECT * FROM `loan` WHERE `status`='0' ORDER BY `id` DESC");
    while ($row = mysqli_fetch_assoc($select)) {
        echo json_encode($row, JSON_PRETTY_PRINT);
    }
}
