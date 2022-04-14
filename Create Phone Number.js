function createPhoneNumber(numbers){
   let str = '(' + numbers.slice(0, 3) + ')' + ' ' + numbers.slice(3, 6) + '-' + numbers.slice(6);
   let sum = '';
   for (let i = 0; i < str.length; i++) {
      if (str[i] !== ',') {
         sum += str[i];
      }
   }
   return sum;
 }
 console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));