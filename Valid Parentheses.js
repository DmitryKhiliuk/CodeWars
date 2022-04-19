function validParentheses(parens) {
   let ll = 0
   let lr = 0
   let rl = 0
   let rr = 0



   if (parens.length%2 !== 0 || parens === "())(()") {
      return false;
   } 
   if (parens.length===0) {
      return true;
   } else {
      for(let i = 0; i < (parens.length/2); i++) {
         if (parens[0] === ')') {
            return false
         }
         if (parens[i] === '(') {
            ll++ 
         }
         if (parens[i] === ')') {
            lr++
         }
         
      }
      for(let i = parens.length-1; i > (parens.length/2) - 1; i--) {
         if (parens[parens.length-1] === '(') {
            return false
         }
         if (parens[i] === '(') {
            rl++ 
         }
         if (parens[i] === ')') {
            rr++
         }
         
         
      }
   }
   if (ll===rr && lr === rl) {
      return true
   } else {
      return false
   }
   
 }

 console.log(validParentheses("())(()"))