<style>
    #logo-sidebar2 {
        background-color: #832625;
        height: 70px;
    }

    #box_balance {
        margin-top: 40px;
    }

    #links_side {
        margin-top: 15px;
    }

    #links_stuff {
        margin-top: 20px;
    }

    /* #italian{
        font-style: ;
        font-size: 40px;
    } */
    #italian_welcome {
        display: none;
    }

    @media screen and (max-width: 767px) {
        #italian_welcome {
            display: block;
            font-size: 20px;
        }

        #italianwe {
            font-size: 15px;
        }

        #user_red {
            background-color: #832625;
            color: white;
            border-radius: 50px;
        }
    }
</style>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-red border-r border-gray-200 sm:translate-x-0 dark:bg-red-800 dark:border-gray-700" aria-label="Sidebar">
    <div class="h-full px-3  overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
            <li>
                <!-- class="" -->
                <a href="<?php echo $domain ?>user/dashboard/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group" id="links_stuff">
                    <img width="27" height="27" src="https://img.icons8.com/ios-filled/50/health-data.png" alt="health-data" />
                    <span class="flex-1 ms-3 whitespace-nowrap text-xl text-xl" id="italian">Dashboard</span>
                </a>
            </li>
            <li>

                <a href="<?php echo $domain ?>user/profile/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group" id="links_stuff">
                    <img width="27" height="27" src="https://img.icons8.com/ios-filled/50/user.png" alt="user" />
                    <span class="flex-1 ms-3 whitespace-nowrap text-xl">Profile</span>
                </a>
            </li>
            <li>
                <a href="<?php echo $domain ?>user/setting/update/password/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group" id="links_stuff">
                    <img width="27" height="27" src="https://img.icons8.com/ios-filled/50/settings.png" alt="settings" />
                    <span class="flex-1 ms-3 whitespace-nowrap text-xl">Change password</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group" id="links_stuff">
                    <img width="27" height="27" src="https://img.icons8.com/ios-filled/50/phonelink-lock.png" alt="phonelink-lock" />
                    <span class="flex-1 ms-3 whitespace-nowrap text-xl">Register verify app</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group" id="links_stuff">
                    <img width="27" height="27" src="https://img.icons8.com/ios-filled/50/phonelink-erase.png" alt="phonelink-erase" />
                    <span class="flex-1 ms-3 whitespace-nowrap text-xl">Reset verify app</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group" id="links_stuff">
                    <img width="27" height="27" src="https://img.icons8.com/android/24/alarm-clock.png" alt="alarm-clock" />
                    <span class="flex-1 ms-3 whitespace-nowrap text-xl">OTP Preference</span>
                </a>
            </li>
            <li>
                <a href="<?php echo $domain ?>user/transfer" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group" id="links_stuff">
                    <img width="27" height="27" src="https://img.icons8.com/android/24/money.png" alt="money" />
                    <span class="flex-1 ms-3 whitespace-nowrap text-xl">Transfer</span>
                </a>
            </li>
            <li>
                <a href="<?php echo $domain ?>user/logout/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" id="links_stuff">
                    <img width="27" height="27" src="https://img.icons8.com/material-outlined/24/exit.png" alt="exit" />
                    <span class="flex-1 ms-3 whitespace-nowrap text-xl">Logout</span>
                </a>
            </li>
            <?php  

            if($count >= 3){ ?>

               <div id="dropdown-cta" class="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
                <div class="flex items-center mb-3">
                    <span class="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">ACCOUNT BANNED</span>
                    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <p class="mb-3 text-sm text-blue-800 dark:text-blue-400">
                    Account has been Frozen and you can not carry out transfer from this account until you obtain the COT CODE , by getting the Anti-Money Laundering Certificate.
                </p>
                <a class="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">get Anti-Money Laundering Certificate</a>
              </div>
                
            <?php } ?>
            
        </ul>
    </div>
</aside>