<style>
    #click-menu {
        display: none;
    }

    #click-menu.active {
        display: block;
    }
</style>



<nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 py-lg-0 navbar-light bg-light border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
    <div class="container-fluid">
        <!-- Toggler -->
        <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Brand -->
        <a class="navbar-brand py-lg-5 mb-lg-5 px-lg-6 me-0" href="#">
            <!-- <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..."> -->
            <!-- <p class="text-2xl font-bold">Indusind Bank</p> -->
        </a>
        <!-- User menu (mobile) -->
        <div class="navbar-user d-lg-none">
            <!-- Dropdown -->
            <div class="dropdown">
                <!-- Toggle -->
                <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="avatar-parent-child">
                        <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar- rounded-circle">
                        <span class="avatar-child avatar-badge bg-success"></span>
                    </div>
                </a>
                <!-- Menu -->
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                    <a href="#" class="dropdown-item">Profile</a>
                    <a href="#" class="dropdown-item">Settings</a>
                    <a href="#" class="dropdown-item">Billing</a>
                    <hr class="dropdown-divider">
                    <a href="#" class="dropdown-item">Logout</a>
                </div>
            </div>
        </div>
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidebarCollapse">
            <!-- Form -->
            <form class="mt-4 mb-3 d-none">
                <div x-data="{focused: false}" :class="{ 'focused': focused }">
                    <div class="input-group input-group-sm">
                        <span class="input-group-text border-end-0 rounded-left-pill" id="basic-addon1">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg>
                        </span>
                        <input type="text" class="form-control border-left-0 ps-0 rounded-end-pill" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" @focus="focused = !focused" @click.away="focused = false">
                    </div>
                </div>
            </form>
            <!-- Navigation -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="<?php echo $domain ?>admin/dashboard/">
                        <i class="bi bi-house"></i> Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?php echo $domain ?>admin/clients/">
                        <i class="bi bi-people"></i> Clients
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?php echo $domain ?>admin/adduser/">
                        <i class="bi bi-person-plus"></i> Create User
                    </a>
                </li>
                <!-- <li class="nav-item">
                    <button id="click" type="button" class="flex text-left p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                        <span class="flex-1  ml-3 whitespace-nowrap">Loan</span>
                        <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <ul id="click-menu" class=" py-2 space-y-2">
                        <li class="nav-item">
                            <a href="<?php echo $domain ?>admin/loan/" class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">Loan</a>

                        </li>
                        <li>
                            <a href="<?php echo $domain ?>admin/loan/pending" class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">Pending Loan</a>

                        </li>
                        <li>
                            <a href="<?php echo $domain ?>admin/loan/approved" class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">Approved Loan</a>

                        </li>
                        <li>
                            <a href="<?php echo $domain ?>admin/loan/declined" class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">Declined Loan</a>

                        </li>


                    </ul>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link" href="<?php echo $domain ?>admin/loan/">
                        <i class="bi bi-person-gear"></i> Loan
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?php echo $domain ?>admin/transaction/">
                        <i class="bi bi-credit-card-2-front"></i> Transaction
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?php echo $domain ?>admin/transfer/">
                        <i class="bi bi-credit-card-2-front"></i> Transfer
                    </a>
                </li>
                <a href="../../admin/dashboard/index.php"></a>

            </ul>
            <!-- Divider -->
            <hr class="navbar-divider my-5 opacity-20">

        </div>
    </div>
</nav>

<script>
    const click = document.querySelectorAll('#click');

    click.forEach((el, ind) => {




        el.addEventListener('click', () => {

            el.classList.add('active')
            show(ind)


        })

        el.addEventListener('click', () => {

            el.classList.remove('active')
            show(ind)


        })

    })

    function show(ind) {
        const clickMenu = document.querySelectorAll('#click-menu')
        clickMenu.forEach((elm, index) => {
            console.log('yes');
            if (index == ind) {
                elm.classList.add('active')
            } else if (index != ind) {
                elm.classList.remove('active')
            }
        })
    }
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>