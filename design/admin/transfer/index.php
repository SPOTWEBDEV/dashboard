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
} else {
    // header('location: ../login/');
}


if (isset($_GET['id']) && isset($_GET['user_id']) && isset($_GET['amount'])) {
    $id = $_GET['id'];
    $user_id = $_GET['user_id'];
    $amount = $_GET['amount'];


    $fetch = mysqli_query($connection, "SELECT `balance` FROM `clients` WHERE `id`='$user_id'");
    if (mysqli_num_rows($fetch)) {
        while ($row = mysqli_fetch_assoc($fetch)) {
            $balance = $row['balance'];
        }
        $nebal = $balance - $amount;

        if($nebal < 0){
            echo "<script>alert('AMOUNT_LESS')</script>";
        }else{
            $statement = "UPDATE `transfer` SET `status`=4 WHERE `id`='$approve'";
            $query = mysqli_query($connection, $statement);
        
            if ($query) {
                $updatingBal = mysqli_query($connection, "UPDATE `clients` SET `balance`='$nebal' WHERE `id`='$user_id'");
                header('location: ./index.php');
            } else {
                echo 'could not work';
            }
            
            
        }


        // $sum = $balance + $amount;
        // $credit = mysqli_query($connection, "UPDATE `clients` SET `balance`='$sum' WHERE `id`='$user_id'");
        // if ($credit) {
        //     $query = mysqli_query($connection, "UPDATE `deposite` SET `status`=1 WHERE `id`='$id'");
        //     if ($query) {
        //         header('location: ./pendingDeposite.php');
        //     }
        // }
    }
}




// if (isset($_GET['approve'])) {
//     $approve  = $_GET['approve'];


//     $statement = "UPDATE `transfer` SET `status`=4 WHERE `id`='$approve'";
//     $query = mysqli_query($connection, $statement);

//     if ($query) {
//         header('location: ./index.php');
//     } else {
//         echo 'could not work';
//     }
// }

if (isset($_GET['decline'])) {
    $decline = $_GET['decline'];

    $statement = "UPDATE `transfer` SET `status` = 3 WHERE `id`='$decline'";
    $decline = mysqli_query($connection, $statement);

    if ($decline) {
        header('location: ./index.php');
    } else {
        echo '<script>alert("not available")</script>';
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
                                <a href="<?php echo $domain ?>admin/transfer/" class="nav-link active">Transfer</a>
                            </li>
                            <li class="nav-item ">
                                <a href="<?php echo $domain ?>admin/transfer/pending/" class="nav-link font-regular">Pending Transfer</a>
                            </li>
                            <li class="nav-item">
                                <a href="<?php echo $domain ?>admin/transfer/approved/" class="nav-link font-regular">Approved Transfer</a>
                            </li>
                            <li class="nav-item">
                                <a href="<?php echo $domain ?>admin/transfer/declined/" class="nav-link font-regular">Declined Transfer</a>
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
                        <div class="card-header w-100 d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Transfer</h5>

                            <div class=" mb-3 w-30">
                                <input type="text" class="form-control loan_inputs" id="floatingInput" placeholder="Search">

                            </div>

                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover table-nowrap">
                                <thead class="table-light">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Account Name</th>
                                        <th scope="col">Account Number</th>
                                        <th scope="col">Bank Name</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Action</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>


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


    <script>
        $(() => {
            $.ajax({
                url: '<?php echo $domain ?>' + 'server/admin/apis/getApprovedTransfer.php',
                method: "GET",
                data: {
                    from: window.location.href
                },
                success: function(respone) {
                    const data = JSON.parse('[' + respone.trim().replace(/}{/g, '},{') + ']');
                    loadTable(data)

                    document.querySelector(".loan_inputs").addEventListener('keyup', (event) => {
                        const newdata = data.filter(str => str.account_name.includes(event.target.value) || str.account_number.includes(event.target.value) || str.bank_name.includes(event.target.value) || str.amount.includes(event.target.value));



                        loadTable(newdata)
                    })

                },
                error: function(error) {
                    console.log(error);
                }
            })
        })

        function loadTable(data) {
            document.querySelector('tbody').innerHTML = ''
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {



                    const html = ` <tr class="bg-white border-b  hover:bg-gray-50 ">
                                                        <td class="w-4 p-4">
                                                               ${i + 1}
                                                        </td>
                                                        <td class="px-6 py-4">
                                                               ${data[i].account_name}
                                                        </td>
                                                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                                                               
                                                               <div class="ps-3">
                                                                      
                                                                      <div class="font-normal text-gray-500">${data[i].account_number}
                                                                      </div>
                                                               </div>
                                                        </th>
                                                        <td class="px-6 py-4">
                                                               ${data[i].bank_name}
                                                        </td>

                                                        <td class="px-6 py-4">
                                                               ${data[i].country}
                                                        </td>

                                                        <td class="px-6 py-4">
                                                               $${data[i].amount}
                                                        </td>

                                                <td>

                                                    <a href="./index.php?id=${data[i].id}&user_id=${data[i].user_id}&balance=${data[i].balance}">
                                                        <button class="btn d-inline-flex btn-sm btn-primary mx-1" style="background: green; ">Approve Transfer</button>
                                                    </a>

                                                    <a href="./index.php?decline=${data[i].id}">
                                                        <button class="btn d-inline-flex btn-sm btn-primary mx-1" style="background: red; ">Declined</button>
                                                    </a>
                                                </td>

                                                        
                                            </tr>`;
                    document.querySelector('tbody').insertAdjacentHTML("beforeend", html)
                    jQuery(document).ready(function() {
                        jQuery("time.timeago").timeago();
                    });
                }
            }
        }
    </script>
</body>

</html>