function ipsBetween(start, end){
   let endArr = end.split('.')
   let startArr = start.split('.')
   let resEnd = endArr[0] * 256**3 + endArr[1] * 256**2 + endArr[2] * 256 + +endArr[3] 
   let resStart = startArr[0] * 256**3 + startArr[1] * 256**2 + startArr[2] * 256 + +startArr[3]
   return resEnd-resStart 
   
 }

 console.log(ipsBetween("10.0.0.0", "10.0.0.50"))