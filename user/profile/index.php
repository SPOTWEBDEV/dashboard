<?php



include('../../server/database.php');
include('../../server/client/authorization/index.php');
include('../../server/config.php');


?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="short icon" type="image/png" href="../../assets/img/favicon.ico" sizes="32x32">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
</head>
<style>
    #crid_m {
        color: #832625;
    }
</style>

<body>


    <?php include('../../layout/client/nav.php') ?>
    <?php include('../../layout/client/sidenav.php') ?>



    <div class="p-4 sm:ml-64">
        <div class="p-4  rounded-lg dark:border-gray-700 mt-14" id="crid_mode">





            <!-- Main modal -->
            <div id="crud-modal" tabindex="-1" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden  z-50 justify-center items-center w-full md:inset-0  max-h-full ">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow border dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-red-900 dark:text-white">
                                Profile
                            </h3>

                        </div>
                        <form method="POST" class="p-4 md:p-5">
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2">
                                    <label for="name" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Fullname</label>

                                    <input type="text" value="<?= $fullname ?>" class="fullname bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                                </div>
                                <div class="col-span-2">
                                    <label for="name" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Email</label>
                                    <input type="text" value="<?= $email ?>" class="email bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                                </div>
                                <div class="col-span-2 ">
                                    <label for="price" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Phone Number</label>
                                    <input type="text" value="<?= $phone ?>" class="phone bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                                </div>


                            </div>

                        </form>
                    </div>
                </div>
            </div>








        </div>
    </div>




    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>


</body>

</html>