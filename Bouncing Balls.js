function bouncingBall(h,  bounce,  window) {
   let i = 0;
   while (h > window) {
     i++;
     h *= bounce;
     if (h > window) {
       i++;
     }
   } 
   return i;
 }