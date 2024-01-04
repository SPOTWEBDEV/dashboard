<?php

include('../../server/database.php');

?>


<!DOCTYPE html>
<html lang="en">

<head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
         <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
</head>

<body>


         <?php include('../../layout/client/nav.php') ?>
         <?php include('../../layout/client/sidenav.php') ?>



         <div class="p-4 sm:ml-64">
                  <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">





                           <!-- Main modal -->
                           <div id="crud-modal" tabindex="-1" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden  z-50 justify-center items-center w-full md:inset-0 ">
                                    <div class="relative p-4 w-full max-w-md ">
                                             <style>
                                                      .transfer {
                                                               display: block;
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
                                             </style>
                                             <!-- Modal content -->
                                             <div class="relative  rounded-lg shadow dark:bg-gray-700 transfer">
                                                      <!-- Modal header -->
                                                      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                               <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                                                        Transfer
                                                               </h3>

                                                      </div>
                                                      <!-- Modal body -->
                                                      <div class="p-4 md:p-5 py-6">
                                                               <div class="grid gap-4 mb-4 grid-cols-2">
                                                                        <div class="col-span-2">
                                                                                 <label for="name" class="transferInput block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Account Number</label>
                                                                                 <input type="number" name="name" id="name" class="account_number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Account Number" required="">
                                                                        </div>
                                                                        <div class="col-span-2">
                                                                                 <label for="name" class="transferInput block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Account Name</label>
                                                                                 <input type="text" name="name" id="name" class="account_name bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Account Name" required="">
                                                                        </div>
                                                                        <div class="col-span-2 ">
                                                                                 <label for="price" class="transferInput block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Amount</label>
                                                                                 <input type="number" name="price" id="price" class="amounts bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Amount" required>
                                                                        </div>


                                                               </div>
                                                               <button id="proceed" type=" button" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                                                                        Transfer
                                                               </button>
                                                               <!-- <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal">

                                                                        Transfer
                                                               </button> -->
                                                      </div>

                                             </div>
                                             <div class="relative  rounded-lg shadow dark:bg-gray-700 otp">



                                                      <!-- Main modal -->
                                                      <div id="authentication-modal" class=" z-50 justify-center items-center mt-6">
                                                               <div class="relative p-4 w-full max-w-md">
                                                                        <!-- Modal content -->
                                                                        <div class="relative bg-white rounded-lg  dark:bg-gray-700">
                                                                                 <!-- Modal header -->
                                                                                 <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                                                          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                                                                   Input OTP
                                                                                          </h3>

                                                                                 </div>
                                                                                 <!-- Modal body -->
                                                                                 <div class="p-4 md:p-5">
                                                                                          <form class="space-y-4" action="#">
                                                                                                   <div>
                                                                                                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter OTP</label>
                                                                                                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                                                                                                   </div>


                                                                                                   <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send OTP</button>

                                                                                          </form>
                                                                                 </div>
                                                                        </div>
                                                               </div>
                                                      </div>
                                             </div>
                                    </div>







                           </div>
                  </div>




                  <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
                  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                  <script>
                           let domain = "<?php echo $domain ?>";
                  </script>
                  <script src="../../assets/js/localstore.js"></script>
                  <script>
                           function value(data) {

                                    console.log(data[0].email);

                                    let proceed = document.getElementById('proceed')

                                    proceed.onclick = (event) => {
                                             event.preventDefault();
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
                                                                        console.log(respone);
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
                           }
                  </script>
                  </script>
</body>

</html>