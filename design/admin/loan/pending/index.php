<?php

include('../../server/database.php');
include('../../server/admin/config/index.php');

// session_start();

if (isset($_SESSION['new_login_id'])) {

    $id = $_SESSION['new_login_id'];

    $select = mysqli_query($connection, "SELECT * FROM `admin` WHERE `id`='$id'");

    if ($select) {
        if (mysqli_num_rows($select)) {
            $row = mysqli_fetch_assoc($select);
            $name = $row['name'];
            $email = $row['email'];
            $password = $row['password'];
        }
    }
}


$clients = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `clients`"));
$pending_transfer = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transfer` WHERE `status`=0"));
$accepted_transfer = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transfer` WHERE `status`=1"));
$declined_transfer = mysqli_num_rows(mysqli_query($connection, "SELECT * FROM `transfer` WHERE `status`!=1 AND `status`!=0"));



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
        <?php include('../../layout/admin/sidenav.php') ?>
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
                    <!-- Card stats -->
                    <div class="card mb-7">
                        <div class="card-header">
                            <h5 class="mb-0">Applications</h5>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover table-nowrap">
                                <thead class="table-light">
                                    <tr>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Payback</th>
                                        <th scope="col">Reason</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    $fetch = "SELECT * FROM `loan` WHERE `id`='$id'";

                                    $query = mysqli_query($connection, $fetch);


                                    if (mysqli_num_rows($query)) {
                                        while ($row = mysqli_fetch_assoc($query)) { ?>
                                            <tr>
                                                <td><?php echo $row['amount'] ?></td>
                                                <td><?php echo $row['payback'] ?></td>
                                                <td><?php echo $row['reason'] ?></td>
                                                <td><?php echo $row['date'] ?></td>
                                                <td>
                                                    <?php
                                                    if ($row['status'] == 0) { ?>
                                                        <button style="background: yellow; padding: 9px 28px;font-size:20px;">Pending</button>

                                                    <?php  } else if ($row['status'] == 1) { ?>
                                                        <button style="background: green; padding: 9px 28px;font-size:20px;">Approved</button>

                                                    <?php } else { ?>
                                                        <button style="background: red; padding: 5px 17px;font-size:20px;">Declined</button>
                                                    <?php }
                                                    ?>
                                                </td>
                                            </tr>
                                    <?php   }
                                    }

                                    ?>

                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer border-0 py-5">
                            <span class="text-muted text-sm">Showing 10 items out of 250 results found</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</body>

</html>