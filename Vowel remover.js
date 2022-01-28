function shortcut (string) {
   let newStr = '';
   for (let i = 0; i <= string.length - 1; i++) {
      if (string[i] !== 'e' && string[i] !== 'o' && string[i] !== 'a' && string[i] !== 'i' && string[i] !== 'u') {
         newStr += string[i];
      }
   } 
   return newStr;
 }

 console.log(shortcut ('how are you today?'));