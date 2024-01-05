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
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/css/components/card.css">
</head>
<style>
    #logo-sidebar2 {
        background-color: #832625;
        height: 70px;
    }

    #box_balance {
        margin-top: 40px;
    }

    #links_side {
        margin-top: 15px;
    }

    #links_stuff {
        margin-top: 20px;
    }
</style>

<body>


    <?php include('../../layout/client/nav.php') ?>
    <?php include('../../layout/client/sidenav.php') ?>




    <div class="p-4 sm:ml-64" id="box_balance">
        <div class="p-4 mt-14">
            <div class="flex flex-wrap justify-center gap-4 mb-4">
                <div class="rounded-lg dark:border-gray-600 h-fit flex flip">
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
                <div class="rounded-lg dark:border-gray-600 h-fit flex ">
                    <div class="card ">
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
                                    <?php if ($count > 3) { ?>
                                        <button>Banner</button>
                                    <?php } else { ?>
                                        <button>Active</button>
                                    <?php }  ?>

                                </p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <div class="flex items-center justify-center rounded bg-gray-50  dark:bg-gray-800">
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
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"></div>
                                                        <div class="font-medium text-gray-800">Alex Shatov</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left">alexshatov@gmail.com</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-medium text-green-500">$2,890.66</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-lg text-center">🇺🇸</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach"></div>
                                                        <div class="font-medium text-gray-800">Philip Harbach</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left">philip.h@gmail.com</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-medium text-green-500">$2,767.04</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-lg text-center">🇩🇪</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" width="40" height="40" alt="Mirko Fisuk"></div>
                                                        <div class="font-medium text-gray-800">Mirko Fisuk</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left">mirkofisuk@gmail.com</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-medium text-green-500">$2,996.00</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-lg text-center">🇫🇷</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg" width="40" height="40" alt="Olga Semklo"></div>
                                                        <div class="font-medium text-gray-800">Olga Semklo</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left">olga.s@cool.design</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-lg text-center">🇮🇹</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long"></div>
                                                        <div class="font-medium text-gray-800">Burak Long</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left">longburak@gmail.com</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left font-medium text-green-500">$1,890.66</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-lg text-center">🇬🇧</div>
                                                </td>
                                            </tr>
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







    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
</body>

</html>