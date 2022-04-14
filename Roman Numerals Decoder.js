function solution (roman) {
   let arr = roman.split('')
   let numbArr = [0]
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'I') {
         numbArr.push(1)
      }
      if (arr[i] === 'V') {
         numbArr.push(5)
      }
      if (arr[i] === 'X') {
         numbArr.push(10)
      }
      if (arr[i] === 'L') {
         numbArr.push(50)
      }
      if (arr[i] === 'C') {
         numbArr.push(100)
      }
      if (arr[i] === 'D') {
         numbArr.push(500)
      }
      if (arr[i] === 'M') {
         numbArr.push(1000)
      }
   }
   console.log(numbArr)
   let sum = 0;
   for(let i = numbArr.length - 1; i > 0; i--) {
      if (numbArr[i] <= numbArr[i - 1]) {
         sum += numbArr[i]
      } else {sum += numbArr[i] - numbArr[i - 1] * 2}
   }
    return sum;
}

console.log(solution('MMVIII'))