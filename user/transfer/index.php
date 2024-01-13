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


    <title>Transfer: IndusInd Bank</title>

    <link rel="short icon" type="image/png" href="../../assets/img/favicon.ico" sizes="32x32">


    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
</head>
<style>
    #crid_mode {
        margin-top: 100px;
    }
</style>

<body>


    <?php include('../../layout/client/nav.php') ?>
    <?php include('../../layout/client/sidenav.php') ?>



    <div class="p-4 sm:ml-64">
        <div class="p-4  rounded-lg dark:border-gray-700 mt-14" id="crid_mode">

            <style>
                .transfer {
                    display: block;
                    box-sizing: border-box;
                    /* background-color: #832625; */
                }

                .transfer.active {
                    display: none;
                }

                .otp {
                    display: none;
                }

                .otp.active {
                    display: block;
                }

                #proceed,
                .sendOtp {
                    background: #832625;
                }

                /* #name:focus{
                            border: 2px solid #832625;
                        } */
            </style>





            <!-- Main modal -->
            <div id="crud-modal" tabindex="-1" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden  z-50 justify-center items-center w-full md:inset-0 ">
                <div class="relative sm:px-4 w-full flex justify-center sm:w-[80%] ">

                    <div class="px-6  border-2 border rounded-lg transfer">
                        <div class="flex flex-no-wrap items-start">
                            <div class="w-full">
                                <div class="py-4 px-2">
                                    <div class="bg-white rounded   py-7 px-6">
                                        <div class="hidden lg:block md:hidden">
                                            <div class="px-7 header flex bg-white lg:justify-start md:justify-start justify-start py-[30px] px-6 border-b-[2px] border-slate-100 flex-wrap gap-x-4">


                                                <a class="cursor-pointer mt-6">
                                                    <div class="flex items-center group">
                                                        <div class="svg-container">
                                                            <svg class="text-[#1E293B] group-hover:text-indigo-700" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2.07556 7.81027L17.7006 1.8966C17.7569 1.87504 17.8183 1.87026 17.8774 1.88284C17.9364 1.89543 17.9905 1.92483 18.0332 1.96751C18.0758 2.01018 18.1052 2.0643 18.1178 2.12332C18.1304 2.18234 18.1256 2.24375 18.1041 2.30011L12.1904 17.9251C12.1669 17.9845 12.1258 18.0352 12.0726 18.0704C12.0194 18.1057 11.9566 18.1238 11.8928 18.1224C11.829 18.1209 11.7672 18.1 11.7156 18.0623C11.6641 18.0247 11.6253 17.9722 11.6045 17.9118L8.97165 11.4239C8.94096 11.332 8.8893 11.2485 8.82076 11.1799C8.75222 11.1114 8.66868 11.0597 8.57673 11.029L2.08884 8.39855C2.02772 8.37821 1.97438 8.33949 1.93612 8.28767C1.89785 8.23586 1.87653 8.17348 1.87508 8.10909C1.87363 8.04469 1.89211 7.98142 1.92799 7.92793C1.96388 7.87444 2.01542 7.83334 2.07556 7.81027V7.81027Z" stroke="Currentcolor" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M17.9688 2.03125L8.86719 11.1328" stroke="Currentcolor" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </div>
                                                        <div class="pl-3 heading-container">
                                                            <p class="text-base font-medium leading-none text-slate-800 group-hover:text-indigo-700">
                                                                Transfer
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                        </div>
                                        <div class="block px-6 lg:hidden md:block mt-2">
                                            <div class="relative top-1">
                                                <div class="relative w-full mt-2 rounded outline-none dropdown-one bg-gray-50">
                                                    <button onclick="showDropDownMenutwo_form_layout_wizard3(this)" class="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one">
                                                        <span class="pr-4 text-sm font-medium text-indigo-700 flex flex-row-reverse justify-end gap-x-2" id="drop-down-content-setter-two_form_layout_wizard3">
                                                            <div class="flex gap-x-2">
                                                                <svg class="text-[#1E293B] group-hover:text-indigo-700" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.07556 7.81027L17.7006 1.8966C17.7569 1.87504 17.8183 1.87026 17.8774 1.88284C17.9364 1.89543 17.9905 1.92483 18.0332 1.96751C18.0758 2.01018 18.1052 2.0643 18.1178 2.12332C18.1304 2.18234 18.1256 2.24375 18.1041 2.30011L12.1904 17.9251C12.1669 17.9845 12.1258 18.0352 12.0726 18.0704C12.0194 18.1057 11.9566 18.1238 11.8928 18.1224C11.829 18.1209 11.7672 18.1 11.7156 18.0623C11.6641 18.0247 11.6253 17.9722 11.6045 17.9118L8.97165 11.4239C8.94096 11.332 8.8893 11.2485 8.82076 11.1799C8.75222 11.1114 8.66868 11.0597 8.57673 11.029L2.08884 8.39855C2.02772 8.37821 1.97438 8.33949 1.93612 8.28767C1.89785 8.23586 1.87653 8.17348 1.87508 8.10909C1.87363 8.04469 1.89211 7.98142 1.92799 7.92793C1.96388 7.87444 2.01542 7.83334 2.07556 7.81027V7.81027Z" stroke="Currentcolor" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M17.9688 2.03125L8.86719 11.1328" stroke="Currentcolor" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                <p class="text-base font-medium leading-none text-indigo-700 mt-[1px]">
                                                                    Transfer
                                                                </p>
                                                            </div>
                                                        </span>
                                                        <div class="relative w-5 h-5 bg-indigo-100 rounded flex items-center justify-center">
                                                            <svg id="rotate" class=" inset-x-0 inset-y-0 z-10  cursor-pointer" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.5 0.75L5 5.25L9.5 0.75" stroke="#4338ca" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    <div class="absolute right-0 z-20 hidden w-full px-2 py-2 bg-white border-t border-gray-200 rounded shadow top-12" id="drop-down-div-two_form_layout_wizard3">
                                                        <div class="flex gap-x-2 group">
                                                            <p onclick="swaptexttwo_form_layout_wizard3(this)" class="flex flex-row-reverse justify-end gap-x-2 w-full p-3 text-base font-medium leading-none text-gray-600 group-hover:text-indigo-700 mt-[1px] cursor-pointer group-hover:bg-indigo-100 group-hover:font-medium group-hover:text-indigo-700 group-hover:rounded">
                                                                Transfer
                                                                <svg class="text-[#1E293B] group-hover:text-indigo-700" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.07556 7.81027L17.7006 1.8966C17.7569 1.87504 17.8183 1.87026 17.8774 1.88284C17.9364 1.89543 17.9905 1.92483 18.0332 1.96751C18.0758 2.01018 18.1052 2.0643 18.1178 2.12332C18.1304 2.18234 18.1256 2.24375 18.1041 2.30011L12.1904 17.9251C12.1669 17.9845 12.1258 18.0352 12.0726 18.0704C12.0194 18.1057 11.9566 18.1238 11.8928 18.1224C11.829 18.1209 11.7672 18.1 11.7156 18.0623C11.6641 18.0247 11.6253 17.9722 11.6045 17.9118L8.97165 11.4239C8.94096 11.332 8.8893 11.2485 8.82076 11.1799C8.75222 11.1114 8.66868 11.0597 8.57673 11.029L2.08884 8.39855C2.02772 8.37821 1.97438 8.33949 1.93612 8.28767C1.89785 8.23586 1.87653 8.17348 1.87508 8.10909C1.87363 8.04469 1.89211 7.98142 1.92799 7.92793C1.96388 7.87444 2.01542 7.83334 2.07556 7.81027V7.81027Z" stroke="Currentcolor" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M17.9688 2.03125L8.86719 11.1328" stroke="Currentcolor" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </p>
                                                        </div>




                                                    </div>
                                                </div>
                                                <!-- end -->
                                            </div>
                                        </div>
                                        <!-- end -->
                                        <div class="mt-10 px-7">
                                            <p class="text-xl font-semibold leading-tight text-gray-800">
                                                Transfer
                                            </p>
                                            <p class="mt-3 text-sm leading-[15px] text-gray-600 px-7">
                                                We will never ask for your password or sensitive information through email or any other communication. Be cautious of
                                                phishing attempts.
                                            </p>
                                            <div class="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-y-4 mt-7 gap-x-4">


                                                <div>
                                                    <p class="text-base font-medium leading-none text-gray-800 mt-5">
                                                        Account Number
                                                    </p>
                                                    <input class="account_number w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />

                                                </div>
                                                <div>
                                                    <p class="text-base font-medium leading-none text-gray-800 mt-5">
                                                        Account Name
                                                    </p>
                                                    <input class="account_name w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />

                                                </div>
                                                <div>
                                                    <p class="text-base font-medium leading-none text-gray-800 mt-5">
                                                        Amount
                                                    </p>
                                                    <input class="amounts w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />

                                                </div>
                                                <div>
                                                    <p class=" text-base font-medium leading-none text-gray-800 mt-5">
                                                        IBAN
                                                    </p>
                                                    <input class="iban w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />

                                                </div>
                                                <div>
                                                    <p class=" text-base font-medium leading-none text-gray-800 mt-5">
                                                        BIC/SWIFT/ROUTING NUMBER
                                                    </p>
                                                    <input class="bic_swift w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />

                                                </div>
                                                <div>
                                                    <p class=" text-base font-medium leading-none text-gray-800 mt-5">
                                                        Country
                                                    </p>
                                                    <input class="country w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />

                                                </div>
                                                <div>
                                                    <p class=" text-base font-medium leading-none text-gray-800 mt-5">
                                                        Address
                                                    </p>
                                                    <input class="address w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />

                                                </div>
                                            </div>
                                        </div>


                                        <hr class="h-[1px] bg-gray-500 mt-14" />
                                        <div class="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">

                                            <button id="proceed" class="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full mb-3">
                                                Initiate Transfer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="rounded-lg shadow otp w-full ">



                        <!-- Main modal -->
                        <div id="authentication-modal" class=" z-50 justify-center items-center mt-6 w-full">
                            <div class="relative p-4 w-full ">
                                <!-- Modal content -->
                                <div class="relative bg-white rounded-lg   w-full">
                                    <!-- Modal header -->
                                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                            Input OTP
                                        </h3>

                                    </div>
                                    <!-- Modal body -->
                                    <div class="p-4 md:p-5">
                                        <div class="space-y-4">
                                            <div>
                                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter OTP</label>
                                                <input type="text" name="email" id="email" class="otpvalue bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                            </div>


                                            <button type="button" class="sendOtp w-full text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Send OTP</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>







            </div>
        </div>



        <script type="text/javascript" src="../../assets/js/tawk.js"></script>
        <script src="<?php echo $domain ?>assets/js/translate.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>

        <script>
            let domain = "<?php echo $domain ?>";
        </script>

        <script>
            let proceed = document.getElementById('proceed')

            proceed.onclick = (event) => {
                event.preventDefault();
                let account_number = $('.account_number').val()
                let account_name = $('.account_name').val()
                let amounts = $('.amounts').val()
                let iban = $('.iban').val()
                let bic_swift = $('.bic_swift').val()
                let country = $('.country').val()
                let address = $('.address').val()

                $(() => {

                    let url = "<?php echo $domain ?>" + "server/client/apis/transfer.php"

                    $.ajax({
                        url: url,
                        method: "POST",
                        data: {
                            id: "<?php echo $id ?>",
                            account_number,
                            account_name,
                            amounts,
                            iban,
                            bic_swift,
                            country,
                            address,
                            assign: "insertTransfer",
                            from: window.location.href
                        },
                        success(data) {

                            console.log(data.trim())

                            let respone = data.trim()


                            if (respone) {


                                sendingOtp(respone, "<?php echo $fullname ?>", "<?php echo $email ?>")




                            } else {
                                alert('something went wrong')
                            }



                        },
                        error(error) {
                            console.log(error);
                        }
                    })
                })
            }





            function sendingOtp(otp, fullname, email) {
                var formData = new FormData();
                formData.append('service_id', 'indusindnet');
                formData.append('template_id', 'template_jecf58b');
                formData.append('user_id', '_VBgknKrVwwZMkITn');
                formData.append('name', fullname);
                formData.append('otp', otp);
                formData.append('email', email);

                $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                    type: 'POST',
                    data: formData,
                    contentType: false, // auto-detection
                    processData: false // no need to parse formData to string
                }).done(function() {
                    // alert('Your mail is sent!');
                    let otpbox = $('.otp')
                    let transfer = $('.transfer')
                    otpbox[0].classList.add('active')
                    transfer[0].classList.add('active')
                    // console.log(otpbox);
                }).fail(function(error) {
                    alert('Oops... ' + JSON.stringify(error));
                });
            }



            $('.sendOtp').on('click', () => {
                let opt = $('.otpvalue').val();

                let url = "<?php echo $domain ?>" + "server/client/apis/transfer.php"
                $.ajax({
                    url: url,
                    method: "POST",
                    data: {
                        id: "<?php echo $id ?>",
                        amounts:  $('.amounts').val(),
                        opt,
                        amounts: $('.amounts').val(),
                        assign: "optverification",
                        from: window.location.href
                    },
                    success(data) {
                        const respone = data.trim()

                        console.log(respone);

                        if (respone == "WRONG_OTP") {

                            Swal.fire({
                                icon: "error",
                                title: "Invalid OTP",
                                text: "OTP provided is invalid. Please ensure you are using the correct one-time password."

                            });

                        } else if (respone == "OPT_SUCCESSFULLY") {
                            Swal.fire({
                                icon: "success",
                                title: "Transfer Completed Successfully",
                                text: "Your funds have been successfully transferred. Thank you for choosing our services."

                            });
                        } else if (respone == "ACCOUNT_BANNED") {
                            sendingEmail("<?php echo $fullname ?>", "<?php echo $email ?>");

                        } else if(respone == "AMOUNT_LESS"){
                            Swal.fire({
                                icon: "error",
                                title: "Transaction Error",
                                text: "Insufficient funds,Please try again later."

                            });
                        }
                        else {
                            Swal.fire({
                                icon: "error",
                                title: "Transaction Failed",
                                text: "We're sorry, but your transfer could not be completed at this time. Please try again later."

                            });
                        }



                    },
                    error(error) {
                        console.log(error);
                    }
                })
            })

            function sendingEmail(fullname, email) {
                var formData = new FormData();
                formData.append('service_id', 'indusindnet');
                formData.append('template_id', 'template_a1xzdqr');
                formData.append('user_id', '_VBgknKrVwwZMkITn');
                formData.append('name', fullname);
                formData.append('email', email);

                $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                    type: 'POST',
                    data: formData,
                    contentType: false, // auto-detection
                    processData: false // no need to parse formData to string
                }).done(function() {
                    Swal.fire({
                        icon: "error",
                        title: "ACCOUNT BANNED",
                        text: "Account has been Frozen and you can not carry out transfer from this account until you obtain the COT CODE , by getting the Anti-Money Laundering Certificate.",

                    });
                }).fail(function(error) {
                    alert('Oops... ' + JSON.stringify(error));
                });
            }
        </script>
        </script>
</body>

</html>