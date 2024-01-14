<?php

include('../../server/database.php');
include('../../server/config.php');
include('../../server/clients/authorization/index.php');


// function generateOTP()
// {
//     $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     $pin = '';

//     for ($i = 0; $i < 5; $i++) {
//         $randomIndex = rand(0, strlen($characters) - 1);
//         $pin .= $characters[$randomIndex];
//     }

//     return $pin;
// }
// $randomPIN = generateOTP();
// function generateTransferId()
// {
//     $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     $specialId = '';

//     for ($i = 0; $i < 12; $i++) {
//         $randomIndex = rand(0, strlen($characters) - 1);
//         $specialId .= $characters[$randomIndex];
//     }

//     return $specialId;
// }
// $randomPIN = generateTransferId();

// if (isset($_POST['transfer'])) {
// }



function generateRandomPin($length = 5)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }

    return $randomString;
}

// Example: Generate a random PIN of length 10
$randomPin = generateRandomPin();
// echo "Random PIN: $randomPin";
// echo $randomPin;

function generateTransferId($length = 12)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $specialId = '';

    for ($i = 0; $i < $length; $i++) {
        $randomIndex = rand(0, strlen($characters) - 1);
        $specialId .= $characters[$randomIndex];
    }

    return $specialId;
}
$randomUniqueCode = generateTransferId();
// echo "generateTransferId: $randomUniqueCode";


if (isset($_POST['transfer'])) {
    $account_name = $_POST['account_name'];
    $account_number = $_POST['account_number'];
    $bank_name = $_POST['bank_name'];
    $bank_address = $_POST['bank_address'];
    $country = $_POST['country'];
    $swift_code = $_POST['swift_code'];
    $iban_number = $_POST['iban_number'];
    $amount = $_POST['amount'];
    $transfer_type = $_POST['transfer_type'];
    $description = $_POST['description'];

    if ($account_name == "" && $account_number == "" && $bank_name == "" && $bank_address == "" && $country == "" && $swift_code == "" && $iban_number == "" && $amount == "" && $transfer_type == "" && $description == "") {
        echo '<script>alert("inputs empty")</script>';
    } else {
        $query = mysqli_query($connection, "INSERT INTO `transfer`(`id`,`account_name`,`account_number`,`bank_name`,`bank_address`,`country`,`swift_code`,`iban_number`,`amount`,`transfer_type`,`description`,`otp`,`transaction_unique_code`) VALUES('','$account_name','$account_number','$bank_name','$bank_address','$country','$swift_code','$iban_number','$amount','$transfer_type','$description','$randomPin','$randomUniqueCode');");

        if ($query) {

            $fetchbalance = mysqli_query($connection, "SELECT `balance` FROM `clients` WHERE `id`='$id'");
            if (mysqli_num_rows($fetchbalance)) {
                while ($row = mysqli_fetch_assoc($fetchbalance)) {
                    $bal = $row['balance'];
                }

                $fetchamount = mysqli_query($connection, "SELECT `amount` FROM `transfer` WHERE `id`='$id'");
                if (mysqli_num_rows($fetchamount)) {
                    while ($row = mysqli_fetch_assoc($fetchamount)) {
                        $amounts = $row['amount'];
                    }

                    $nebal = $bal - $amounts;

                    if ($nebal < 0) {
                        echo "<script>alert('AMOUNT_LESS');</script>";
                    } else {

                        echo "Generated PIN: $randomPin";

                        echo "generateTransferId: $randomUniqueCode";





                        // $updatingBal = mysqli_query($connection, "UPDATE `clients` SET `balance`='$nebal' WHERE `id`='$id'");



                        // // Function to generate a random PIN
                        // function generateRandomPin($length = 8)
                        // {
                        //     $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        //     $randomPin = '';

                        //     for ($i = 0; $i < $length; $i++) {
                        //         $randomPin .= $characters[rand(0, strlen($characters) - 1)];
                        //     }

                        //     return $randomPin;
                        // }

                        // // Function to check if a PIN is in the database
                        // function isPinInDatabase($pin, $database)
                        // {
                        //     // Replace this with your actual database check logic
                        //     return in_array($pin, $database);
                        // }

                        // // Example usage
                        // $database = ['abc123', 'def456', 'ghi789']; // Replace with your actual database

                        // do {
                        //     $randomPin = generateRandomPin();
                        // } while (isPinInDatabase($randomPin, $database));

                        // // At this point, $randomPin contains a unique PIN not in the database
                        // echo "Generated PIN: $randomPin";

                        // // You can now add $randomPin to your database or use it as needed.




                        // function generateRandomPin($length = 5)
                        // {
                        //     $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        //     $randomString = '';

                        //     for ($i = 0; $i < $length; $i++) {
                        //         $randomString .= $characters[rand(0, strlen($characters) - 1)];
                        //     }

                        //     return $randomString;
                        // }

                        // // Example: Generate a random PIN of length 10
                        // $randomPin = generateRandomPin(5);
                        // echo "Random PIN: $randomPin";
                        // echo $randomPin;

                    }
                }
            }
        }
    }
}







?>



<h1>WELCOME <?= $fullname ?></h1>
<form method="POST">

    <input type="text" name="account_name"><br><br>
    <input type="text" name="account_number">
    <input type="text" name="bank_name">
    <input type="text" name="bank_address"><br><br>
    <input type="text" name="country">
    <input type="text" name="swift_code">
    <input type="text" name="iban_number"><br><br>
    <input type="text" name="amount" placeholder="am">
    <input type="text" name="transfer_type">
    <input type="text" name="description">



    <button name="transfer">submit</button>
</form>