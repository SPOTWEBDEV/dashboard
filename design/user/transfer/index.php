<?php

include('../../server/database.php');
include('../../server/config.php');
include('../../server/clients/authorization/index.php');



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
    $date = $_POST['date'];

    if ($account_name == "" && $account_number == "" && $bank_name == "" && $bank_address == "" && $country == "" && $swift_code == "" && $iban_number == "" && $amount == "" && $transfer_type == "" && $description == "") {
        echo '<script>
                window.onload = function(){

                    Swal.fire({
                        title: "Empty Input Error",
                        text: "The input field must not be left empty. Please provide the required information..",
                        icon: "error"
                        });
                    
                }
                </script>';
    } else {

        $nebal = $balance - $amount;

        if ($nebal < 0) {
            echo '<script>
                window.onload = function(){

                    Swal.fire({
                        title: "Balance Exceeded",
                        text: "We are unable to proceed with the transaction as the specified amount surpasses your account balance. Please verify the entered amount.",
                        icon: "error"
                        });
                    
                }
                </script>';
        } else {

            $query = mysqli_query($connection, "INSERT INTO `transfer`(`id`,`user`,`account_name`,`account_number`,`bank_name`,`bank_address`,`country`,`swift_code`,`iban_number`,`amount`,`transfer_type`,`description`,`otp`,`transaction_unique_code`,`date`) VALUES('','$id','$account_name','$account_number','$bank_name','$bank_address','$country','$swift_code','$iban_number','$amount','$transfer_type','$description','$randomPin','$randomUniqueCode','$date')");

            if ($query) {
                $url = 'location:' . $domain . "user/transfer/verification/?transfer_verification=" . $randomUniqueCode;
                header($url);
            }
        }
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
    <link rel="stylesheet" href="../../assets/css/main.css">
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

        form {
            font-family: 'Roboto', sans-serif;
            font-family: 600;
        }
    </style>
    <!-- <section class="h-12 w-full bg-yellow-300 py-6">

         </section> -->
    <section class="flex w-full ">
        <?php include('../../layout/clients/sidenav.php') ?>
        <main class="absolute right-0 ">
            <header class="w-full flex flex-col gap-y-6 sm:flex-row items-center capitalize justify-between py-12 bg-white px-6 border-b-gray">
                <div class="flex gap-x-3">
                    <h1 class="text-lg sm:text-2xl">Transfer Funds</h1>
                </div>

                <div class="btn flex flex-col small:flex-row gap-x-3 gap-y-6">
                    <button class="text-white background border-gray-600 rounded-lg py-2 px-3"> <i class="bi bi-wallet"></i> Add Deposit</button>

                    <a href="<?php echo $domain ?>design/user/transfer/"><button class="text-white credit-card border-gray-600 rounded-lg py-2 px-3"> <i class="bi bi-send-exclamation text-white"></i> Make Transfer</button></a>

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
                            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 hover:text-color capitalize">Online payment</span>
                        </div>
                    </li>
                </ol>
            </nav>



            <section class="bg-white flex  flex-col gap-x-6 gap-y-6  px-6 w-full py-2 mt-3">
                <div class="w-full">
                    <small class="text-lg capitalize">Transfer</small>
                    <div class="border w-24 border-color"></div>
                </div>
                <div class="max-w-2xl">
                    <h2 class="mb-4 text-xl font-semibold text-gray-900 ">Internation Transfer</h2>
                    <form method="POST">
                        <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <input name="date" type="hidden" class="date">
                            <div class="sm:col-span-2">
                                <label for="account_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Account
                                    Name</label>
                                <input type="text" name="account_name" id="account_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Fullname" required="">
                            </div>
                            <div class="w-full">
                                <label for="account_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Account
                                    Number</label>
                                <input type="number" name="account_number" id="account_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Account Number" required="">
                            </div>
                            <div class="w-full">
                                <label for="bank_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Bank
                                    name</label>
                                <input type="text" name="bank_name" id="bank_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Bank Name" required="">
                            </div>
                            <div>
                                <label for="bank_address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">bank
                                    Addrees</label>
                                <input type="text" name="bank_address" id="bank_address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Bank Address" required="">
                            </div>
                            <div>
                                <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Country</label>
                                <input type="text" name="country" id="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Country" required="">
                            </div>
                            <div>
                                <label for="swift_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Swift Code</label>
                                <input type="text" name="swift_code" id="swift_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Swift Code" required="">
                            </div>
                            <div>
                                <label for="iban_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">IBAN Number</label>
                                <input type="text" name="iban_number" id="iban_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Iban Number" required="">
                            </div>
                            <div>
                                <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Amount</label>
                                <input type="text" name="amount" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Amount" required="">
                            </div>
                            <div>
                                <label for="transfer_type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Transfertype</label>
                                <input type="text" name="transfer_type" id="transfer_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Transfer Type" required="">
                            </div>

                            <div class="sm:col-span-2">
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">Description</label>
                                <textarea name="description" id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none" placeholder="Write a description here..."></textarea>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">

                            <button name="transfer" type="submit" class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  gap-x-2">
                                <i class="bi bi-send-check"></i>
                                Transfer
                            </button>
                        </div>
                    </form>
                </div>
            </section>






        </main>
    </section>
    <script>
        let input = document.querySelector('.date')
        input.value = moment().format();
    </script>
</body>

</html>