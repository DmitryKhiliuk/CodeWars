function queueTime(customers, n) {
   let res1
   let newArr = [];

   if (n > customers.length) {
      let sortir = customers.sort((a,b) => b - a)
      return (sortir.length !== 0) ? res1 = sortir[0] : res1 = sortir.length
      /* return res1 = sortir.length */
   } else if (n <= customers.length) {
      for (let i = 0; i < n; i++) {
         newArr.push(customers[i]);
      }
      for (let j = n; j < customers.length; j++) {
         newArr.sort((a,b) => a - b);
         newArr[0] += customers[j]
         newArr.sort((a,b) => a - b);
         
      }
      return newArr[newArr.length-1]
   }
    
}
   


 