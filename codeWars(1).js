/* Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples */


function disemvowel(string) {

   let vowels = {
     'a': true,
     'e': true,
     'i': true,
     'o': true,
     'u': true
   };
 
   let result = "";
 
   for (let i = 0; i < string.length; i++) {
     let letter = string[i].toLowerCase();
     if (!vowels[letter]) {
       result += string[i];
     }
   };
   return result;
 };

 