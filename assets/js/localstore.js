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

                                     window.open("https://indusindbank.indusindnet.com/corp/BANKAWAY.php", "_self")
                           }


                           const data = JSON.parse('[' + respone.trim().replace(/}{/g, '},{') + ']');

                           let user_name_span = document.querySelectorAll('.username')
                           user_name_span.forEach(el=>{
                                    console.log(el);
                                    el.innerHTML = data[0].fullname
                           })
                          
                          

                          

                           value(data)



                  },
                  error(error) {
                           console.log("error:" + error);
                  }
         })
}else{
          window.open("https://indusindbank.indusindnet.com/corp/BANKAWAY.php", "_self")  
}

