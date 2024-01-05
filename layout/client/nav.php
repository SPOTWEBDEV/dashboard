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
        #indusind_welcome{
            display: none;
        }
        
    }
</style>
<nav id="logo-sidebar2" class="fixed top-0 z-50 h-100px w-full bg-red border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
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
                    <a href="#" class="flex ms-2 md:me-24">

                        <span class="self-center text-3xl  sm:text-3xl whitespace-nowrap white:text-white" id="indusind_login">Last Login: <?php displayLastLoginDate(); ?> </span>
                    </a>

                    <a href="#" class="flex ms-2 md:me-24">

                        <span class="self-center text-3xl  sm:text-3xl whitespace-nowrap white:text-white" id="indusind_welcome">welcome || <span class="username"><?= $fullname  ?></span></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>