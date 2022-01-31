function findNeedle(haystack) {
   for (let i = 0; i <= haystack.length - 1; i++) {
     if (haystack[i] == 'needle') {
       return "found the needle at position " + i;
     }
   }
 }