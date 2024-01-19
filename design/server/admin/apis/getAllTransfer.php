<?php
include('../../database.php');


$allowedDomains = [
    $domain . 'admin/transfer/',
    $domain . 'admin/transfer/#',
    $domain . 'admin/transfer/index.php'
];

if (in_array($_GET['from'], $allowedDomains)) {
    $select = mysqli_query($connection, "SELECT * FROM `transfer` ORDER BY `id` DESC");
    while ($row = mysqli_fetch_assoc($select)) {
        echo json_encode($row, JSON_PRETTY_PRINT);
    }
}
