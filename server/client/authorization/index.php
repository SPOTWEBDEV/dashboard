<?php


// Check if the user is authenticated by validating the cookie
$url = "location:" . $redirects;

if (isset($_COOKIE["auth_token"])) {
    $authToken = $_COOKIE["auth_token"];

    if (verifyAuthToken($authToken)) {

        $check = mysqli_query($connection, "SELECT * FROM `clients` WHERE `id`='$authToken'");


        while ($row = mysqli_fetch_assoc($check)) {
            $id=$row['id'];
            $fullname = $row['fullname'];
            $email = $row['email'];
            $phone = $row['phone'];
            $balance = $row['balance'];
            $card_date = $row['card_date'];
            $card_number = $row['card_number'];
            $account_number = $row['account_number'];
            $count = $row['count'];
            $country= $row['country'];
            $date_of_birth = $row['date_of_birth'];
        }
    } else {
        echo "Authentication failed. Redirect to login.";
        header($url);
        exit();
    }
} else {
    echo "User not authenticated. Redirect to login.";
    // Redirect the user to the login page
    header($url);
    exit();
}

function verifyAuthToken($token)
{
    // Implement your token verification logic here (e.g., check against a database)
    global $connection;
    $check = mysqli_query($connection, "SELECT * FROM `clients` WHERE `id`='$token'");

    if (!mysqli_num_rows($check)) {
        return false;
    }

    return true;
}
