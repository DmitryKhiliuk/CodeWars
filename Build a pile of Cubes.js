function findNb(m) {
   let sum = 0;
   let n = 0;
   for (let j = 1; j < m; j++) {
      n++;
      sum += n ** 3;
      if (sum === m) {
         break;
      } else if (sum > m){
         return -1;
      }
   }
   return n;
}
console.log(findNb(1071225))