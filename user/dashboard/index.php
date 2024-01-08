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

    <link rel="short icon" type="image/png" href="../../assets/img/favicon.ico" sizes="32x32">



    <!-- <link rel="icon" type="image/png" href="/assets/css/components/img/favicon.ico"
        sizes="32x32" />
    <link rel="icon" type="image/png" href="/assets/css/components/img/favicon.ico"
        sizes="64x64" />
    <link rel="icon" type="image/png" href="/assets/css/components/img/favicon.ico"
        sizes="128x128" /> -->

    <title>Document</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../../assets/css/components/card.css">
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="https://cdn.tailwindcss.com"></script>
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
                <div class="rounded-lg dark:border-gray-600 h-fit flex w-full  sm:w-[50%]">
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

            <div class="flex items-center justify-center rounded bg-gray-50  dark:bg-gray-800 w-full ">
                <div class=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">

                    <div class="flex justify-between items-start w-full">
                        <div class="flex-col items-center">
                            <div class="flex items-center mb-1">
                                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">Transcation Chart</h5>
                                <svg data-popover-target="chart-info" data-popover-placement="bottom" class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
                                </svg>
                                <div data-popover id="chart-info" role="tooltip" class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                                    <div class="p-3 space-y-2">
                                        <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
                                        <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
                                        <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
                                        <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
                                        <a href="#" class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline">Read more <svg class="w-2 h-2 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg></a>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>
                            </div>


                        </div>

                    </div>

                    <!-- Line Chart -->
                    <div class="py-6" id="pie-chart"></div>

                    <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                        <div class="flex justify-between items-center pt-5">
                            <!-- Button -->
                            <!-- <button id="dropdownDefaultButton" data-dropdown-toggle="lastDaysdropdown" data-dropdown-placement="bottom" class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white" type="button">
                                Last 7 days
                                <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button> -->
                            <!-- <div id="lastDaysdropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                                    </li>
                                </ul>
                            </div> -->
                            <!-- <a href="#" class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                                Traffic analysis
                                <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </a> -->
                        </div>
                    </div>
                </div>

                <script>
                    // ApexCharts options and config
                    window.addEventListener("load", function() {
                        const getChartOptions = () => {
                            return {
                                series: [52.8, 26.8, 20.4],
                                colors: ["#1C64F2", "#16BDCA", "#9061F9"],
                                chart: {
                                    height: 420,
                                    width: "100%",
                                    type: "pie",
                                },
                                stroke: {
                                    colors: ["white"],
                                    lineCap: "",
                                },
                                plotOptions: {
                                    pie: {
                                        labels: {
                                            show: true,
                                        },
                                        size: "100%",
                                        dataLabels: {
                                            offset: -25
                                        }
                                    },
                                },
                                labels: ["Approve", "Declined", "Pending"],
                                dataLabels: {
                                    enabled: true,
                                    style: {
                                        fontFamily: "Inter, sans-serif",
                                    },
                                },
                                legend: {
                                    position: "bottom",
                                    fontFamily: "Inter, sans-serif",
                                },
                                yaxis: {
                                    labels: {
                                        formatter: function(value) {
                                            return value + "%"
                                        },
                                    },
                                },
                                xaxis: {
                                    labels: {
                                        formatter: function(value) {
                                            return value + "%"
                                        },
                                    },
                                    axisTicks: {
                                        show: false,
                                    },
                                    axisBorder: {
                                        show: false,
                                    },
                                },
                            }
                        }

                        if (document.getElementById("pie-chart") && typeof ApexCharts !== 'undefined') {
                            const chart = new ApexCharts(document.getElementById("pie-chart"), getChartOptions());
                            chart.render();
                        }
                    });
                </script>
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
                                        <!-- <tbody class="text-sm divide-y divide-gray-100">
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        
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
                                        </tbody> -->
                                        <th>table is empty</th>
                                        
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