let date = document.querySelector('.date')

         date.value = moment().format();
       k     
// borrowedAmount.addE
let date = document.querySelector('.date')
date.addEventListener('keyup',(event)=>{
         if(event.value == '' && event.value < 0){
                  
              date.setAttribute('disable')    
         }else{
                  date.removeAttribute('disable')
         }
})