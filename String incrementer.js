function incrementString (strng) {
   let strNumber = '';
   let strLetter = '';
   for (let i = 0; i < strng.length; i++){
      (Number.isInteger(+strng[i])) ? strNumber += strng[i] : strLetter += strng[i]
   }


   let sum = +strNumber + 1;
   let strSum = String(sum);
   if (strSum.length < strNumber.length) {
      let zeroCount =  strNumber.length - String(sum).length
      for(let i = 1; i <= zeroCount; i++) {
         strSum = '0' + strSum
      }
   }

   return strLetter + strSum
   
 }
 console.log(incrementString (""))