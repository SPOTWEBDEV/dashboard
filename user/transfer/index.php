<!DOCTYPE html>
<html lang="en">

<head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
         <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
</head>

<body>


         <?php include('../../layout/client/nav.php') ?>
         <?php include('../../layout/client/sidenav.php') ?>



         <div class="p-4 sm:ml-64">
                  <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">





                           <!-- Main modal -->
                           <div id="crud-modal" tabindex="-1" aria-hidden="true" class="flex overflow-y-auto overflow-x-hidden  z-50 justify-center items-center w-full md:inset-0  max-h-full">
                                    <div class="relative p-4 w-full max-w-md max-h-full">
                                             <!-- Modal content -->
                                             <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                      <!-- Modal header -->
                                                      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                               <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                                                        Transfer
                                                               </h3>

                                                      </div>
                                                      <!-- Modal body -->
                                                      <form class="p-4 md:p-5">
                                                               <div class="grid gap-4 mb-4 grid-cols-2">
                                                                        <div class="col-span-2">
                                                                                 <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Number</label>
                                                                                 <input type="number" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                                                                        </div>
                                                                        <div class="col-span-2">
                                                                                 <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Name</label>
                                                                                 <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
                                                                        </div>
                                                                        <div class="col-span-2 ">
                                                                                 <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                                                                                 <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="">
                                                                        </div>
                                                                        
                                                                       
                                                               </div>
                                                               <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                        
                                                                        Transfer
                                                               </button>
                                                      </form>
                                             </div>
                                    </div>
                           </div>


                  </div>
         </div>




         <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
</body>

</html>