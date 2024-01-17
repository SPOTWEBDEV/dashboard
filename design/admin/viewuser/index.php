<?php

include('../../server/database.php');
include('../../server/admin/config/index.php');

if (isset($_POST['submit'])) {
    $id = $_POST['id'];
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $country = $_POST['country'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $zip = $_POST['zip'];


    if ($firstname == "" && $email == "" && $phone == "" && $country == "" && $address == "" && $city == "" && $zip == "") {
        echo 'empty';
    } else {
        $query = mysqli_query($connection, "INSERT INTO `clients`(`user_id`,`firstname`,`email`,`phone`,`country`,`address`,`city`,`zip`) VALUES('$id','$firstname','$email','$phone','$country','$address','$city','$zip')");

        if ($query) {
            echo 'inserted';
        } else {
            echo 'not inserted';
        }
    }
}



?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <!-- Vertical Navbar -->
        <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 py-lg-0 navbar-light bg-light border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
            <div class="container-fluid">
                <!-- Toggler -->
                <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Brand -->
                <a class="navbar-brand py-lg-5 mb-lg-5 px-lg-6 me-0" href="#">
                    <!-- <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..."> -->
                    <p class="text-2xl font-bold">Indusind Bank</p>
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
                            <a class="nav-link" href="#">
                                <i class="bi bi-house"></i> Dashboard
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="bi bi-bar-chart"></i> Analitycs
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="bi bi-chat"></i> Messages
                                <span class="badge bg-opacity-30 bg-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="bi bi-bookmarks"></i> Collections
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="bi bi-people"></i> Users
                            </a>
                        </li>
                    </ul>
                    <!-- Divider -->
                    <hr class="navbar-divider my-5 opacity-20">
                    <!-- Navigation -->
                    <ul class="navbar-nav mb-md-4">
                        <li>
                            <span class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide" href="#">
                                Teams
                            </span>
                        </li>
                        <li class="">
                            <a class="nav-link text-sm font-semibold" href="#">
                                <span class="w-2 h-2 rounded-circle me-3 bg-primary"></span>Marketing
                            </a>
                        </li>
                        <li class="">
                            <a class="nav-link text-sm font-semibold" href="#">
                                <span class="w-2 h-2 rounded-circle me-3 bg-warning"></span>Development
                            </a>
                        </li>
                        <li class="">
                            <a class="nav-link text-sm font-semibold" href="#">
                                <span class="w-2 h-2 rounded-circle me-3 bg-success"></span>Design
                            </a>
                        </li>
                        <li class="">
                            <a class="nav-link text-sm font-semibold" href="#">
                                <span class="w-2 h-2 rounded-circle me-3 bg-tertiary"></span>Social Media
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Main content -->
        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
            <!-- Header -->
            <header class="bg-surface-primary border-bottom pt-6">
                <div class="container-fluid">
                    <div class="mb-npx">
                        <div class="row align-items-center">
                            <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                                <!-- Title -->
                                <h1 class="h2 mb-0 ls-tight">Indusind Bank</h1>
                            </div>
                            <!-- Actions -->
                            <div class="col-sm-6 col-12 text-sm-end">
                                <div class="mx-n1">
                                    <a href="#" class="btn d-inline-flex btn-sm btn-neutral mx-1">
                                        <span class=" pe-2">
                                            <i class="bi bi-pencil"></i>
                                        </span>
                                        <span>Edit</span>
                                    </a>
                                    <a href="#" class="btn d-inline-flex btn-sm btn-primary mx-1">
                                        <span class=" pe-2">
                                            <i class="bi bi-plus"></i>
                                        </span>
                                        <span>Create</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- Nav -->
                        <ul class="nav nav-tabs mt-4 overflow-x border-0">
                            <li class="nav-item ">
                                <a href="#" class="nav-link active">All files</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link font-regular">Shared</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link font-regular">File requests</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <!-- Main -->
            <main class="py-6 bg-surface-secondary">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-7 mx-auto">
                            <!-- Profile picture -->
                            <div class="card shadow border-0 mt-4 mb-10">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <div class="d-flex align-items-center">
                                                <a href="#" class="avatar avatar-lg bg-warning rounded-circle text-white">
                                                    <img alt="..." src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80">
                                                </a>
                                                <div class="ms-4">
                                                    <span class="h4 d-block mb-0">Julianne Moore</span>
                                                    <a href="#" class="text-sm font-semibold text-muted">View Users</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ms-auto">
                                            <button type="button" class="btn btn-sm btn-neutral">Upload</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Form -->
                            <div class="mb-5">
                                <h5 class="mb-0">Contact Information</h5>
                            </div>
                            <hr class="my-10" />
                            <!-- Individual switch cards -->
                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>


</body>

</html>