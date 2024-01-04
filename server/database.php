<?php
define("HOST", "localhost");
define("USER", "root");
define("PASSWORD", "");
define("DATABASE", "indusindnet");

$connection = mysqli_connect(HOST, USER, PASSWORD, DATABASE);

if (!$connection) {
         die('not conneted to databse');
}

$domain = "http://localhost/dashboards/";
?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<style>
         @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');

         body {
                  font-family: 'Roboto', sans-serif;
         }
</style>