<?php



include('../../server/database.php');
include('../../server/client/authorization/index.php');
// include('../../server/config.php');


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

    .section_holder {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        row-gap: 40px;
        width: 65%;
        margin-left: 27%;
        margin-top: 5%;
        /* background-color: blue;   */
        font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        ;
    }

    .profile_settings {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .ps_p p {
        font-size: 25px;
        font-weight: 600;
    }

    .profile_box {
        border: 1px solid rgb(0, 0, 0, 0.2);
        width: 100%;
        height: 50vh;
        border-radius: 10px;
        box-shadow: 0em 0em 0.2em rgb(0, 0, 0, 0.2);
    }

    .pb_head p {
        color: #832625;
        font-weight: 600;
        margin-left: 40px;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .line {
        width: 100%;
        height: 2px;
        background: rgb(0, 0, 0, 0.2);
        margin-top: 15px;
    }

    .line2 {
        width: 13%;
        height: 4px;
        background: #832625;
        margin-top: 10px;
        margin: 0;
        margin-bottom: -16px;
        margin-left: 27px;
    }
    form{
        margin-left: 40px;
        margin-top: 15px;
    }
    .input_box1 input{
        border-radius: 8px;
        width: 17%;
        height: 35px;
        font-weight: 600;
        text-align: center;
        color: #832625;
        background: rgb(131, 38, 37, 0.1);
        border: 3px solid #832625;
        margin-left: 30px;
    }
    .input_box2 input{
        border-radius: 5px;
        width: 40%;
        height: 35px;
        font-weight: 600;
        text-align: center;
        color: #832625;
        background: rgb(131, 38, 37, 0.1);
        border: 1px solid #832625;
        margin-left: 60px;
    }
    .input_box3 input{
        border-radius: 5px;
        width: 40%;
        height: 35px;
        font-weight: 600;
        text-align: center;
        color: #832625;
        background: rgb(131, 38, 37, 0.1);
        border: 1px solid #832625;
        margin-left: 60px;
    }
    .input_box4 input{
        border-radius: 5px;
        width: 40%;
        height: 35px;
        font-weight: 600;
        text-align: center;
        color: #832625;
        background: rgb(131, 38, 37, 0.1);
        border: 1px solid #832625;
        margin-left: 60px;
    }
    .input_box1 label{
        font-weight: 600;
    }
    .input_box2 label{
        font-weight: 600;
    }
    .input_box3 label{
        font-weight: 600;
    }
    .input_box4 label{
        font-weight: 600;
    }
</style>

<body>


    <?php include('../../layout/client/nav.php') ?>
    <?php include('../../layout/client/sidenav.php') ?>



    <section class="section_holder">
        <div class="profile_settings">
            <div class="ps_p">
                <p>Profile settings</p>
            </div>

            <div class="ps_btn">
                <button>Save changes</button>
            </div>
        </div>

        <div class="profile_box">
            <div class="pb_head">
                <p>Your Profile</p>
            </div>
            <div class="line2"></div>
            <div class="line"></div>


            <div class="inputs_holder">
                <form method="POST">
                    <div class="input_box1">
                        <label>Edit profile</label>
                        <input type="text" value="Change Profile" readonly>
                    </div>

                    <div class="input_box2">
                        <label>Edit profile</label>
                        <input type="text">
                    </div>

                    <div class="input_box3">
                        <label>Edit profile</label>
                        <input type="text">
                    </div>

                    <div class="input_box4">
                        <label>Edit profile</label>
                        <input type="text">
                    </div>
                </form>
            </div>
        </div>

    </section>




    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>


</body>

</html>