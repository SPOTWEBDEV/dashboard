<?php

include('../../../../server/database.php');
include('../../../../server/client/authorization/index.php');



?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change password: IndusInd Bank</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<style>
    #crid_mode {
        margin-top: 100px;
    }
    #button{
        background: #832625;
    }
    #button:focus{
        border: 2;
    }
</style>

<body>




    <?php include('../../../../layout/client/nav.php') ?>
    <?php include('../../../../layout/client/sidenav.php') ?>



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
                                Change Password
                            </h3>

                        </div>
                        <!-- Modal body -->

                        <?php


                        if (isset($_POST['change'])) {
                            $old_password = $_POST['old_password'];
                            $id = $_POST['id'];
                            $cpassword = $_POST['cpassword'];
                            $new_password = $_POST['new_password'];
                            $stored_password = $_POST['password'];

                            if (
                                $old_password == '' && $cpassword == '' && $new_password == ''
                            ) {
                                echo '<script>alert("Input can\'t be empty")</script>';
                            } else {
                                if ($old_password == $stored_password) {
                                    if ($cpassword == $new_password) {
                                        $update_query = "UPDATE `clients` SET `password` = '$new_password' WHERE `id` = $id";
                                        $update_result = mysqli_query($connection, $update_query);

                                        if ($update_result) {
                                            echo "<script>alert('Password updated')</script>";
                                        } else {
                                            echo "<script>alert('Error updating password')</script>";
                                        }
                                    } else {
                                        echo "<script>alert('New password and confirm password do not match')</script>";
                                    }
                                } else {
                                    echo "<script>alert('Incorrect old password')</script>";
                                }
                            }
                        }



                        ?>


                        <form method="POST" class="p-4 md:p-5">
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2">
                                    <label for="name" class="transferInput block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Old password</label>
                                    <input type="hidden" class="initailpassword" name="password">
                                    <input type="hidden" class="id" name="id">
                                    <input type="text" name="old_password" id="name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Old password" required="">
                                </div>
                                <div class="col-span-2">
                                    <label for="name" class="transferInput block mb-2 text-sm font-medium text-gray-900 dark:text-white ">New Password</label>
                                    <input type="text" name="new_password" id="name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type New Password" required="">
                                </div>
                                <div class="col-span-2 ">
                                    <label for="price" class="transferInput block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Confirm New Password</label>
                                    <input type="text" name="cpassword" id="price" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Confirm New Password" required>
                                </div>


                            </div>
                            <button id="button" type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" name="change">

                                Change
                            </button>
                        </form>
                    </div>
                </div>
            </div>








        </div>
    </div>




    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>

    <script>
        let domain = "<?php echo $domain ?>";

        function value(data) {
            $('.initailpassword').val(data[0].password)
            $('.id').val(data[0].id)
            console.log(data[0].email);
        }
    </script>
    <script src="../../../../assets/js/localstore.js"></script>
</body>

</html>