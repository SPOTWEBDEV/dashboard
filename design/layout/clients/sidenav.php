<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />

<nav class=" fixed left-0 hidden  md:flex flex-col h-screen gap-y-5 z-50 bg-white">
    <div class="profile flex justify-center gap-x-3 w-full py-4">
        <img class=" h-12 w-12 rounded-full" src="<?php echo $image  ?>" alt="">
        <div class="w-[50%]  break-words ">
            <h1><?php echo $fullname ?></h1>
            <p class="text-sm w-[50%]break-words "><?php echo $email ?></p>
        </div>
    </div>
    <hr class="px-6">
    <div class="px-4">
        <p>Account</p>
        <a href="<?php echo $domain ?>user/dashboard/" class="w-full flex items-center gap-x-2 text-lg mt-2">
            <i class="bi bi-house-door"></i>
            <p class="">Home</p>
        </a>
        <div class="w-full flex items-center gap-x-2 text-lg mt-2">
            <i class="bi bi-clock-history"></i>
            <p class="">Account History</p>
        </div>
    </div>
    <div class="px-4 text-bold">
        <p>Fund Transfer</p>
        <a href="<?php echo $domain ?>user/transfer/" class="w-full flex items-center gap-x-2 text-lg mt-2">
            <i class="bi bi-house-door"></i>
            <p class="text-bold">International Transfer</p>
        </a>
        <div class="w-full flex items-center gap-x-2 text-lg mt-2">
            <i class="bi bi-house-door"></i>
            <p class="">Transfer History</p>
        </div>
    </div>
    <div class="px-4">
        <p>Loan</p>
        <div class="w-full flex items-center gap-x-2 text-lg mt-2">
            <i class="bi bi-house-door"></i>
            <p class="">Loan</p>
        </div>
        <div class="w-full flex items-center gap-x-2 text-lg mt-2">
            <i class="bi bi-house-door"></i>
            <p class="">Deposit</p>
        </div>
    </div>
</nav>

<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>


<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> -->