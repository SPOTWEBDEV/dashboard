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
        margin-top: 12.5%;
        /* background-color: blue;   */
        font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
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

    .ps_btn button {
        width: 110px;
        font-size: 15px;
        border: 1px solid #832625;
        width: 110px;
        height: 40px;
        border-radius: 5px;
        background: #832625;
        color: white;
    }
    .ps_btn:hover button {
        background: white;
        color: #832625;
    }

    .profile_box {
        border: 1px solid rgb(0, 0, 0, 0.2);
        width: 100%;
        height: 48vh;
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
        width: 118px;
        height: 4px;
        background: #832625;
        margin-top: 10px;
        margin: 0;
        margin-bottom: -16px;
        margin-left: 27px;
    }

    .inputs_holder {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        /* padding-bottom: 100px; */
        /* width: 100%; */
    }

    form {
        margin-left: 40px;
        margin-top: 15px;
        /* width: 100%; */
    }

    .input_box1 {
        margin-left: 30px;
    }

    .input_box2 {
        display: flex;
        align-items: center;
    }

    .input_box3 {
        display: flex;
        align-items: center;
    }

    .input_box4 {
        display: flex;
        align-items: center;
    }

    .input_box1 input {
        border-radius: 8px;
        width: 40%;
        height: 35px;
        font-weight: 600;
        text-align: center;
        color: #832625;
        background: rgb(131, 38, 37, 0.1);
        border: 3px solid #832625;
        margin-left: 30px;
    }

    .input_none {
        border-radius: 8px;
        width: 40%;
        height: 35px;
        font-weight: 600;
        text-align: center;
        color: #832625;
        background: rgb(131, 38, 37, 0.1);
        border: 3px solid #832625;
        margin-left: 30px;
        display: none;
    }

    .input_box2 input {
        border-radius: 5px;
        width: 100%;
        height: 30px;
        font-weight: 600;
        color: #832625;
        border: 1px solid #832625;
        margin-left: 60px;
        margin-top: 25px;
        letter-spacing: 1px;
    }

    .input_box3 input {
        border-radius: 5px;
        width: 100%;
        height: 30px;
        font-weight: 600;
        color: #832625;
        border: 1px solid #832625;
        margin-left: 60px;
        margin-top: 25px;
        letter-spacing: 1px;
    }

    .input_box4 input {
        border-radius: 5px;
        width: 100%;
        height: 30px;
        font-weight: 600;
        color: #832625;
        border: 1px solid #832625;
        margin-left: 60px;
        margin-top: 25px;
        letter-spacing: 1px;
    }

    .input_box1 label {
        font-weight: 600;
    }

    .input_box2 label {
        font-weight: 600;
        margin-bottom: -20px;
        letter-spacing: 1px;
    }

    .input_box3 label {
        font-weight: 600;
        margin-bottom: -20px;
        letter-spacing: 1px;
    }

    .input_box4 label {
        font-weight: 600;
        margin-bottom: -20px;
        letter-spacing: 1px;
    }


    .profile_spec {
        width: 40%;
        height: 20vh;
        margin-top: 80px;
        margin-right: 40px;
        border: 1px solid #832625;
        background: rgb(184, 126, 125);
        color: white;
        text-align: center;
        border-radius: 10px;
    }

    .step_P1 {
        font-weight: 600;
        font-size: 24px;
    }

    .steps_num {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 8px;
        margin-left: 10px;
    }

    .steps_num p {
        font-size: 17px;
        font-weight: 600;
    }

    @media screen and (max-width: 1268px) {
        .profile_spec {
            margin-right: 10px;
        }
    }

    @media screen and (max-width: 1163px) {
        .profile_spec {
            width: 30%;
        }

        .step_P1 {
            font-size: 20px;
        }

        .steps_num p {
            font-size: 15px;
        }
    }

    @media screen and (max-width: 1059px) {
        .section_holder {
            margin-left: 32%;
        }
    }

    @media screen and (max-width: 1016px) {
        .profile_spec {
            display: none;
        }

        .input_box2 input {
            width: 100%;
        }

        .inputs_holder {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            width: 100%;
            padding-right: 10px;
        }

        form {
            margin-left: 40px;
            margin-top: 15px;
            width: 100%;
        }
        .section_holder{
            margin-top: 20%;
        }
    }

    @media screen and (max-width: 843px) {
        .section_holder {
            margin-left: 34%;
        }
    }

    @media screen and (max-width: 788px) {
        .section_holder {
            width: 57%;
            margin-left: 38%;
        }
    }

    @media screen and (max-width: 752px) {
        .section_holder {
            /* width: 57%; */
            margin-left: 40%;
            margin-top: 26%;
        }
    }

    @media screen and (max-width: 680px) {
        .section_holder {
            width: 50%;
            margin-left: 43%;
        }
    }

    @media screen and (max-width: 662px) {
        .section_holder {
            /* width: 57%; */
            margin-left: 46%;
        }
    }

    @media screen and (max-width: 639px) {
        .section_holder {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            margin-top: 20%;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 100px;
            /* padding-top: 30%; */

            /* margin-left: 38%; */
        }
    }

    @media screen and (max-width: 463px) {
        .input_box1 input {
            width: 44%;
        }

        .section_holder {
            margin-top: 32%;
        }
    }

    @media screen and (max-width: 427px) {
        .input_box1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-left: -50px;
        }
    }

    @media screen and (max-width: 347px) {
        .input_box2 input {
            margin-left: 5px;
        }

        .input_box3 input {
            margin-left: 5px;
        }

        .input_box4 input {
            margin-left: 5px;
        }

        .input_none {
            display: block;
        }

        .input_duk {
            display: none;
        }

        .ps_p p {
            font-size: 21px;
        }

        .ps_btn button {
            width: 110px;
            font-size: 15px;
            border: 1px solid #832625;
            width: 110px;
            height: 40px;
            border-radius: 5px;
            background: #832625;
            color: white;
        }
    }
    @media screen and (max-width: 294px) {
        .input_box2{
            margin-left: -30px;
        }
        .input_box3{
            margin-left: -30px;
        }
        .input_box4{
            margin-left: -30px;
        }
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
                        <input class="input_duk" type="text" value="Change Profile" readonly>
                        <input class="input_none" type="text" value="Profile" readonly>
                    </div>

                    <div class="input_box2">
                        <label>Name</label>
                        <input type="text" name="name">
                    </div>

                    <div class="input_box3">
                        <label>Phone</label>
                        <input type="text" name="phone">
                    </div>

                    <div class="input_box4">
                        <label>Email</label>
                        <input type="text" name="email">
                    </div>

                </form>



                <div class="profile_spec">
                    <div class="steps">
                        <p class="step_P1">Requirement</p>

                        <div class="steps_num">
                            <p>1: input real Name</p>
                            <p>2 : Verified Number</p>
                            <p>3 : input correct Email</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>




    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>


</body>

</html>