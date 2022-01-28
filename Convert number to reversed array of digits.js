/* Convert number to reversed array of digits */

function digitize(n) {
   let str = String(n);
   let arr = [];
   for (let i = str.length-1; i >= 0; i--) {
     arr.push(+str[i]);
   }
   return arr;
 }