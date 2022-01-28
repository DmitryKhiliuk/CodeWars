/* Pillars */


function pillars(num_pill, dist, width) {
   let result;
   if (num_pill <= 2) {
     result = (num_pill - 1) * dist * 100
   } else { 
     result = (num_pill - 2) * width + (num_pill - 1) * dist * 100; 
   }
   return result;
 }