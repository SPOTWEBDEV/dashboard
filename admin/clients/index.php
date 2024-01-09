<?php
include('../../server/database.php');
include('../../server/config.php');
// include('../../server/admin/authorization/index.php');

if (isset($_POST['transfer_status'])) {
    $input_transfer_status = $_POST['input_transfer_status'];
    $input_id = $_POST['input_id'];

    $updated = "";
    if ($input_transfer_status == 1) {
        $updated = mysqli_query($connection, "UPDATE `clients` SET `transfer_status`='0' WHERE `id`='$input_id'");
    } else {
        $updated = mysqli_query($connection, "UPDATE `clients` SET `transfer_status`='1' WHERE `id`='$input_id'");
    }

    if ($updated) {
        header('location: ./index.php');
    }
}
?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap" rel="stylesheet">
</head>

<body>
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
        <?php include('../../layout/admin/navbar.php')  ?>

        <!-- Sidebar -->

        <?php include('../../layout/admin/sidebar.php')  ?>
        <!-- <a href="../../"></a> -->

        <main class="p-4 md:ml-64  pt-20">

            <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 py-6   mb-4">


                <div class="relative overflow-x-auto">

                    <section class="bg-gray-50 dark:bg-gray-900  p-3 sm:p-5">
                        <div class="mx-auto max-w-screen-xl px-4 lg:px-12 py-6 ">
                            <!-- Start coding here -->
                            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg ">
                                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                    <div class="w-full md:w-1/2">
                                        <form class="flex items-center">
                                            <label for="simple-search" class="sr-only">Search</label>
                                            <div class="relative w-full">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="">
                                            </div>
                                        </form>
                                    </div>
                                    <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                        <button type="button" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                            <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                            </svg>
                                            Add product
                                        </button>

                                    </div>
                                </div>
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-4 py-3">#</th>
                                                <th scope="col" class="px-4 py-3">Name</th>
                                                <th scope="col" class="px-4 py-3">Email</th>
                                                <th scope="col" class="px-4 py-3">Phone Number</th>
                                                <th scope="col" class="px-4 py-3">
                                                    <span class="">Transfer Status</span>
                                                </th>
                                                <th scope="col" class="px-4 py-3">
                                                    <span class="">Add Transactions</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                        </tbody>
                                    </table>
                                </div>
                                <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                        Showing
                                        <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                                        of
                                        <span class="font-semibold text-gray-900 dark:text-white">1000</span>
                                    </span>
                                    <ul id="paginationContainer " class="inline-flex items-stretch -space-x-px">
                                        <li class="prevButton">
                                            <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span class="sr-only">Previous</span>
                                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </li>

                                        <div class="pagination-list flex items-center">

                                        </div>


                                        <li class="nextButton">
                                            <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                <span class="sr-only">Next</span>
                                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div class="flex  absolute z-50 justify-center items-center w-full md:inset-0 ">
                                <div class="relative p-4 w-full max-w-md ">
                                    <!-- Modal content -->
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <!-- Modal header -->
                                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                Add Transcation
                                            </h3>
                                            <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                </svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        <!-- Modal body -->
                                        <div class="p-4 md:p-5">
                                            <form class="space-y-4" method="POST">
                                                <div>
                                                    <label for="user" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User</label>
                                                    <input type="text" name="user" id="user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                                </div>
                                                <div>
                                                    <label for="transcationtype" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transaction Type</label>
                                                    <input type="text" name="transcationtype" id="transcationtype" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                                </div>
                                                <div>
                                                    <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                                                    <input type="text" name="amount" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                                        <input type="text" name="status" id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                                                    </div>

                                                </div>

                                                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Transcation</button>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </div>


        </main>
    </div>





    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
    <script>
        $(() => {

            $.ajax({
                url: "<?= $domain ?>server/admin/apis/getAllUsers.php",
                method: "GET",
                data: {
                    from: window.location.href
                },
                success(respone) {


                    const data = JSON.parse('[' + respone.trim().replace(/}{/g, '},{') + ']');

                    loadTable(data)

                    document.querySelector("#simple-search").addEventListener('keyup', (event) => {
                        const newdata = data.filter(str => str.fullname.includes(event.target.value) || str.email.includes(event.target.value) || str.phone.includes(event.target.value));



                        loadTable(newdata)
                    })
                },
                error(error) {
                    console.log(error);
                }
            })
        })

        function loadTable(data) {
            document.querySelector('tbody').innerHTML = ''
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i]);

                    let transfer_message = '';
                    if (data[i].transfer_status == 1) {
                        transfer_status = 'Active'
                        transfer_status_color = 'bg-green-400'
                        transfer_message = "Are you sure you want to activate a successful transfer for this user?"
                    } else {
                        transfer_status = 'Not-Active'
                        transfer_status_color = 'bg-red-400'
                        transfer_message = "Are you sure you want to deactivate successful transfers for this user?"
                    }


                    const html = ` <tr class="border-b dark:border-gray-700">
                                                <td class="px-4 py-3">${i+1}</td>
                                                <td class="px-4 py-3">${data[i].fullname}</td>
                                                <td class="px-4 py-3">${data[i].email}</td>
                                                <td class="px-4 py-3">${data[i].phone}</td>
                                            
                                                <td class="px-4 py-3">
                                                    <form method="POST">
                                                    <input name="input_transfer_status" type="hidden" value="${data[i].transfer_status}" />
                                                    <input name="input_id" type="hidden" value="${data[i].id}" />
                                                    <button onclick="return confirm('${transfer_message}')" name="transfer_status" type="submit" class="py-2 px-6  text-white rounded-lg ${transfer_status_color}">${transfer_status}</button>
                                                    </form>
                                                </td>
                                                <td>
                                                  <button  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Toggle modal</button>
                                                </td>
                                            </tr>`;
                    document.querySelector('tbody').insertAdjacentHTML("beforeend", html)
                }
            }
        }
    </script>



</body>

</html>