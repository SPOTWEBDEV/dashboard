<?php

include('../../server/database.php');
include('../../server/config.php');
include('../../server/clients/authorization/index.php');


function generateOTP()
{
         $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
         $pin = '';

         for ($i = 0; $i < 5; $i++) {
                  $randomIndex = rand(0, strlen($characters) - 1);
                  $pin .= $characters[$randomIndex];
         }

         return $pin;
}
$randomPIN = generateOTP();
function generateTransferId()
{
         $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
         $specialId = '';

         for ($i = 0; $i < 12; $i++) {
                  $randomIndex = rand(0, strlen($characters) - 1);
                  $specialId .= $characters[$randomIndex];
         }

         return $specialId;
}
$randomPIN = generateTransferId();

if (isset($_POST['transfer'])) {
}



?>



<h1>WELCOME <?= $fullname ?></h1>
<form method="POST">
         <button name="transfer">submit</button>
</form>