<?php



include('../../server/database.php');
include('../../server/client/authorization/index.php');
include('../../server/config.php');



if (isset($_POST['save'])) {

    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];

    if (!empty($name) && !empty($number) && !empty($email)) {

        $update = mysqli_query($connection, "UPDATE `clients` SET `fullname`='$name' , `phone`='$number' , `email`='$email' WHERE `id`='$id'");

        if ($update) { ?>
            <script>
                alert(' The IndusNet Profile changed successfully. ');

                // location.reload();
                window.open('./index.php', '_self')
            </script>
        <?php } else { ?>
            <script>
                alert(' The IndusNet Profile cannot be edited. Please re-enter ');

                // location.reload();
                window.open('./index.php', '_self')
            </script>
        <?php  }
    } else { ?>
        <script>
            alert(' The IndusNet Input is empty please input something. ');

            // location.reload();
            window.open('./index.php', '_self')
        </script>
<?php }
}



?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile: IndusInd Bank</title>

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
        /* background-color: red; */
        width: 80%;
        /* font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; */
    }

    form {
        width: 100%;
        height: 100%;
    }

    .profile_settings {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        /* margin-bottom: -30px; */
        margin-bottom: 20px;
    }

    .ps_p p {
        font-size: 25px;

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
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ps_btn:hover button {
        background: white;
        color: #832625;
    }

    .profile_box {
        border: 1px solid rgb(0, 0, 0, 0.2);
        width: 100%;
        padding: 20px 0px;
        border-radius: 10px;
        box-shadow: 0em 0em 0.2em rgb(0, 0, 0, 0.2);
    }

    .pb_head p {
        color: #832625;

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
        width: 100%;
    }

    .form {
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 15px;
        display: flex;
        align-items: center;
        column-gap: 30px;
        row-gap: 20px;
        width: 100%;
    }

    .input_box_holder {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .input_box_holder2 {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .input_box1 {
        text-align: center;
        margin-top: -10px;
    }

    .input_box1 label {
        font-size: 25px;
    }

    .input_none {
        border-radius: 8px;
        width: 40%;
        height: 35px;

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
        height: 60px;

        color: #832625;
        border: 1px solid #832625;
        letter-spacing: 1px;
    }

    .input_box3 input {
        border-radius: 5px;
        width: 100%;
        height: 60px;

        color: #832625;
        border: 1px solid #832625;
        letter-spacing: 1px;
    }

    .input_box4 input {
        border-radius: 5px;
        width: 100%;
        height: 60px;

        color: #832625;
        border: 1px solid #832625;
        letter-spacing: 1px;
    }

    .input_box5 input {
        border-radius: 5px;
        width: 100%;
        height: 60px;

        color: #832625;
        border: 1px solid #832625;
        letter-spacing: 1px;
    }

    .input_box6 input {
        border-radius: 5px;
        width: 100%;
        height: 60px;

        color: #832625;
        border: 1px solid #832625;
        letter-spacing: 1px;
    }



    .input_box2 label {

        margin-bottom: -20px;
        letter-spacing: 1px;
        font-size: 20px;
    }

    .input_box3 label {

        letter-spacing: 1px;
        font-size: 20px;
    }

    .input_box4 label {

        letter-spacing: 1px;
        font-size: 20px;
    }

    .input_box5 label {

        letter-spacing: 1px;
        font-size: 20px;
    }

    .input_box6 label {

        letter-spacing: 1px;
        font-size: 20px;
    }


    .profile_spec {
        width: 50%;
        height: 45vh;
        margin-top: 80px;
        margin-right: 40px;
        border: 1px solid #832625;
        background: rgb(184, 126, 125);
        color: white;
        text-align: center;
        border-radius: 10px;
    }

    .step_P1 {

        font-size: 24px;
    }

    .steps_num {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 20px;
        margin-top: 8px;
        margin-left: 10px;
    }

    .steps_num p {
        font-size: 17px;

    }

    

   
</style>

<body>


    <?php include('../../layout/client/nav.php') ?>
    <?php include('../../layout/client/sidenav.php') ?>

    <div class="sm:p-4 sm:ml-64">
    <div class="sm:p-4  rounded-lg  mt-14">
    <div class="flex items-center justify-center mb-4 rounded bg-gray-50  w-full">
    <section class="section_holder">
        <form method="POST">
            <div class="profile_settings">
                <div class="ps_p">
                    <p>Profile settings</p>
                </div>

                <div class="ps_btn">
                    <button type="submit" name="save">Save changes</button>
                </div>
            </div>

            <div class="profile_box">
                <div class="pb_head">
                    <p>Your Profile</p>
                </div>
                <div class="line2"></div>
                <div class="line"></div>


                <div class="inputs_holder">
                    <div class="form">
                        <div class="input_box_holder">


                            <div class="input_box2">
                                <label>Name</label><br>
                                <input type="text" name="name" value="<?php echo $fullname ?>">
                            </div>

                            <div class="input_box3">
                                <label>Phone</label><br>
                                <input type="number" name="number" value="<?php echo $phone ?>">
                            </div>

                            <div class="input_box4">
                                <label>Email</label><br>
                                <input type="email" name="email" value="<?php echo $email ?>">
                            </div>
                            <div class="input_box5">
                                <label>Country</label><br>
                                <input type="text" name="country" value="<?php echo $country ?>">
                            </div>

                            <div class="input_box6">
                                <label style="white-space: nowrap;">Date of birth</label><br>
                                <input type="text" name="date_of_birth" value="<?php echo $date_of_birth ?>">
                            </div>

                        </div>

                        


                    </div>


                </div>
            </div>
        </form>

    </section>
    </div>
    </div>
    </div>


   



    <script type="text/javascript" src="../../assets/js/tawk.js"></script>
    <script src="<?php echo $domain ?>assets/js/translate.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>



</body>

</html>