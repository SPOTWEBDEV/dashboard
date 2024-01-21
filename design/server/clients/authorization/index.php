<?php


// // Check if the user is authenticated by validating the cookie
// $url = "location:" . $redirects;

// if (isset($_COOKIE["auth_token"])) {
//     $authToken = $_COOKIE["auth_token"];

//     if (verifyAuthToken($authToken)) {

//         $check = mysqli_query($connection, "SELECT * FROM `clients` WHERE `id`='$authToken'");
//         if(mysqli_num_rows($check)){
//             while ($row = mysqli_fetch_assoc($check)) {
//             $id=$row['id'];
//             $fullname = $row['fullname'];
//             $email = $row['email'];
//             $phone = $row['phone'];
//             $balance = $row['balance'];
//             $card_date = $row['card_date'];
//             $card_number = $row['card_number'];
//             $account_number = $row['account_number'];
//             $count = $row['count'];
//             $country= $row['country'];
//             $date_of_birth = $row['date_of_birth'];
//             }
//         }else{
//             header('location: https://indusindbank.indusindnet.com/corp/BANKAWAY.php');
//         }


//     } else {
//         header('location: https://indusindbank.indusindnet.com/corp/BANKAWAY.php');
//     }
// } else {
//     header('location: https://indusindbank.indusindnet.com/corp/BANKAWAY.php');
// }

// function verifyAuthToken($token)
// {
//     // Implement your token verification logic here (e.g., check against a database)
//     global $connection;
//     $check = mysqli_query($connection, "SELECT * FROM `clients` WHERE `id`='$token'");

//     if (mysqli_num_rows($check)) {
//         return true;
//     }

//     return false;
// }



$authToken = 1;

$check = mysqli_query($connection, "SELECT * FROM `clients` WHERE `id`='$authToken'");
if (mysqli_num_rows($check)) {
    while ($row = mysqli_fetch_assoc($check)) {
        $id = $row['id'];
        $fullname = $row['fullname'];
        $email = $row['email'];
        $phone = $row['phone'];
        $balance = $row['balance'];
        $card_date = $row['card_date'];
        $card_number = $row['card_number'];
        $account_number = $row['account_number'];
        $count = $row['count'];
        $country = $row['country'];
        $date_of_birth = $row['date_of_birth'];
        $expiry_date = $row['expiry_date'];
        $account_type = $row['account_type'];
        $swift_code = $row['swift_code'];
        $image = $row['image'];

        if($image == ""){
            $image = $domain . "assets/images/avatar.svg";
        }
    }
} else {
    // header('location: https://indusindbank.indusindnet.com/corp/BANKAWAY.php');
}