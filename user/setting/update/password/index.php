<?php

include('../../../../server/database.php');

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
</head>
<style>
    #crid_mode {
        margin-top: 100px;
    }
</style>

<body>


    <?php include('../../../../layout/client/nav.php') ?>
    <?php include('../../../../layout/client/sidenav.php') ?>



    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14" id="crid_mode">





            <!-- Main modal -->
            <div id="crud-modal" tabindex="-1" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden  z-50 justify-center items-center w-full md:inset-0  max-h-full border">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-red-900 dark:text-white">
                                Change password
                            </h3>

                        </div>
                        <!-- Modal body -->
                        <div class="p-4 md:p-5">
                            <div class="grid gap-4 mb-4 grid-cols-2">
                                <div class="col-span-2">
                                    <label for="name" class="transferInput block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Old password</label>
                                    <input type="number" name="name" id="name" class="account_number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Account Number" required="">
                                </div>
                                <div class="col-span-2">
                                    <label for="name" class="transferInput block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Comfirm Old Password</label>
                                    <input type="text" name="name" id="name" class="account_name bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Account Name" required="">
                                </div>
                                <div class="col-span-2 ">
                                    <label for="price" class="transferInput block mb-2 text-sm font-medium text-gray-900 dark:text-white ">New Password</label>
                                    <input type="number" name="price" id="price" class="amounts bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Amount" required>
                                </div>


                            </div>
                            <button onclick="checkInputs()" id=" button" type=" button" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                                Change
                            </button>
                            <!-- <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal">

                                                                        Transfer
                                                               </button> -->
                        </div>
                    </div>
                </div>
            </div>





            <!-- Main modal -->
            <!-- <div id="authentication-modal" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <!- Modal content --
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!- Modal header --
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Sign in to our platform
                            </h3>

                        </div>
                        <!- Modal body --
                        <div class="p-4 md:p-5">
                            <form class="space-y-4" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                </div>
                                <div class="flex justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                                        </div>
                                        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                    </div>
                                    <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                                </div>
                                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> -->



        </div>
    </div>




    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script>
        // let transferInput = document.querySelectorAll('.transferInput');
        // transferInput.forEach(el => {
        //          el.addEventListener('keyup', () => {
        //                   if (event.target.)
        //          })
        // })

        function checkInputs() {

            var inputElements = document.querySelectorAll('.checkNotEmpty');
            var allInputsNotEmpty = true;


            for (var i = 0; i < inputElements.length; i++) {
                if (inputElements[i].value.trim() === '') {
                    allInputsNotEmpty = false;
                    break;
                }
            }


            if (allInputsNotEmpty) {
                let account_number = $('.account_number').val()
                let account_name = $('.account_name').val()
                let amounts = $('.amounts').val()

                $(() => {

                    let url = "<?php echo $domain ?>" + "server/client/apis/transfer.php"

                    $.ajax({
                        url: url,
                        method: "POST",
                        data: {
                            id: data[0].id,
                            account_number,
                            account_name,
                            amounts,
                            assign: "insertTransfer",
                            from: window.location.href
                        },
                        success(respone) {
                            if (respone) {
                                sendingOtp(respone, data[0].fullname, data[0].email)

                            } else {
                                alert('something went wrong')
                            }



                        },
                        error(error) {
                            console.log(error);
                        }
                    })
                })
            } else {
                alert('Please fill in all inputs.');
            }
        }
    </script>
    </script>
</body>

</html>