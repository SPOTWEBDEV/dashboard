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

    .section_holder{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 65%;
        margin-left: 27%;
        margin-top: 5%;
        background-color: blue;
    }
    .profile_settings{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
</style>

<body>


    <?php include('../../layout/client/nav.php') ?>
    <?php include('../../layout/client/sidenav.php') ?>



    <section class="section_holder">
        <div class="profile_settings">
            <div class="ps_p">
                <p style="color: red;">Profile settings</p>
            </div>

            <div class="ps_btn">
                <button>Save changes</button>
            </div>
        </div>
    </section>




    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>


</body>

</html>