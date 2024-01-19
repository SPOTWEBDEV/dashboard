<?php
include('../../database.php');


$allowedDomains = [
    $domain . 'admin/clients/',
    $domain . 'admin/clients/#',
    $domain . 'admin/clients/index.php'
];

if (in_array($_GET['from'], $allowedDomains)) {
    $select = mysqli_query($connection, "SELECT * FROM `clients` ORDER BY `id` DESC");
    while ($row = mysqli_fetch_assoc($select)) {
        echo json_encode($row, JSON_PRETTY_PRINT);
    }
}
