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

    <link rel="icon" type="image/png" href="/assets/css/components/img/favicon.ico"
        sizes="32x32" />
    <link rel="icon" type="image/png" href="/assets/css/components/img/favicon.ico"
        sizes="64x64" />
    <link rel="icon" type="image/png" href="/assets/css/components/img/favicon.ico"
        sizes="128x128" />

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
            <div class="grid grid-cols-3 gap-4 mb-4">
                <div class="rounded-lg dark:border-gray-600 h-fit">


                    


                    <div class="card">
                        <div class="card__front card__part">
                            <img class="card__front-square card__square" >
                            <img class="card__front-logo card__logo" >
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
            </div>

        </div>
    </div>







    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
</body>

</html>