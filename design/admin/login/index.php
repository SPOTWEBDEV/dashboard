<?php

include('../../server/database.php');
include('../../server/admin/config/index.php');


if (isset($_POST['sign_in'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($email == "" && $password == "") {

        echo '<script>alert("input empty")</script>';
    } else {
        $statement = mysqli_query($connection, "SELECT * FROM `admin` WHERE `email`='$email' AND `password`='$password'");


        if ($statement) {
            if(mysqli_num_rows($statement)){
                $row = mysqli_fetch_assoc($statement);
                $id = $row['id'];
                $_SESSION['new_login_id'] = $id;
                // echo '<script>alert("welcome")</script>';
                header('location: ../dashboard/');

            }else{
                echo'<></>';
            }
           
        }
    }
}

?>
<!-- <a href="../"></a> -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="px-5 py-5 p-lg-0 bg-surface-secondary">
        <div class="d-flex justify-content-center">
            <div class="col-lg-5 col-xl-4 p-12 p-xl-20 position-fixed start-0 top-0 h-screen overflow-y-hidden bg-primary d-none d-lg-flex flex-column">
                <!-- Logo -->
                <a class="d-block" href="#">
                    <img src="https://preview.webpixels.io/web/img/logos/clever-light.svg" class="h-10" alt="...">
                </a>
                <!-- Title -->
                <div class="mt-32 mb-20">
                    <h1 class="ls-tight font-bolder display-6 text-white mb-5">
                        Let’s build something amazing today.
                    </h1>
                    <p class="text-white text-opacity-75">
                        Maybe some text here will help me see it better. Oh God. Oke, let’s do it then.
                    </p>
                </div>
                <!-- Circle -->
                <div class="w-56 h-56 bg-orange-500 rounded-circle position-absolute bottom-0 end-20 transform translate-y-1/3"></div>
            </div>
            <div class="col-12 col-md-9 col-lg-7 offset-lg-5 border-left-lg min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
                <div class="row">
                    <div class="col-lg-10 col-md-9 col-xl-6 mx-auto ms-xl-0">
                        <div class="mt-10 mt-lg-5 mb-6 d-flex align-items-center d-lg-block">
                            <span class="d-inline-block d-lg-block h1 mb-lg-6 me-3">👋</span>
                            <h1 class="ls-tight font-bolder h2">
                                Nice to see you!
                            </h1>
                        </div>
                        <form method="POST">
                            <div class="mb-5">
                                <label class="form-label" for="email">Email address</label>
                                <input name="email" type="email" class="form-control form-control-muted" id="email">
                            </div>
                            <div class="mb-5">
                                <label class="form-label" for="password">Password</label>
                                <input name="password" type="password" class="form-control form-control-muted" id="password" autocomplete="current-password">
                            </div>
                            <div class="mb-5">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="check_example" id="check_example">
                                    <label class="form-check-label" for="check_example">
                                        Keep me logged in
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button type="submit" name="sign_in" class="btn btn-primary w-full">Sign in</button>
                            </div>
                        </form>
                        <div class="py-5 text-center">
                            <span class="text-xs text-uppercase font-semibold">or</span>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <a href="#" class="btn btn-neutral w-full">
                                </a>
                            </div>
                            <div class="col-sm-6">
                                <a href="#" class="btn btn-neutral w-full">
                                </a>
                            </div>
                        </div>
                        <div class="my-6">
                            <small>Don't have an account?</small>
                            <a href="#" class="text-warning text-sm font-semibold">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>