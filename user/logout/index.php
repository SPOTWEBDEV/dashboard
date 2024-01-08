<!DOCTYPE html>
<html lang="en">

<head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Logout: IndusInd Bank</title>
</head>

<body>
         <script>
                  function myFunction() {
                           localStorage.removeItem('myData');
                           window.open("https://indusindbank.indusindnet.com/corp/BANKAWAY.php", "_self")
                  }
                  myFunction()
         </script>
</body>

</html>