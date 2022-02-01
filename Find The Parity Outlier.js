function findOutlier(integers){
   let res = integers.filter(elem => elem % 2 === 0);
   let res2 = integers.filter(elem => elem % 2 !== 0);
   if (res.length === 1) {
     return res[0];
   } else {
     return res2[0];
   }
 }