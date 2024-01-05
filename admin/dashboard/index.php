<?php
include('../../server/database.php');
// include('../../server/admin/authorization/index.php');

// $pendingDeposit = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `deposit` WHERE `status`=0"));
// $approveDeposit = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `deposit` WHERE `status`=1"));
// $clients = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `clients`"));
// $pendingTransfer = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transfer_table` WHERE `status`=0"));
// $approveTransfer = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transfer_table` WHERE `status`=1"));
// $declineTransfer = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transfer_table` WHERE `status`!=1 AND `status`!=0"));
//  $blockaccount = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `clients` WHERE `count`>= 3"));
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap" rel="stylesheet">
</head>

<body>
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
        <?php include('../../layout/admin/navbar.php');  ?>

        <!-- Sidebar -->

        <?php include('../../layout/admin/sidebar.php')  ?>
        <!-- <a href="../../"></a> -->

        <main class="p-4 md:ml-64 h-auto pt-20">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 py-3 ">
                <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-[200px]">


                    <div id="toast-interactive" class="w-full max-w-xs h-full p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
                        <div class="flex w-full">
                            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97" />
                                </svg>
                                <span class="sr-only">Refresh icon</span>
                            </div>
                            <div class="ms-3 text-sm font-normal">
                                <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Clients</span>
                                <div class="mb-2 text-sm font-normal"><?   ?></div>

                            </div>

                        </div>
                    </div>


                </div>
                <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-[200px]">


                    <div id="toast-interactive" class="w-full  h-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
                        <div class="flex w-full">
                            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97" />
                                </svg>
                                <span class="sr-only">Refresh icon</span>
                            </div>
                            <div class="ms-3 text-sm font-normal">
                                <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Pending Transfer</span>
                                <div class="mb-2 text-sm font-normal"><?  ?></div>

                            </div>

                        </div>
                    </div>


                </div>
                
                <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-[200px]">


                    <div id="toast-interactive" class="w-full h-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
                        <div class="flex w-full">
                            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97" />
                                </svg>
                                <span class="sr-only">Refresh icon</span>
                            </div>
                            <div class="ms-3 text-sm font-normal">
                                <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Block Account</span>
                                <div class="mb-2 text-sm font-normal"><?   ?></div>

                            </div>

                        </div>
                    </div>


                </div>
                
            </div>
        </main>
    </div>
</body>

</html>