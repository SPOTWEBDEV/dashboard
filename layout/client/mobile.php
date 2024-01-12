<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .money {
        width: 100%;
        height: 300px;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /* column-gap: -50px; */
        background: #014760;
    }

    .money_box {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        padding: 0px 20px;
        position: relative;
    }

    .money_p1 {
        font-size: 6vw;
        color: white;
    }

    .money_p2 {
        font-size: 7vw;
        color: white;
        /* margin-top: -100px; */
    }

    .money_p3 {
        color: white;
    }

</style>

<div class="money">
            <div class="money_box">
                
            <p class="money_p1"><?php echo $fullname   . " " . $account_number ?> </p>
                <div>
                
                    <!-- <p class="money_p3" style="text-align: left;">current balance</p> -->
                    <p class="money_p2" style="text-align: center;">
                        $<?php if ($balance == "") {
                                echo "0.00";
                            } else {
                                echo number_format($balance, 2, '.', ',');
                            }
                            ?>
                    </p>
                </div>
              

            </div>
        </div>