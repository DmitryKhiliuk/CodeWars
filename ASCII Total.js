
   

 function uniTotal (string) {
   let num = [];
   let sum = 0;
   for (let i = 0; i <= string.length - 1; i++) {
     num.push(string[i].charCodeAt(0));
   }
   for (let elem of num) {
      sum += elem;
   }  
   return sum;
 }

 console.log(uniTotal("Mary Had A Little Lamb"))

 