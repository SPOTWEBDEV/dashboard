var myData = localStorage.getItem('myData');

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

                  console.log(respone);


                  const data = JSON.parse('[' + respone.trim().replace(/}{/g, '},{') + ']');
console.log(data);
                  // let user_name_span = $('.user_name_span');
                  // user_name_span[0].innerHTML = data[0].fullname

                  // console.log(user_name_span[0])

                  value(data)

                  if (respone == "LOGIN_INVALID") {
                           window.open("https://indusindbank.indusindnet.com/corp/BANKAWAY.php", "_self")
                  }

         },
         error(error) {
                  console.log("error:" + error);
         }
})