<?php
define("HOST", "localhost");
define("USER", "");
define("PASSWORD", "");
define("DATABASE", "indusindnet");

$connection = mysqli_connect(HOST, USER, PASSWORD, DATABASE);

if (!$connection) {
         die('not conneted to databse');
}
$domain = "http://localhost/dashboards";
?>
