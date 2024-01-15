<?php
include('../../../server/database.php');
include('../../../server/config.php');
include('../../../server/clients/authorization/index.php');
$transferverfication = false;

$transfercompleted = false;

$transferprocessing = true;
$recipt = '';
if (isset($_GET['transfer_verification'])) {
    $transfer_verification = $_GET['transfer_verification'];
    $select_transfer = mysqli_query($connection, "SELECT * FROM `transfer` WHERE `transaction_unique_code`='$transfer_verification'");
    if (mysqli_num_rows($select_transfer) && $transfer_verification != "") {
        while ($row = mysqli_fetch_assoc($select_transfer)) {
            $amount = $row['amount'];
            $Receiver_account_name = $row['account_name'];
            $status = $row['status'];
            if ($status == 1) {
                $transferverfication = false;
                $transferprocessing = false;
                $transfercompleted = true;
            }
        }
        $recipt = $transfer_verification;
    } else {
        header('location: ../../dashboard/');
    }
} else {
    header('location: ../../dashboard/');
}







if (isset($_POST['myButton'])) {
    $transferverfication = true;
    $transferprocessing = false;
}

if (isset($_POST['sendotp'])) {
    $otp = $_POST['otp'];
    $checkotp = mysqli_query($connection, "SELECT * FROM `transfer` WHERE `otp`='$otp'");

    if (mysqli_num_rows($checkotp)) {
        $checkotp = mysqli_query($connection, "UPDATE `transfer` SET `status`=1 WHERE `transaction_unique_code`='$transfer_verification'");
        $transferverfication = false;
        $transferprocessing = false;
        $transfercompleted = true;
    } else {
        $transferverfication = true;
        $transferprocessing = false;
        echo '<script>
                window.onload = function(){

                    Swal.fire({
                        title: "Transaction Added",
                        text: "Success! The transaction has been added to your account.",
                        icon: "error"
                        });
                    
                }
                </script>';
    }
}



?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        clifford: '#da373d',
                        color: '#f15075'
                    },
                    screens: {
                        smallest: '200px',
                        small: '340px',
                        sm: '640px',
                        md: '768px',
                        middleman: '950px',
                        lg: '1024px',
                        xl: '1280px',
                        '2xl': '1536px',
                    },
                }
            }
        }
    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="../../../assets/css/main.css">
</head>

