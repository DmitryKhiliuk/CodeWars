

function dataReverse(data) {
   let arr = [];
   for (let i = 0; i < data.length; i += 8) {
     arr.push([data[i], data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6], data[i + 7]]);
  }
  
   
  let revArr = [];
   for (let i = arr.length - 1; i >= 0; i--) {
     revArr.push(arr[i]);
   }
   
   let array = []
   for (let arr1 of revArr) {
     for (let elem of arr1) {
       array.push(elem);
     }
   }
   return array;
   
 }

 console.log(dataReverse([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]))