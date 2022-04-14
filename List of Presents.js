function howManyGifts(maxBudget, gifts){
   gigts = gifts.sort((a,b) => a - b);
   let sum = 0;
   let res = 0;
   let sumElem =gifts.reduce((acc,el) => acc + el) 
   if ( sumElem <= maxBudget) {
      return res = gifts.length
   } else {
      for (let i = 0; i < gifts.length; i++) {
         if (sum <= maxBudget) {
            sum += gifts[i]
            res += 1
         } 
      }
      return res - 1
   }
   
   
 }
 console.log(howManyGifts(4, [1, 1, 1]))