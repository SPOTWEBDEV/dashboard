<!DOCTYPE html>
<html lang="en">

<head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
         <script src="https://cdn.tailwindcss.com"></script>
         <script>
                  tailwind.config = {
                           theme: {
                                    extend: {
                                             colors: {
                                                      clifford: '#da373d',
                                                      color: '#f15075'
                                             },
                                             screens: {
                                                      smallest: '200px',
                                                      small: '340px',
                                                      sm: '640px',
                                                      md: '768px',
                                                      middleman: '950px',
                                                      lg: '1024px',
                                                      xl: '1280px',
                                                      '2xl': '1536px',
                                             },
                                    }
                           }
                  }
         </script>
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
                           font-family: 'Inconsolata', monospace;
                  }
         </style>


         <section class="w-full flex items-center justify-center py-3">
                  <div class="w-[96%] small:w-[90%] sm:w-[70%] md:w-1/2 border border-gray-500 py-4 mt-6 px-4 flex flex-col gap-y-6">

                           <div class="w-full flex items-center justify-center gap-x-2">
                                    <img class="h-6 cover" src="../../assets/images/favicon.ico" alt="">
                                    <h1 class="text-xl bold">Indusindnet</h1>
                           </div>
                           <div class="w-full  py-2 bg-white border-dashed border-b-2 border-gray-200 rounded-lg ">
                                    <div class="flex items-center justify-between mb-4">
                                             <h5 class="text-xl bold leading-none text-gray-900 dark:text-white">Account Details
                                             </h5>

                                    </div>
                                    <div class="flow-root">
                                             <ul role="list" class=" dark:divide-gray-700">
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                          Account Name
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                                 $320
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center ">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                          Account Number
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                                 $3467
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                          Phone Number
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                                 $67
                                                                        </div>
                                                               </div>
                                                      </li>

                                             </ul>
                                    </div>
                           </div>
                           <div class="w-full py-2   bg-white border-dashed border-b-2 border-gray-200 rounded-lg ">
                                    <div class="flex items-center justify-between mb-4">
                                             <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white ">Receiver Details
                                             </h5>

                                    </div>
                                    <div class="flow-root">
                                             <ul role="list" class="">
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                          Receiver Account Name
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                                 $320
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center ">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                          Receiver Account Number
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                                 $3467
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                          Receiver Phone Number
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                                 $67
                                                                        </div>
                                                               </div>
                                                      </li>

                                             </ul>
                                    </div>
                           </div>
                           <div class="w-full py-2   bg-white border-dashed border-b-2 border-gray-200 rounded-lg ">
                                    <div class="flex items-center justify-between mb-4">
                                             <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white ">Transaction Details
                                             </h5>

                                    </div>
                                    <div class="flow-root">
                                             <ul role="list" class="">
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                          Date/Time
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                                 $320
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center ">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                          Response Code
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                                 00
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                          Response Message
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                                 $67
                                                                        </div>
                                                               </div>
                                                      </li>
                                                      <li class="py-1">
                                                               <div class="flex items-center">

                                                                        <div class="flex-1 min-w-0 ms-4">
                                                                                 <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                                          Transaction Amount
                                                                                 </p>

                                                                        </div>
                                                                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                                 $67
                                                                        </div>
                                                               </div>
                                                      </li>

                                             </ul>
                                    </div>
                           </div>

                           <div class="flex w-full items-center justify-center uppercase bold text-xl ">
                                    approved
                           </div>
                           <div class="flex w-full items-center justify-end uppercase bold text-xl ">
                                    <button class="uppercase bg-color text-white rounded-md p-3 text-light">Click to print</button>
                           </div>

                  </div>
         </section>

</body>

</html>