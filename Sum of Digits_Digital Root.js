

function digital_root(n) {
   let res
   let arr = String(n).split('');
   let arr1 = []
   for (let el of arr) {
      arr1.push(Number(el))
   }
   n = arr1.reduce((acc,el) => (acc+el),0) 
   
   if (String(n).length > 1) {
      res = digital_root(n)
   } else {
      res = n
   }
   return res
}
console.log(digital_root(16))