<?php
// session_start();

// Function to display the last login date
function displayLastLoginDate()
{
    if (isset($_SESSION['last_login'])) {
        echo "" . $_SESSION['last_login'];
    } else {
        echo "Welcome! It seems to be your first login.";
    }
}

// Function to update the last login date
function updateLastLoginDate()
{
    $_SESSION['last_login'] = date("Y-m-d H:i:s");
}

// Simulating a user login
updateLastLoginDate();
?>




<style>
    #logo-sidebar2 {
        background-color: #832625;
        color: white;
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

    #indusind {
        color: white;
    }

    #indusind_login {
        color: white;
        font-size: 15px;
        /* margin-left: 450px; */
    }

    #indusind_welcome {
        color: white;
        font-size: 15px;
        margin-left: -80px;
    }

    @media screen and (max-width: 767px) {
        #indusind_welcome {
            display: none;
        }

    }

    @media screen and (max-width: 490px) {
        #indusind_login {
            width: 200px;
            white-space: wrap;
            line-height: 20px;
            display: flex;
            align-items: center;
        }
    }

    @media screen and (max-width: 426px) {
        #indusind_login {
            display: none;
        }
    }

    @media screen and (max-width: 256px) {
        #indusind {
            font-size: 20px;
        }

        #indusind_login {
            display: none;
        }
    }
</style>
<!-- <nav id="logo-sidebar2" class="fixed top-0 z-50 h-fit w-full bg-red border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex flex-col sm:flex-row  py-6  items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span class="sr-only">Open sidebar</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                        </path>
                    </svg>
                </button>
                <a href="#" class="flex ms-2 md:me-24">

                    <span class="self-center text-3xl font-semibold sm:text-3xl whitespace-nowrap white:text-white" id="indusind">Indusind Bank</span>
                </a>
            </div>
            <div class="flex items-center">
                <div class="flex items-center ms-3">
                    <a href="#" class="flex items-center space-x-6 rtl:space-x-reverse">

                        <span class="text-sm  text-gray-500 dark:text-white hover:underline text-white"> </span>
                        <span class="text-sm  text-blue-600 dark:text-blue-500 hover:underline text-white">welcome ||  </span>

                        <span style="position:relative">
                       
                            <div  id="google_translate-element">

                            </div>
                        </span>


                    </a>


                </div>
            </div>
        </div>
    </div>
</nav> -->






<nav id="logo-sidebar2" class="bg-white border-gray-200 dark:bg-gray-900 z-50 fixed top-0 w-full ">
    <div class="w-full flex h-full flex-wrap items-center justify-between px-6">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">

            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Indusind Bank</span>
        </a>
        <div class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">

            <style>
                #google_translate-element .skiptranslate {
                    font-size: 0;
                    /* Set font size to 0 to hide the text */
                }

                /* Reset font size for the select element inside the div */
                #google_translate-element select {
                    font-size: initial;
                }
            </style>



            <div id="google_translate-element">

            </div>
            <script>
                setTimeout(() => {
                    let select = document.querySelector('#google_translate-element .skiptranslate div select');
                    if (select) {
                        select.className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'

                    }
                }, 2000);
            </script>


            <button data-collapse-toggle="navbar-language" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:hidden md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="<?php echo $domain ?>user/dashboard/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Dashboard</a>
                </li>
                <li>
                    <a href="<?php echo $domain ?>user/profile/" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</a>
                </li>
                <li>
                    <a href="<?php echo $domain ?>user/setting/update/password/" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Change password</a>
                </li>
                <li>
                    <a href="<?php echo $domain ?>user/transfer" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Transfer</a>
                </li>
                <li>
                    <a href="<?php echo $domain ?>user/logout/" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</nav>