<?php
if(setcookie("auth_token", "1", time() + 3600, "/")){
         header('location: ../user/');
}




?>