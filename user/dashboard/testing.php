<?php

include('../../server/database.php');
include('../../server/client/authorization/index.php');
include('../../server/config.php');


$pending = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transaction` WHERE `user`='$id' AND `status`='0'"));
$approved = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transaction` WHERE `user`='$id' AND `status`='1'"));
$declined = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transaction` WHERE `user`='$id' AND `status`='2'"));
$credited = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transaction` WHERE `user`='$id' AND `status`='3'"));










?>



<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>

   <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
   <link rel="stylesheet" href="../../assets/css/components/card.css">
</head>
<style>
   .bank_name_icon_box {
      display: flex;
      align-items: flex-end;
      width: 100%;
      margin: 0;
      padding: 0;
   }

   .bank_name_icon {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 5px;
      width: 100%;
      margin: 0;
      padding: 0;
   }

   .bank_name_icon_img {
      width: 18px;
      height: 18px;
      margin: 0;
      padding: 0;
      /* width: 100%; */
   }
   .bank_name_icon_p{
      margin: 0;
      padding: 0;
      color: white;
   }
</style>

<body>



<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
   <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
         <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
               <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
               </button>
               <a href="#" class="flex ms-2 md:me-24">
                  <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" /> -->
                  <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Indusind Bank</span>
               </a>
            </div>
            <div class="flex items-center">
               <div class="flex items-center ms-3">
                  <div>
                     <button type="button" class="flex text-sm  rounded-full focus:ring-4 focus:ring-gray-300 " aria-expanded="false" data-dropdown-toggle="dropdown-user">
                     <i class="bi bi-gear text-3xl"></i>
                     </button>
                  </div>
                  <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                     <div class="px-4 py-3" role="none">
                        <p class="text-sm text-gray-900 dark:text-white" role="none">
                           <?= $fullname ?>
                        </p>
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        <?= $email ?>
                        </p>
                     </div>
                     <ul class="py-1" role="none">
                        <li>
                           <a href="<?php  echo $domain ?>user/dashboard/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                        </li>
                        <li>
                           <a href="<?php  echo $domain ?>user/profile/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Profile</a>
                        </li>
                        
                        <li>
                           <a href="<?php  echo $domain ?>user/logout/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                        </li>
                        <li>
                           <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem"><?php include('../../server/client/translate/index.php') ?></a>
                        </li>
                        
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </nav>






   <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
         <ul class="space-y-2 font-medium">
            <li>
               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <img width="27" height="27" src="https://img.icons8.com/ios-filled/50/health-data.png" alt="health-data" />
                  <span class="flex-1 ms-3 whitespace-nowrap text-xl">Dashboard</span>
               </a>
            </li>
            <li>
               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <img width="27" height="27" src="https://img.icons8.com/ios-filled/50/user.png" alt="user" />
                  <span class="flex-1 ms-3 whitespace-nowrap text-xl">Profile</span>
               </a>
            </li>
            <li>
               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <img width="27" height="27" src="https://img.icons8.com/ios-filled/50/settings.png" alt="settings" />
                  <span class="flex-1 ms-3 whitespace-nowrap text-xl">Change password</span>
               </a>
            </li>
            <li>
               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <img width="27" height="27" src="https://img.icons8.com/ios-filled/50/phonelink-lock.png" alt="phonelink-lock" />
                  <span class="fflex-1 ms-3 whitespace-nowrap text-xl">Register verify app</span>
               </a>
            </li>
            <li>
               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <img width="27" height="27" src="https://img.icons8.com/ios-filled/50/phonelink-erase.png" alt="phonelink-erase" />
                  <span class="flex-1 ms-3 whitespace-nowrap text-xl">Reset verify app</span>
               </a>
            </li>
            <li>
               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <img width="27" height="27" src="https://img.icons8.com/android/24/alarm-clock.png" alt="alarm-clock" />
                  <span class="flex-1 ms-3 whitespace-nowrap text-xl">OTP Preference</span>
               </a>
            </li>
            <li>
               <a href="<?php echo $domain ?>user/transfer" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <img width="27" height="27" src="https://img.icons8.com/android/24/money.png" alt="money" />
                  <span class="flex-1 ms-3 whitespace-nowrap text-xl">Transfer</span>
               </a>
            </li>
            <li>
               <a href="<?php echo $domain ?>user/logout/" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group" id="links_stuff">
                  <img width="27" height="27" src="https://img.icons8.com/material-outlined/24/exit.png" alt="exit" />
                  <span class="flex-1 ms-3 whitespace-nowrap text-xl">Logout</span>
               </a>
            </li>
         </ul>
      </div>
   </aside>

   <div class="sm:p-4 sm:ml-64">
      <div class="sm:p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
         <div class="hidden md:grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center h-fit rounded bg-gray-50 dark:bg-gray-800">
               <div class="card">
                  <div class="card__front card__part">
                     <div class="bank_name_icon_box">
                        <div class="bank_name_icon">
                           <img class="bank_name_icon_img" src="../../assets/img/favicon.ico">
                           <p class="bank_name_icon_p">Indusind Bank</p>
                        </div>
                     </div>
                     <img class="card__front-square card__square">
                     <img class="card__front-logo card__logo">
                     <p class="card_numer">**** **** **** <?php echo substr($card_number, -4)  ?></p>
                     <div class="card__space-75">
                        <span class="card__label">Card holder</span>
                        <p class="card__info"><?= $fullname ?></p>
                     </div>
                     <div class="card__space-25">
                        <span class="card__label">Expires</span>
                        <p class="card__info"><?= $card_date  ?></p>
                     </div>
                  </div>

                  <div class="card__back card__part">
                     <div class="card__black-line"></div>
                     <div class="card__back-content">
                        <div class="card__secret">
                           <p class="card__secret--last">420</p>
                        </div>
                        <img class="card__back-square card__square">
                        <img class="card__back-logo card__logo">

                     </div>
                  </div>

               </div>
            </div>
            <div class="flex items-center justify-center h-fit rounded bg-gray-50 dark:bg-gray-800">
               <div class="rounded-lg dark:border-gray-600 h-fit flex w-full  md:w-[70%] lg:w-[50%]">
                  <div class="card w-full">
                     <div class="card__front card__part">
                        <img class="card__front-square card__square">
                        <img class="card__front-logo card__logo">


                        <p class="text-center text-white mb-4 text-2xl">$<?php if ($balance == "") {
                                                                              echo "0.00";
                                                                           } else {
                                                                              echo number_format($balance, 2, '.', ',');
                                                                           }
                                                                           ?></p>

                        <span class="text-white mt-4 text-center">Account Number <?php echo $account_number ?></span>


                        <div class="card__space-75 mt-5">
                           <span class="card__label">Account Name</span>
                           <p class="card__info"><?= $fullname ?></p>
                        </div>
                        <div class="card__space-25 mt-5">
                           <span class="card__label">Status</span>
                           <p class="card__info">
                              <?php if ($count >= 3) { ?>
                                 <button class="text-sm">Account Frozen</button>
                              <?php } else { ?>
                                 <button class="text-sm">Account Active</button>
                              <?php }  ?>

                           </p>
                        </div>
                     </div>


                  </div>




               </div>
            </div>
            <!-- <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
               <p class="text-2xl text-gray-400 dark:text-gray-500">
                  <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                  </svg>
               </p>
            </div> -->
         </div>
         <div class="flex items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 w-full">
         <div class="flex items-center justify-center h-fit rounded bg-gray-50 dark:bg-gray-800 w-full">
               <div class="rounded-lg dark:border-gray-600 h-fit flex w-full  md:w-[70%] lg:w-[50%]">
                  <div class="card w-full">
                     <div class="card__front card__part">
                        <img class="card__front-square card__square">
                        <img class="card__front-logo card__logo">


                        <p class="text-center text-white mb-4 text-2xl">$<?php if ($balance == "") {
                                                                              echo "0.00";
                                                                           } else {
                                                                              echo number_format($balance, 2, '.', ',');
                                                                           }
                                                                           ?></p>

                        <span class="text-white mt-4 text-center">Account Number <?php echo $account_number ?></span>


                        <div class="card__space-75 mt-5">
                           <span class="card__label">Account Name</span>
                           <p class="card__info"><?= $fullname ?></p>
                        </div>
                        <div class="card__space-25 mt-5">
                           <span class="card__label">Status</span>
                           <p class="card__info">
                              <?php if ($count >= 3) { ?>
                                 <button class="text-sm">Account Frozen</button>
                              <?php } else { ?>
                                 <button class="text-sm">Account Active</button>
                              <?php }  ?>

                           </p>
                        </div>
                     </div>


                  </div>




               </div>
            </div>
         </div>
         <div class="flex items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800 w-full">
               <section class="flex flex-col justify-center antialiased bg-gray-100 text-gray-600  w-full">
                  <div class="w-full">
                     <!-- Table -->
                     <div class="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                           <h2 class="font-semibold text-gray-800">Transcations</h2>
                        </header>
                        <div class="p-3">
                           <div class="overflow-x-auto">
                              <table class="table-auto w-full">
                                 <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                       <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-left">Date</div>
                                       </th>
                                       <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-left">Transaction Type</div>
                                       </th>
                                       <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-left">Amounts</div>
                                       </th>
                                       <th class="p-2 whitespace-nowrap">
                                          <div class="font-semibold text-center">Status</div>
                                       </th>
                                    </tr>
                                 </thead>
                                 <tbody class="text-sm divide-y divide-gray-100">
                                    <?php
                                    $query = mysqli_query($connection, "SELECT * FROM `transaction`");
                                    if (mysqli_num_rows($query)) {
                                       while ($row = mysqli_fetch_assoc($query)) { ?>

                                          <tr class="text-left">
                                             <td class="p-2 whitespace-nowrap">

                                                <time class="timeago" datetime="<?php echo $row['date'] ?>"></time>
                                             </td>
                                             <td class="p-2 whitespace-nowrap"><?php echo $row['type'] ?></td>
                                             <td class="p-2 whitespace-nowrap">
                                                <div class="text-left font-medium text-green-500">$<?php echo $row['amount'] ?></div>

                                             </td>
                                             <td class="p-2 whitespace-nowrap">
                                                <?php

                                                if ($row['status'] == 0) { ?>
                                                   <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Pending</button>
                                                <?php } else if ($row['status'] == 1) { ?>
                                                   <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Approved</button>

                                                <?php } else if ($row['status'] == 2) { ?>
                                                   <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Declined</button>

                                                <?php } else if ($row['status'] == 3) { ?>

                                                   <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
                                                <?php } ?>






                                             </td>
                                          </tr>
                                    <?php }
                                    }
                                    ?>

                                 </tbody>


                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
         </div>
      </div>
   </div>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
</body>

</html>