function duplicateCount(text){
   text = text.toLowerCase();
   let arr = [];
   for(let i = 0; i < text.length; i++) {
      arr.push(text[i])
   }
   let counts = {}
   arr.forEach((el) => {counts[el] = (counts[el] || 0) + 1})
   let k = 0
   for (let key in counts) {
      if (counts[key] > 1) {
         k++
      }
   }

   return k
} 
 console.log(duplicateCount("Indivisibility"))

 
 