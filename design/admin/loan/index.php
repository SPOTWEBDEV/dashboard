<?php
include('../../server/database.php');
include('../../server/clients/authorization/index.php');
include('../../server/config.php');

$fetch = "SELECT * FROM `loan` WHERE `id`='$id'";

$query = mysqli_query($connection, $fetch);

if($query){
    if(mysqli_num_rows($query)){
        $row = mysqli_fetch_assoc($query);

        $status = $row['status'];
    }
}




?>

<div>
    <?php
        if($status == 0){?>
            <button style="background: yellow; padding: 9px 28px;font-size:20px;">Pending</button>

    <?php }else if($status == 1){?>
            <button style="background: green; padding: 9px 28px;font-size:20px;">Approved</button>

    <?php }else{?>
            <button style="background: red; padding: 9px 28px;font-size:20px;">Declined</button>

    <?php }
    ?>
</div>