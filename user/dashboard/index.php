<?php

include('../../server/database.php');
include('../../server/client/authorization/index.php');
include('../../server/config.php');


$pending = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transaction` WHERE `user`='$id' AND `status`='0'"));
$approved = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transaction` WHERE `user`='$id' AND `status`='1'"));
$declined = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transaction` WHERE `user`='$id' AND `status`='2'"));
$credited = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transaction` WHERE `user`='$id' AND `status`='3'"));










?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="short icon" type="image/png" href="../../assets/img/favicon.ico" sizes="32x32">



    <!-- <link rel="icon" type="image/png" href="/assets/css/components/img/favicon.ico"
        sizes="32x32" />
    <link rel="icon" type="image/png" href="/assets/css/components/img/favicon.ico"
        sizes="64x64" />
    <link rel="icon" type="image/png" href="/assets/css/components/img/favicon.ico"
        sizes="128x128" /> -->

    <title>Dashboard: IndusInd Bank</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/css/components/card.css">
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>


<body>


    <?php include('../../layout/client/nav.php') ?>
    <?php include('../../layout/client/sidenav.php') ?>




    <div class="p-4 sm:ml-64" id="box_balance">
        <div class="p-4 mt-64 sm:mt-14">
            <div class="flex flex-wrap justify-center gap-4 mb-4 w-full">
                <div class="rounded-lg dark:border-gray-600 h-fit hidden sm:flex flip w-[300px]">
                    <div class="card">
                        <div class="card__front card__part">
                            <img class="card__front-square card__square">
                            <img class="card__front-logo card__logo">
                            <p class="card_numer">**** **** **** <?php echo substr($card_number, -4)  ?></p>
                            <div class="card__space-75">
                                <span class="card__label">Card holder</span>
                                <p class="card__info"><?= $fullname ?></p>
                            </div>
                            <div class="card__space-25">
                                <span class="card__label">Expires</span>
                                <p class="card__info"><?= $card_date  ?></p>
                            </div>
                        </div>

                        <div class="card__back card__part">
                            <div class="card__black-line"></div>
                            <div class="card__back-content">
                                <div class="card__secret">
                                    <p class="card__secret--last">420</p>
                                </div>
                                <img class="card__back-square card__square">
                                <img class="card__back-logo card__logo">

                            </div>
                        </div>

                    </div>





                </div>
                <div class="rounded-lg dark:border-gray-600 h-fit flex w-full  md:w-[70%] lg:w-[50%]">
                    <div class="card w-full">
                        <div class="card__front card__part">
                            <img class="card__front-square card__square">
                            <img class="card__front-logo card__logo">


                            <p class="text-center text-white mb-4 text-2xl">$<?php echo $balance ?></p>

                            <span class="text-white mt-4">Account Number <?php echo $account_number ?></span>


                            <div class="card__space-75 mt-5">
                                <span class="card__label">Account Name</span>
                                <p class="card__info"><?= $fullname ?></p>
                            </div>
                            <div class="card__space-25 mt-5">
                                <span class="card__label">Status</span>
                                <p class="card__info">
                                    <?php if ($count >= 3) { ?>
                                        <button class="text-sm">Account Frozen</button>
                                    <?php } else { ?>
                                        <button>Active</button>
                                    <?php }  ?>

                                </p>
                            </div>
                        </div>


                    </div>




                </div>

            </div>

           




            <div class="flex items-center justify-center rounded bg-gray-50  dark:bg-gray-800 mt-5">
                <p class="text-2xl text-gray-400 dark:text-gray-500">
                <section class="flex flex-col justify-center antialiased bg-gray-100 text-gray-600  w-full">
                    <div class="w-full">
                        <!-- Table -->
                        <div class="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
                            <header class="px-5 py-4 border-b border-gray-100">
                                <h2 class="font-semibold text-gray-800">Transcations</h2>
                            </header>
                            <div class="p-3">
                                <div class="overflow-x-auto">
                                    <table class="table-auto w-full">
                                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                            <tr>
                                                <th class="p-2 whitespace-nowrap">
                                                    <div class="font-semibold text-left">Date</div>
                                                </th>
                                                <th class="p-2 whitespace-nowrap">
                                                    <div class="font-semibold text-left">Transaction Type</div>
                                                </th>
                                                <th class="p-2 whitespace-nowrap">
                                                    <div class="font-semibold text-left">Amounts</div>
                                                </th>
                                                <th class="p-2 whitespace-nowrap">
                                                    <div class="font-semibold text-center">Status</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-sm divide-y divide-gray-100">
                                            <?php
                                            $query = mysqli_query($connection, "SELECT * FROM `transaction`");
                                            if (mysqli_num_rows($query)) {
                                                while ($row = mysqli_fetch_assoc($query)) { ?>

                                                    <tr class="text-left">
                                                        <td class="p-2 whitespace-nowrap">

                                                            <time class="timeago" datetime="<?php echo $row['date'] ?>"></time>
                                                        </td>
                                                        <td class="p-2 whitespace-nowrap"><?php echo $row['type'] ?></td>
                                                        <td class="p-2 whitespace-nowrap">
                                                            <div class="text-left font-medium text-green-500">$<?php echo $row['amount'] ?></div>

                                                        </td>
                                                        <td class="p-2 whitespace-nowrap">
                                                            <?php

                                                            if ($row['status'] == 0) { ?>
                                                                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Pending</button>
                                                            <?php } else if ($row['status'] == 1) { ?>
                                                                <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Approved</button>

                                                            <?php } else if ($row['status'] == 2) { ?>
                                                                <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Declined</button>

                                                            <?php } else if ($row['status'] == 3) { ?>

                                                                <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
                                                            <?php } ?>






                                                        </td>
                                                    </tr>
                                            <?php }
                                            }
                                            ?>

                                        </tbody>


                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                </p>
            </div>



        </div>
    </div>


    <script>
        let pending = "<?= $pending ?>";
        let approved = "<?= $approved ?>";
        let declined = "<?= $declined ?>";
    </script>
    <script src="<?php echo $domain ?>assets/vendor/chart.js/Chart.min.js"></script>
    <script src="<?php echo $domain ?>/assets/js/demo/chart-pie-demo.js" type="text/javascript"></script>
    <script type="text/javascript" src="../../assets/js/tawk.js"></script>
    <script src="<?php echo $domain ?>assets/js/translate.js"></script>
    <script src="<?php echo $domain ?>assets/js/timeago.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
</body>

</html>