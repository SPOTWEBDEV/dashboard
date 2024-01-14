<?php

include('../../server/database.php');
include('../../server/config.php');
include('../../server/clients/authorization/index.php');


?>

<!DOCTYPE html>
<html lang="en">

<head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
       <script src="https://cdn.tailwindcss.com"></script>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
       <link rel="stylesheet" href="../../assets/css/main.css">
</head>

<body>
       <style>
              * {
                     margin: 0;
                     padding: 0;
                     box-sizing: border-box;
              }

              section nav {
                     width: 300px;
              }

              section main {
                     width: calc(100% - 300px);
              }

              @media(max-width:700px) {
                     section main {
                            width: 100%;
                     }
              }
       </style>
       <!-- <section class="h-12 w-full bg-yellow-300 py-6">

         </section> -->
       <section class="flex w-full ">
              <?php include('../../layout/clients/sidenav.php')  ?>
              <main class="absolute right-0 ">
                     <header class="w-full flex flex-col gap-y-6 sm:flex-row items-center capitalize justify-between py-12 bg-white px-6 border-b-gray">
                            <h1 class="text-lg sm:text-2xl">financial Overview</h1>

                            <div class="btn flex gap-x-3">
                                   <button class="text-white background border-gray-600 rounded-lg py-2 px-3"> <i class="bi bi-wallet"></i> Add Deposit</button>
                                   <button class="text-white credit-card border-gray-600 rounded-lg py-2 px-3"> <i class="bi bi-send-exclamation text-white"></i> Make Transfer</button>
                            </div>
                     </header>
                     <section class="flex flex-col  lg:flex-row gap-x-6 gap-y-6  px-6 w-full py-2">
                            <div class="w-full lg:w-1/2">
                                   <div class="flex flex-col gap-y-6 sm:flex-row gap-x-4">
                                          <div class="h-fit flex flex-col py-4 w-full sm:w-[200px] ">
                                                 <p class="capitalize tracking-wide">total balance</p>
                                                 <span class="text-3xl tracking-wide"><?php echo number_format($balance, 2, '.', ',')  ?></span>
                                                 <a href="" class="tracking-wide capitalize">view Statement <i class="bi bi-arrow-right-short"></i></a>
                                          </div>
                                          <div class="h-fit flex flex-col text-semibold py-4 w-full sm:w-[200px] ">
                                                 <p class="capitalize tracking-wide">Available balance</p>
                                                 <span class="text-3xl tracking-wide"><?php echo number_format($balance, 2, '.', ',') ?></span>
                                                 <a class="capitalize tracking-wide" href="">Transfer Funds <i class="bi bi-arrow-right-short"></i></a>
                                          </div>
                                   </div>
                                   <div class="credit-card capitalize text-white w-full sm:w-[350px] bg-red-700 rounded py-2">

                                          <div class="flex items-center justify-between px-6">
                                                 <div>
                                                        <img src="" alt="">
                                                        <p></p>
                                                 </div>
                                                 <span class="text-xl text-semibold"><?php echo number_format($balance, 2, '.', ',')  ?></span>
                                          </div>
                                          <div class="w-full mt-3  flex items-center justify-center">
                                                 <p class="bold text-lg"><?php echo $account_number ?></p>
                                          </div>
                                          <div class="mt-5 flex items-center justify-between px-6">
                                                 <div>
                                                        <p>account holder</p>
                                                        <p class="text-bold bold"><?php echo $fullname ?></p>
                                                 </div>
                                                 <div>
                                                        <p>Expires</p>
                                                        <p class="text-bold bold"><?php echo $expiry_date ?></p>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            <aside class="w-full lg:w-1/2">
                                   <div class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                          <div class="flex items-center justify-between mb-4">
                                                 <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Account Details
                                                 </h5>

                                          </div>
                                          <div class="flow-root">
                                                 <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                                        <li class="py-3 sm:py-4">
                                                               <div class="flex items-center">

                                                                      <div class="flex-1 min-w-0 ms-4">
                                                                             <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                    Account Name
                                                                             </p>

                                                                      </div>
                                                                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                             <?php echo $fullname ?>
                                                                      </div>
                                                               </div>
                                                        </li>
                                                        <li class="py-3 sm:py-4">
                                                               <div class="flex items-center ">

                                                                      <div class="flex-1 min-w-0 ms-4">
                                                                             <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                    Account Number
                                                                             </p>

                                                                      </div>
                                                                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                             <?php echo $account_number ?>
                                                                      </div>
                                                               </div>
                                                        </li>
                                                        <li class="py-3 sm:py-4">
                                                               <div class="flex items-center">

                                                                      <div class="flex-1 min-w-0 ms-4">
                                                                             <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                    Account Type
                                                                             </p>

                                                                      </div>
                                                                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                             <?php echo $account_type ?>
                                                                      </div>
                                                               </div>
                                                        </li>
                                                        <li class="py-3 sm:py-4">
                                                               <div class="flex items-center ">

                                                                      <div class="flex-1 min-w-0 ms-4">
                                                                             <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                    Balance
                                                                             </p>

                                                                      </div>
                                                                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                             <?php echo number_format($balance, 2, '.', ',')  ?>
                                                                      </div>
                                                               </div>
                                                        </li>
                                                        <li class="pt-3 pb-0 sm:pt-4">
                                                               <div class="flex items-center ">

                                                                      <div class="flex-1 min-w-0 ms-4">
                                                                             <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                    Swift code
                                                                             </p>

                                                                      </div>
                                                                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                             <?php echo $swift_code ?>
                                                                      </div>
                                                               </div>
                                                        </li>
                                                 </ul>
                                          </div>
                                   </div>

                            </aside>
                     </section>
                     <section class="w-full px-6 flex flex-col gap-y-4 py-4 mt-2">
                            <p>Transaction table</p>
                            <div class="relative overflow-x-auto ">
                                   <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                                          <div>
                                                 <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                        <span class="sr-only">Action button</span>
                                                        Action
                                                        <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                                        </svg>
                                                 </button>
                                                 <!-- Dropdown menu -->
                                                 <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                                               <li>
                                                                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                                               </li>
                                                               <li>
                                                                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                                                               </li>
                                                               <li>
                                                                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate
                                                                             account</a>
                                                               </li>
                                                        </ul>
                                                        <div class="py-1">
                                                               <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete
                                                                      User</a>
                                                        </div>
                                                 </div>
                                          </div>
                                          <label for="table-search" class="sr-only">Search</label>
                                          <div class="relative">
                                                 <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                        </svg>
                                                 </div>
                                                 <input type="text" id="simple-search" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users">
                                          </div>
                                   </div>
                                   <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                                 <tr class="uppercase">
                                                        <th scope="col" class="p-4">
                                                               Transaction ID
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                               Beneficiary
                                                        </th>
                                                        
                                                        <th scope="col" class="px-6 py-3">
                                                               amount
                                                        </th>

                                                        <th scope="col" class="px-6 py-3">
                                                               Status
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                               Date
                                                        </th>
                                                 </tr>
                                          </thead>
                                          <tbody>
                                                 <!-- <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        <td class="w-4 p-4">
                                                               <div class="flex items-center">
                                                                      <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                                      <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                                               </div>
                                                        </td>
                                                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                               <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image">
                                                               <div class="ps-3">
                                                                      <div class="text-base font-semibold">Neil Sims</div>
                                                                      <div class="font-normal text-gray-500">neil.sims@flowbite.com
                                                                      </div>
                                                               </div>
                                                        </th>
                                                        <td class="px-6 py-4">
                                                               React Developer
                                                        </td>
                                                        <td class="px-6 py-4">
                                                               <div class="flex items-center">
                                                                      <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                                                      Online
                                                               </div>
                                                        </td>
                                                        <td class="px-6 py-4">
                                                               <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                                                                      user</a>
                                                        </td>
                                                 </tr> -->

                                          </tbody>
                                   </table>
                            </div>

                     </section>
              </main>
       </section>
       <script>
              $(() => {

                     $.ajax({
                            url: "<?= $domain ?>design/server/clients/apis/getTransaction.php",
                            method: "GET",
                            data: {
                                   from: window.location.href
                            },
                            success(respone) {


                                   const data = JSON.parse('[' + respone.trim().replace(/}{/g, '},{') + ']');

                                   console.log(data);

                                   loadTable(data)

                                   // document.querySelector("#simple-search").addEventListener('keyup', (event) => {
                                   //        const newdata = data.filter(str => str.fullname.includes(event.target.value) || str.email.includes(event.target.value) || str.phone.includes(event.target.value));



                                   //        loadTable(newdata)
                                   // })
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

                                   // let transfer_message = '';
                                   // if (data[i].transfer_status == 1) {
                                   //        transfer_status = 'Active'
                                   //        transfer_status_color = 'bg-green-400'
                                   //        transfer_message = "Are you sure you want to activate a successful transfer for this user?"
                                   // } else {
                                   //        transfer_status = 'Not-Active'
                                   //        transfer_status_color = 'bg-red-400'
                                   //        transfer_message = "Are you sure you want to deactivate successful transfers for this user?"
                                   // }


                                   const html = ` <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td class="w-4 p-4">
                                                               ${data[i].transaction_unique_code}
                                                        </td>
                                                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                               
                                                               <div class="ps-3">
                                                                      <div class="text-base font-semibold">${data[i].account_name}</div>
                                                                      <div class="font-normal text-gray-500">${data[i].account_number}
                                                                      </div>
                                                               </div>
                                                        </th>
                                                        <td class="px-6 py-4">
                                                               ${data[i].amount}
                                                        </td>
                                                        <td class="px-6 py-4">
                                                               <div class="flex items-center">
                                                                      <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                                                      Online
                                                               </div>
                                                        </td>
                                                        <td class="px-6 py-4">
                                                               <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">${data[i].date}
                                                                      </a>
                                                        </td>
                                                        
                                            </tr>`;
                                   document.querySelector('tbody').insertAdjacentHTML("beforeend", html)
                            }
                     }
              }
       </script>
</body>

</html>