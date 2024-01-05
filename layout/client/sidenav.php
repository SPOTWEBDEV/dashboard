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
    #italian_welcome{
        display: none;
    }
    @media screen and (max-width: 639px) {
        #italian_welcome{
            display: block;
            font-size: 20px;
        }
        #italianwe{
            font-size: 15px;
        }
        #user_red{
            background-color: #832625;
            color: white;
            border-radius: 50px;
        }
    }
</style>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-red border-r border-gray-200 sm:translate-x-0 dark:bg-red-800 dark:border-gray-700" aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
            <li id="italian_welcome">
                <!-- class="" -->
                <a href="<?php echo $domain ?>user/dashboard/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group" id="links_stuff">
                    <img id="user_red" width="27" height="27" color="white" src="https://img.icons8.com/ios-filled/50/user.png" alt="user" />
                    <span class="flex-1 ms-3 whitespace-nowrap text-xl text-xl" id="italianwe">Welcome || username</span>
                </a>
            </li>


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
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group" id="links_stuff">
                    <img width="27" height="27" src="https://img.icons8.com/material-outlined/24/exit.png" alt="exit" />
                    <span class="flex-1 ms-3 whitespace-nowrap text-xl">Logout</span>
                </a>
            </li>
        </ul>
    </div>
</aside>