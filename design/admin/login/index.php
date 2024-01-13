<?php


if (isset($_POST['admin_login'])) {

         $admin_email = $_POST['admin_email'];
         $admin_password = $_POST['admin_password'];

         $statement = "SELECT * FROM `admin` WHERE `email`='$admin_email' AND `password`='$admin_password'";

         $query = mysqli_query($connection, $statement);

         if ($query) {
                  if (mysqli_num_rows($query) > 0) {
                           $row = mysqli_fetch_assoc($query);
                           $id = $row['is'];
                           $_SESSION['id'] = $id;
                           header("location: ../dashboard/");
                  } else {
                           echo '<script>
         window.onload = () => {
                  Swal.fire({
                           title: "ERROR",
                           text: "Invalid email and password",
                           icon: "error"
                  });
         }
</script>';
                  }
         } else {
                  echo '<script>
         window.onload = () => {
                  Swal.fire({
                           title: "ERROR",
                           text: "Unexpexted error occured",
                           icon: "error"
                  });
         }
</script>';
         }
}



?>