function duplicateEncode(word){
   let arr = word.toLowerCase().split('')
   let arr1 = []
   for (let elem of arr) {
      if (arr.filter(el => el === elem).length > 1) {
         arr1.push(')')
      } else {
         arr1.push('(')
      }
   }
   return arr1.join('')
}
console.log(duplicateEncode("(( @"))
