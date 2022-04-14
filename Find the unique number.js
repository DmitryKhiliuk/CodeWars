
 function findUniq(arr) {
   
   arr.sort((a,b) => b - a);
   if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
      return arr[0];
   } else if (arr[arr.length-1] !== arr[arr.length-2] && arr[arr.length-1] !== arr[arr.length-3]) {
      return arr[arr.length-1]
   }
 }

