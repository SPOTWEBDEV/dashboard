<?php

include('../../server/database.php');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
</head>
<!-- <style>
    #logo-sidebar2 {
        background-color: #832625;
        height: 70px;
    }
    #box_balance{
        margin-top: 40px;
    }
    #links_side{
        margin-top: 15px;
    }
    #links_stuff{
        margin-top: 20px;
    }
</style> -->

<body>


    <?php include('../../layout/client/nav.php') ?>
    <?php include('../../layout/client/sidenav.php') ?>



    <div class="p-4 sm:ml-64" id="box_balance">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div class="grid grid-cols-3 gap-4 mb-4">
                <div class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-fit">


                    <div id="toast-interactive" class=" p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
                        <div class="flex w-full">
                            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97" />
                                </svg>
                                <span class="sr-only">Refresh icon</span>
                            </div>
                            <div class="ms-3 text-sm font-normal">
                                <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Balance</span>
                                <div class="mb-2 text-sm font-normal Balance"></div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    </div>




    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>

    <script>
        let domain = "<?php echo $domain ?>";

        function value(data) {
            console.log(data);
            $(".Balance").html(data[0].balance)
        }
    </script>
    <script src="../../assets/js/localstore.js"></script>

</body>

</html>