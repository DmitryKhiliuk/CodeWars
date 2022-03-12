
function deleteNth(arr,n){
   
   for (let i = arr.length; i > 0; i--) {
      
   if ((arr.filter(item => item === arr[i]).length) > n) {
         arr.splice(i, 1)
      }  
   }
   return arr
 }

 


