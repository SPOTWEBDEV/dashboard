<?php

include('../../server/database.php');
include('../../server/config.php');
include('../../server/clients/authorization/index.php');


// if (isset($_POST['deposit'])) {
//     $amount = $_POST['amount'];
//     $image = $_POST['image'];
//     $date = $_POST['date'];

//     if ($amount == "") {
//         echo '<script>
//                 window.onload = function(){

//                     Swal.fire({
//                         title: "Empty Input Error",
//                         text: "The input field must not be left empty. Please provide the required information..",
//                         icon: "error"
//                         });

//                 }
//                 </script>';
//     } else {

//         $query = mysqli_query($connection, "INSERT INTO `transfer`(`user_id`,`amount`,`image`,`date`) VALUES('','$amount','$image','$date')");

//         if ($query) {
//         }
//     }
// }


if (isset($_POST['deposit'])) {

    $file = $_FILES["file"];
    $filename = $file["name"];
    $tmp_name = $file["tmp_name"];
    $filetype = $file["type"];
    $filesize = $file["size"];
    $date = $_POST['date'];
    $amount = $_POST['amount'];


    // Read the file data
    $fp = fopen($tmp_name, 'r');
    $content = fread($fp, filesize($tmp_name));
    $content = addslashes($content);
    fclose($fp);


    // Insert data into the database
    $sql = "INSERT INTO deposit (filename, image_data,user,date,amount) VALUES ('$filename', '$content','$id','$date','$amount')";
    if ($connection->query($sql) === TRUE) {
        echo "Image uploaded successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}






?>






<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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

        #bitcoin {
            font-weight: 900;
            color: black;
        }
    </style>
    <?php include('../../layout/clients/nav.php ')  ?>
    <section class="flex w-full ">
        <?php include('../../layout/clients/sidenav.php') ?>
        <main class="absolute right-0 ">
            <header class="w-full flex flex-col gap-y-6 sm:flex-row items-center capitalize justify-between py-12 bg-white px-6 border-b-gray">
                <div class="flex gap-x-3">
                    <h1 class="text-lg sm:text-2xl">Deposit</h1>
                </div>

                <div class="btn flex flex-col sm:flex-row gap-x-3 gap-y-6">
                    <button class="text-white background border-gray-600 rounded-lg py-2 px-3"> <i class="bi bi-wallet"></i> Add Deposit</button>

                    <a href="<?php echo $domain ?>user/transfer/"><button class="text-white credit-card border-gray-600 rounded-lg py-2 px-3"> <i class="bi bi-send-exclamation text-white"></i> Make Transfer</button></a>

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
                            <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-color md:ms-2 ">Deposit</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 hover:text-color capitalize">Deposit form</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <section class="flex item-center justify-center gap-x-6 gap-y-6 flex-wrap ">


                <div class="w-[300px] h-[150px] p-6 bg-white border border-gray-200 rounded-lg shadow  flex justify-center items-center">
                    <a href="#">
                        <h5 id="bitcoin" class="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
                            <i class="fa-brands fa-bitcoin"></i> BITCOIN
                        </h5>
                    </a>
                </div>


                <div class="w-[300px] h-[150px] p-6 bg-white border border-gray-200 rounded-lg shadow flex justify-center items-center flex-col">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><i class="fa-brands fa-bitcoin"></i> TETHER</h5>
                    </a>
                    <p class="mb-3 font-bold text-4xl text-gray-700 ">USDT</p>

                </div>

                <div class="w-[300px] h-[150px] p-6 bg-white border border-gray-200 rounded-lg shadow  flex justify-center items-center">
                    <a href="#" class="border-y border-x border-grey-500 px-3 py-1 flex justify-center items-center bg-orange-400 text-white">
                        <h5 class="mb-2 text-3xl font-bold tracking-tight text-white">
                            STICPAY
                        </h5>
                    </a>
                </div>

                <div class="w-[300px] h-[150px] p-6 bg-white border border-gray-200 rounded-lg shadow  flex justify-center items-center">
                    <a href="#">
                        <h5 id="bitcoin" class="mb-2 text-6xl font-bold tracking-tight text-gray-900 ">
                        <i class="fa-brands fa-cc-mastercard"></i> <i class="fa-brands fa-cc-jcb"></i> <i class="fa-brands fa-cc-visa"></i>
                        </h5>
                    </a>
                </div>
                <div class="w-[300px] h-[150px] p-6 bg-white border border-gray-200 rounded-lg shadow  flex justify-center items-center">
                    <a href="#" class="text-green">
                        <h5 id="bitcoin" class="mb-2 text-5xl font-black tracking-tight text-green ">
                            NETELLER
                        </h5>
                    </a>
                </div>
                <div class="w-[300px] h-[150px] p-6 bg-white border border-gray-200 rounded-lg shadow  flex justify-center items-center">
                    <a href="#" class="text-purple">
                        <h5 id="bitcoin" class="mb-2 text-5xl font-black tracking-tight text-purple ">
                            Skrill
                        </h5>
                    </a>
                </div>







            </section>



            <section class="bg-white flex  flex-col gap-x-6 gap-y-6  px-6 w-full py-2 mt-3">
                <div class="w-full">
                    <small class="text-lg capitalize">Deposit</small>
                    <div class="border w-24 border-color"></div>
                </div>
                <div class="max-w-2xl">

                    <form method="POST" enctype="multipart/form-data">
                        <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <input name="date" type="hidden" class="date">
                            <div class="sm:col-span-2">
                                <label for="amount" class="block mb-2 text-sm font-medium text-gray-900  capitalize">Amount</label>
                                <input type="text" name="amount" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Amount" required="">
                            </div>
                            <div>
                                <label for="image" class="block mb-2 text-sm font-medium text-gray-900  capitalize">Image</label>
                                <input type="file" name="file" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Image" required="">
                            </div>
                            <div hidden>
                                <label for="date" class="block mb-2 text-sm font-medium text-gray-900  capitalize">Date</label>
                                <input type="text" name="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Date" required="">
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">

                            <button name="deposit" type="submit" class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  gap-x-2">
                                <i class="bi bi-send-check"></i>
                                Deposit
                            </button>
                        </div>
                    </form>
                </div>
            </section>






        </main>
    </section>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>

    <script>
        let input = document.querySelector('#date')
        input.value = moment().format();
    </script>
</body>

</html>