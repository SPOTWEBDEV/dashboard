<?php

include('../../server/database.php');
include('../../server/config.php');
include('../../server/clients/authorization/index.php');

if (isset($_GET['recipt'])) {
         $recipt = $_GET['recipt'];
         $select_transfer = mysqli_query($connection, "SELECT transfer.* 
                                              FROM transfer, clients
                                              WHERE transfer.transaction_unique_code = '$recipt' AND clients.id ='$id' AND transfer.user='$id'");

         if (mysqli_num_rows($select_transfer) && $recipt != "") {
                  while ($row = mysqli_fetch_assoc($select_transfer)) {
                           $receiver_account_name = $row['account_name'];
                           $receiver_account_number = $row['account_number'];
                           $receiver_amount = $row['amount'];
                           $date = $row['date'];
                           $status = $row['status'];

                           if ($status == 0) {
                                    $status = "Pending";
                                    $statusmsg = "OTP Not Verifed";
                           } else if ($status == 1) {
                                    $status = "Processing";
                                    $statusmsg = "Transaction Processing";
                           }  else if ($status == 3) {
                                    $status = "Declined";
                                    $statusmsg = "Transaction Declined";
                           } else if ($status == 4) {
                                    $status = "Approved";
                                    $statusmsg = "Transaction Approved";
                           }
                  }
                  $select_user = mysqli_query($connection, "SELECT clients.* 
                                              FROM clients
                                              WHERE  clients.id ='$id'");
                  while ($row = mysqli_fetch_assoc($select_user)) {

                           $send_account_name = $row['fullname'];
                           $send_account_number = $row['account_number'];
                           $send_phone = $row['phone'];
                  }
         } else {
                  header('location: ../../dashboard/');
         }
} else {
         header('location: ../../dashboard/');
}


?>


<!DOCTYPE html>
<html lang="en">

<head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
         <script src="https://cdn.tailwindcss.com"></script>
         <script>
                  tailwind.config = {
                           theme: {
                                    extend: {
                                             colors: {
                                                      clifford: '#da373d',
                                                      color: '#f15075'
                                             },
                                             screens: {
                                                      smallest: '200px',
                                                      small: '340px',
                                                      sm: '640px',
                                                      md: '768px',
                                                      middleman: '950px',
                                                      lg: '1024px',
                                                      xl: '1280px',
                                                      '2xl': '1536px',
                                             },
                                    }
                           }
                  }
         </script>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
         <link rel="stylesheet" href="../../assets/css/main.css">
</head>

<body>
         <style>
                  * {
                           margin: 0;
                           padding: 0;
                           box-sizing: border-box;
                           font-family: 'Inconsolata', monospace;
                  }
         </style>


         <section class="w-full flex items-center justify-center py-3">
                  <div id="recipt" class="w-[96%] small:w-[90%] sm:w-[70%] md:w-1/2 border border-gray-500 py-4 mt-6 px-4 flex flex-col gap-y-6">

                           <div class="w-full flex items-center justify-center gap-x-2">
                                    <img class="h-6 cover" src="../../assets/images/favicon.ico" alt="">
                                    <h1 class="text-xl bold">Indusindnet</h1>
                           </div>
                           <div class="w-full  py-2 bg-white border-dashed border-b-2 border-gray-200 rounded-lg ">
                                    <div class="flex items-center justify-between mb-4">
                                             <h5 class="text-xl bold leading-none text-gray-900 ">Account Details
                                             </h5>

                                    </div>
                                    <div class="flow-root">
                                             <ul role="list" class=" ">
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate ">
                                                                                          Account Name
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                                                 <?php echo $send_account_name  ?>
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center ">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate ">
                                                                                          Account Number
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                                                 <?php echo $send_account_number ?>
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate ">
                                                                                          Phone Number
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                                                 <?php echo $send_phone  ?>
                                                                        </div>
                                                               </div>
                                                      </li>

                                             </ul>
                                    </div>
                           </div>
                           <div class="w-full py-2   bg-white border-dashed border-b-2 border-gray-200 rounded-lg ">
                                    <div class="flex items-center justify-between mb-4">
                                             <h5 class="text-xl font-bold leading-none text-gray-900  ">Receiver Details
                                             </h5>

                                    </div>
                                    <div class="flow-root">
                                             <ul role="list" class="">
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate ">
                                                                                          Receiver Account Name
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                                                 <?php echo $receiver_account_name ?>
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center ">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate ">
                                                                                          Receiver Account Number
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                                                 <?php echo $receiver_account_number ?>
                                                                        </div>
                                                               </div>
                                                      </li>


                                             </ul>
                                    </div>
                           </div>
                           <div class="w-full py-2   bg-white border-dashed border-b-2 border-gray-200 rounded-lg ">
                                    <div class="flex items-center justify-between mb-4">
                                             <h5 class="text-xl font-bold leading-none text-gray-900  ">Transaction Details
                                             </h5>

                                    </div>
                                    <div class="flow-root">
                                             <ul role="list" class="">
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate ">
                                                                                          Date/Time
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                                                 <?php echo $date ?>
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center ">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate ">
                                                                                          Response Code
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                                                 00
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate ">
                                                                                          Response Message
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                                                 <?php echo $statusmsg ?>
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate ">
                                                                                          Transaction Amount
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                                                 $<?php echo number_format($receiver_amount, 2, '.', ',') ?>
                                                                        </div>
                                                               </div>
                                                      </li>

                                             </ul>
                                    </div>
                           </div>

                           <div class="flex w-full items-center justify-center uppercase bold text-xl ">
                                    <?php echo $status ?>
                           </div>
                           <div class="flex w-full items-center justify-end uppercase bold text-xl ">
                                    <button onclick="printDiv()" class="uppercase bg-color text-white rounded-md p-3 text-light">Click to print</button>
                           </div>

                  </div>
         </section>
         <script>
                  function printDiv() {
                           window.print()
                  }
         </script>


</body>

</html>