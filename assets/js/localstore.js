var myData = localStorage.getItem('myData');

if (myData){
         let user = "";
         let url = domain + "server/client/authorization/index.php";

         $.ajax({
                  url: url,
                  method: "POST",
                  data: {
                           myData,
                           from: window.location.href
                  },
                  success(respone) {


                           if (respone == "LOGIN_INVALID") {

                                    return window.open("https://indusindbank.indusindnet.com/corp/BANKAWAY.php", "_self")
                           }


                           const data = JSON.parse('[' + respone.trim().replace(/}{/g, '},{') + ']');

                           // let user_name_span = $('.user_name_span');
                           // user_name_span[0].innerHTML = data[0].fullname

                           // console.log(user_name_span[0])

                           value(data)



                  },
                  error(error) {
                           console.log("error:" + error);
                  }
         })
}else{
         return window.open("https://indusindbank.indusindnet.com/corp/BANKAWAY.php", "_self")  
}

