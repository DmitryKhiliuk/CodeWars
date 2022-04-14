function gooseFilter (birds) {
   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
   for (let i = birds.length; i >= 0; i--) {
      for (let elem of geese) {
         if (birds[i] === elem) {
            birds.splice(i, 1);
         }
      }
   }
   return birds
   
 };






 