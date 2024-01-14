<?php

include('../../server/database.php');
include('../../server/config.php');
include('../../server/clients/authorization/index.php');


?>


<nav class=" fixed left-0 hidden  md:flex flex-col h-screen gap-y-5 z-50 bg-white">
         <div class="profile flex justify-center gap-x-3 w-full py-4">
                  <img class="border-2 border-black h-12 w-12 rounded-full" src="" alt="">
                  <div>
                           <h1><?php echo $fullname ?></h1>
                           <p><?php echo $email ?></p>
                  </div>
         </div>
         <hr class="px-6">
         <div class="px-4">
                  <p>Account</p>
                  <div class="w-full flex items-center gap-x-2 text-lg mt-2">
                           <i class="bi bi-house-door"></i>
                           <p class="">Home</p>
                  </div>
                  <div class="w-full flex items-center gap-x-2 text-lg mt-2">
                           <i class="bi bi-clock-history"></i>
                           <p class="">Account History</p>
                  </div>
         </div>
         <div class="px-4 text-bold">
                  <p>Fund Transfer</p>
                  <div class="w-full flex items-center gap-x-2 text-lg mt-2">
                           <i class="bi bi-house-door"></i>
                           <p class="text-bold">Local Transfer</p>
                  </div>
                  <div class="w-full flex items-center gap-x-2 text-lg mt-2">
                           <i class="bi bi-house-door"></i>
                           <p class="">International History</p>
                  </div>
         </div>
         <div class="px-4">
                  <p>Loan</p>
                  <div class="w-full flex items-center gap-x-2 text-lg mt-2">
                           <i class="bi bi-house-door"></i>
                           <p class="">Loan</p>
                  </div>
                  <div class="w-full flex items-center gap-x-2 text-lg mt-2">
                           <i class="bi bi-house-door"></i>
                           <p class="">Deposit</p>
                  </div>
         </div>
</nav>