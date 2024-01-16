<?php

include('../../server/database.php');
include('../../server/admin/config/index.php');

if (isset($_POST['submit'])) {
    // $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $country = $_POST['country'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $zip = $_POST['zip'];





    // // Function to generate a random card number
    // function generateCardNumber()
    // {
    //     // Replace this with your actual logic for generating a card number
    //     return sprintf('%04d-%04d-%04d-%04d', rand(1000, 9999), rand(1000, 9999), rand(1000, 9999), rand(1000, 9999));
    // }

    // // Function to generate a random account number
    // function generateAccountNumber()
    // {
    //     // Replace this with your actual logic for generating an account number
    //     return sprintf('%08d-%08d-%08d', rand(1, 99999999), rand(1, 99999999), rand(1, 99999999));
    // }

    // // Function to generate an expiry date based on the world clock
    // function generateExpiryDate()
    // {
    //     $currentDate = new DateTime('now', new DateTimeZone('UTC'));
    //     $expiryDate = $currentDate->add(new DateInterval('P5Y')); // Expires in 5 years

    //     return $expiryDate->format('m/Y'); // Format as MM/YYYY
    // }

    // // Example usage
    // $cardNumber = generateCardNumber();
    // $accountNumber = generateAccountNumber();
    // $expiryDate = generateExpiryDate();

    // echo "Card Number: $cardNumber\n";
    // echo "Account Number: $accountNumber\n";
    // echo "Expiry Date: $expiryDate\n";




    function generateCardData()
    {
        $cardNumber = generateRandomNumber(16);
        $accountNumber = generateRandomNumber(10);
        $expiryDate = generateExpiryDate();

        return [
            'cardNumber' => $cardNumber,
            'accountNumber' => $accountNumber,
            'expiryDate' => $expiryDate,
        ];
    }

    function generateRandomNumber($length)
    {
        $number = '';
        for ($i = 0; $i < $length; $i++) {
            $number .= mt_rand(0, 9);
        }
        return $number;
    }

    function generateExpiryDate()
    {
        $currentYear = date('Y');
        $expiryYear = $currentYear + mt_rand(1, 5); // Generate expiry year between current year and next 5 years
        $expiryMonth = str_pad(mt_rand(1, 12), 2, '0', STR_PAD_LEFT); // Ensure two digits for month
        return "$expiryMonth/$expiryYear";
    }

    // Example usage
    $generatedData = generateCardData();

    echo "Card Number: {$generatedData['cardNumber']}\n";
    echo "Account Number: {$generatedData['accountNumber']}\n";
    echo "Expiry Date: {$generatedData['expiryDate']}\n";



    echo $name;
    
    if (!empty($name) && !empty($email) && !empty($phone) && !empty($country) && !empty($address) && !empty($city) && !empty($zip)) {

        $statement = "INSERT INTO  `clients`(`id`,`firstname`,`email`,`phone`,`country`,`address`,`city`,`zip`) VALUES('','$name', '$email', '$phone', '$country', '$address', '$city', '$zip')";

        $query = mysqli_query($connection,$statement);

        if ($query) {
            echo '<script>alert("inserted")</script>';
        } else {
            echo '<script>alert("not inserted")</script>';
        }
    } else {
        echo '<script>alert("empty")</script>';
    }



    // if (!empty($name) && !empty($email) && !empty($phone) && !empty($country) && !empty($address) && !empty($city) && !empty($zip)) {

    //     // Assuming $connection is your database connection

    //     $statement = $connection->prepare("INSERT INTO `clients`(`id`,`firstname`,`email`,`phone`,`country`,`address`,`city`,`zip`) VALUES('','$name', '$email', '$phone', '$country', '$address', '$city', '$zip')");

    //     // Assuming $id, $name, $email, $phone, $country, $address, $city, $zip are your variables

    //     $statement->bind_param("sssssss", $name, $email, $phone, $country, $address, $city, $zip);

    //     if ($statement->execute()) {
    //         echo '<script>alert("Inserted successfully")</script>';
    //     } else {
    //         echo '<script>alert("Not inserted. Error: ' . $statement->error . '")</script>';
    //     }

    //     $statement->close();
    // } else {
        //     echo '<script>alert("Please fill in all fields")</script>';
        // }
        

        
        
        
        // Assuming $connection is your database connection object
        // and $id is the user ID (you should set these values appropriately before using this script)
        
        // if (!empty($name) && !empty($email) && !empty($phone) && !empty($country) && !empty($address) && !empty($city) && !empty($zip)) {
    //     // Use prepared statements to prevent SQL injection
    //     $statement = "INSERT INTO `clients`(`user_id`, `firstname`, `email`, `phone`, `country`, `address`, `city`, `zip`) VALUES ('$id','$name', '$email', '$phone', '$country', '$address', '$city', '$zip')";

    //     // Prepare the statement
    //     $stmt = mysqli_prepare($connection, $statement);
    
    //     // Bind parameters
    //     mysqli_stmt_bind_param($stmt, "isssssss", $id, $name, $email, $phone, $country, $address, $city, $zip);
    
    //     // Execute the statement
    //     $query = mysqli_stmt_execute($stmt);
    
    //     if ($query) {
        //         echo '<script>alert("Inserted successfully")</script>';
        //     } else {
            //         echo '<script>alert("Error inserting data: ' . mysqli_error($connection) . '")</script>';
            //     }
            
    //     // Close the statement
    //     mysqli_stmt_close($stmt);
    // } else {
    //     echo '<script>alert("One or more fields are empty")</script>';
    // }





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

                                    <a href="#" class="btn d-inline-flex btn-sm btn-primary mx-1">
                                        <span class=" pe-2">
                                            <i class="bi bi-plus"></i>
                                        </span>
                                        <span>Create User</span>
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

                            <!-- Form -->
                            <div class="mb-5">
                                <h5 class="mb-0">Contact Information</h5>
                            </div>
                            <form method="POST" class="mb-6">
                                <div class="row mb-5">
                                    <div class="col-md-6" hidden>
                                        <div class="">
                                            <label class="form-label" for="id">Fullname</label>
                                            <input name="id" type="text" class="form-control" id="id">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="">
                                            <label class="form-label" for="first_name">Fullname</label>
                                            <input name="name" type="text" class="form-control" id="first_name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="">
                                            <label class="form-label" for="email">Email</label>
                                            <input name="email" type="email" class="form-control" id="email">
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-5">
                                    <div class="col-md-6">
                                        <div class="">
                                            <label class="form-label" for="phone_number">Phone number</label>
                                            <input name="phone" type="number" class="form-control" id="phone_number">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="">
                                            <label class="form-label" for="country">Country</label>
                                            <select name="country" class="form-select" id="country" placeholder="Your email" aria-label="Default select example">
                                                <option selected>Country</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="">
                                            <label class="form-label" for="address">Address</label>
                                            <input name="address" type="text" class="form-control" id="address">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="">
                                            <label class="form-label" for="city">City</label>
                                            <input name="city" type="text" class="form-control" id="city">
                                        </div>
                                    </div>

                                    <div class="col-md-2">
                                        <div class="">
                                            <label class="form-label" for="zip">ZIP</label>
                                            <input name="zip" type="tel" class="form-control" id="zip">
                                        </div>
                                    </div>

                                </div>
                                <div class="text-end mt-3">
                                    <button class="btn btn-sm btn-neutral me-2">Cancel</button>
                                    <button name="submit" type="submit" class="btn btn-sm btn-primary">Save</button>
                                </div>
                            </form>
                            <hr class="my-10" />

                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

</body>

</html>