<body>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        section nav {
            width: 300px;
        }

        section main {
            width: calc(100% - 300px);
        }

        @media(max-width:700px) {
            section main {
                width: 100%;
            }
        }
    </style>
    <!-- <section class="h-12 w-full bg-yellow-300 py-6">

         </section> -->
    <section class="flex w-full ">
        <?php include('../../../layout/clients/sidenav.php') ?>
        <main class="absolute right-0 ">
            <header class="w-full flex flex-col gap-y-6 sm:flex-row items-center capitalize justify-between py-12 bg-white px-6 border-b-gray">
                <div class="flex gap-x-3">
                    <h1 class="text-lg sm:text-2xl">Transfer Funds</h1>
                </div>

                <div class="btn flex flex-col small:flex-row gap-x-3 gap-y-6">
                    <button class="text-white background border-gray-600 rounded-lg py-2 px-3"> <i class="bi bi-wallet"></i> Add Deposit</button>
                    <button class="text-white credit-card border-gray-600 rounded-lg py-2 px-3"> <i class="bi bi-send-exclamation text-white"></i> Make Transfer</button>
                </div>
            </header>
            <nav class="hidden small:flex w-full px-6" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-color">
                            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-color md:ms-2 dark:text-gray-400 dark:hover:text-white">Transfer</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 hover:text-color">Flowbite</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <?php

            if ($transferprocessing) { ?>

                <section class="flex  flex-col gap-x-6 gap-y-6  px-6 w-full py-2 mt-3">
                    <div class="w-full">
                        <small class="text-lg capitalize">Processing Transfer</small>
                        <div class="border-2 w-40 border-blue-400"></div>
                    </div>
                    <div class="w-full ">
                        <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
                            <div class="relative p-4 bg-white rounded-lg drop-shadow-2xl  dark:bg-gray-800 md:p-8">
                                <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                                    <h3 class="mb-3 text-xl  bold text-gray-900  uppercase">Transaction Processing</h3>
                                    <div class=" w-full h-8">
                                        <div id="myDiv" class="h-full bg-green-500 flex items-center justify-center w-1">
                                            <span id="myDivText" class="font-semibold uppercase text-white text-md"></span>
                                        </div>
                                    </div>
                                    <p class="mt-6 ">
                                        You are transferring <i class="bi bi-currency-exchange"></i> $<?php echo number_format($amount, 2, '.', ',') ?> To <?php echo $Receiver_account_name ?>
                                    </p>
                                </div>
                                <form method="POST" class="justify-end items-center pt-0 space-y-4 sm:flex sm:space-y-0">

                                    <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                                        <button id="myButton" name="myButton" type="submit" disabled class="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-blue-500 uppercase cursor-not-allowed">Continue</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>

            <?php }

            ?>

            <?php

            if ($transferverfication) { ?>
                <section class="flex flex-col gap-x-6 gap-y-6 px-2  sm:px-6 w-full py-2 mt-3">
                    <div class="w-full flex flex-col justify-center items-center small:items-start">
                        <small class="text-sm small:text-lg capitalize ">Transfer Verification</small>
                        <div class="border-2 w-full sm:w-96 border-blue-400"></div>
                    </div>
                    <div class="w-full ">
                        <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
                            <form method="POST" class="relative p-4 bg-white rounded-lg drop-shadow-2xl  dark:bg-gray-800 md:p-8">
                                <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                                    <h3 class="mb-3 text-sm  small:text-xl  bold text-gray-900  uppercase">Transfer Verification</h3>

                                    <div class="mt-6 ">
                                        <label for="helper-text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter OTP</label>
                                        <input required type="password" name="otp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*******">
                                        <p class="mt-2 text-sm  color">Enter digit Verification code send to your Account Email.</p>


                                    </div>
                                </div>
                                <div class="justify-end items-center pt-0 space-y-4 sm:flex sm:space-y-0">

                                    <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                                        <button name="sendotp" id="confirm-button" type="submit" class="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-blue-500 uppercase">Continue</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            <?php }

            ?>



            <?php

            if ($transfercompleted) { ?>
                <section class="flex flex-col gap-x-6 gap-y-6 px-2  sm:px-6 w-full py-2 mt-3">
                    <div class="w-full ">
                        <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
                            <div class="relative p-4 bg-white rounded-lg drop-shadow-2xl  dark:bg-gray-800 md:p-8">
                                <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                                    <h3 class="mb-3 text-sm  small:text-xl  bold text-gray-900  uppercase">Transfer Completed</h3>

                                    <div class="h-16 w-16  rounded-full bg-color flex items-center justify-center">
                                        <i class="bi bi-send-check text-2xl text-white"></i>
                                    </div>

                                    <p class="mt-2 text-sm  text-green-300">You have Successfully Transfered $<?php echo number_format($amount, 2, '.', ',') ?> To <?php echo $Receiver_account_name ?> </p>
                                    <p class="mt-2 text-sm  color">Transaction initiated successfully. we are Processign your Transaction </p>
                                </div>
                                <div class="justify-end items-center pt-0 space-y-4 sm:flex sm:space-y-0">

                                    <div class="items-center  space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                                        <a href="<?php echo $domain ?>/user/paymentrecipt/?recipt=<?php echo $recipt ?>"><button id="confirm-button" type="button" class="py-2 px-4  text-sm font-medium text-center text-white rounded-lg bg-color uppercase">View Recipt</button></a>
                                        <a href="<?php echo $domain ?>/user/dashboard/"><button id="confirm-button" type="button" class="py-2 px-4 text-sm font-medium text-center  border-2 rounded-lg border-blue-500 uppercase">Back TO
                                                HOME</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <?php }

            ?>




        </main>
    </section>
    <script>
        // JavaScript code
        document.addEventListener('DOMContentLoaded', function() {
            const myButton = document.getElementById('myButton');
            const myDiv = document.getElementById('myDiv');

            // Disable the button initially
            myButton.disabled = true;
            let count = 0;

            // Enable the button and increase div width after 4 seconds
            setInterval(function() {
                if (count < 100) {
                    count = count + getRandomNumber(4, 10);
                    myDiv.style.width = count + '%';
                    document.querySelector('#myDivText').innerHTML = `${count}%`
                } else {
                    myButton.disabled = false;
                    myButton.classList.remove('cursor-not-allowed');

                }

            }, 1000);
        });

        function getRandomNumber(min, max) {
            // Generate a random number between min and max (inclusive)
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    </script>
</body>

</html>