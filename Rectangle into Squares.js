function sqInRect(lng, wdth){
   let arr = [];
   if (lng - wdth === 0) {
     return null;
   } else {
      diff(lng, wdth);
   }
   function diff(lng, wdth) {
     if (lng !== 0 && wdth !==0 && lng > wdth) {
       lng = lng - wdth;
       arr.push(wdth);
       diff(lng, wdth);
     } else if (lng !== 0 && wdth !==0 && lng < wdth) {
       wdth = wdth - lng;
       arr.push(lng);
       diff(lng, wdth);
     } 
   }
   arr.push(arr[arr.length-1])
   return arr
 }

 console.log(sqInRect(20, 14));