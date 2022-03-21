function arrayDiff(a, b) {
   let arr = [];
   for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < a.length; j++) {
         (a[j] === b[i]) && a.splice(j, j+1) 
      }
      
   }
   return a
}


console.log(arrayDiff([], [4,5]))