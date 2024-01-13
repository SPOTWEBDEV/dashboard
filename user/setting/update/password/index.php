<?php

include('../../../../server/database.php');
include('../../../../server/client/authorization/index.php');
include('../../../../server/config.php');



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
    #button {
        background: #832625;
    }

    #button:focus {
        border: 2;
    }
</style>

<body>




<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
   <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 " style="background: #832625;">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
         <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
               <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  ">
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
               </button>
               <a href="#" class="flex ms-2 md:me-24">
                  <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" /> -->
                  <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white ">Indusind Bank</span>
               </a>
            </div>
            <div class="flex items-center">
               <div class="flex items-center ms-3">
                  <div>
                     <button type="button" class="flex text-sm  rounded-full focus:ring-4 focus:ring-gray-300 " aria-expanded="false" data-dropdown-toggle="dropdown-user">
                     <i class="bi bi-gear text-3xl text-white"></i>
                     </button>
                  </div>
                  <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow " id="dropdown-user">
                     <div class="px-4 py-3" role="none">
                        <p class="text-sm text-gray-900 " role="none">
                           <?= $fullname ?>
                        </p>
                        <p class="text-sm font-medium text-gray-900 truncate " role="none">
                        <?= $email ?>
                        </p>
                     </div>
                     <ul class="py-1" role="none">
                        <li>
                           <a href="<?php  echo $domain ?>user/dashboard/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem">Dashboard</a>
                        </li>
                        <li>
                           <a href="<?php  echo $domain ?>user/profile/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem">Profile</a>
                        </li>
                        
                        <li>
                           <a href="<?php  echo $domain ?>user/logout/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem">Sign out</a>
                        </li>
                        <li>
                           <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem"><?php include('../../../../server/client/translate/index.php') ?></a>
                        </li>
                        
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </nav>
    <?php include('../../../../layout/client/sidenav.php') ?>



    <div class="sm:p-4 sm:ml-64">
        <div class="sm:p-4  rounded-lg  mt-14">
            <div class="flex items-center justify-center mb-4 rounded bg-gray-50  w-[50%]">





                <!-- Main modal -->
                <div id="crud-modal" tabindex="-1" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden   justify-center items-center w-full md:inset-0  max-h-full ">
                    <div class="relative p-4 w-full max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow border ">
                            <!-- Modal header -->
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                                <h3 class="text-lg font-semibold text-red-900 ">
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
                                        <label for="name" class="transferInput block mb-2 text-sm font-medium text-gray-900  ">Old password</label>
                                        <input type="hidden" class="initailpassword" name="password">
                                        <input type="hidden" class="id" name="id">
                                        <input type="text" name="old_password" id="name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type Old password" required="">
                                    </div>
                                    <div class="col-span-2">
                                        <label for="name" class="transferInput block mb-2 text-sm font-medium text-gray-900 ">New Password</label>
                                        <input type="text" name="new_password" id="name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type New Password" required="">
                                    </div>
                                    <div class="col-span-2 ">
                                        <label for="price" class="transferInput block mb-2 text-sm font-medium text-gray-900 ">Confirm New Password</label>
                                        <input type="text" name="cpassword" id="price" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Confirm New Password" required>
                                    </div>


                                </div>
                                <button id="button" type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " name="change">

                                    Change
                                </button>
                            </form>
                        </div>
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