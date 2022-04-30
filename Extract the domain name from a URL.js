function domainName(url){
   let arr = url.split('//')
   let arr2 = arr[arr.length-1].split('.')
   let arr3 = []
   for(let i  = 0; i < arr2.length; i++) {
     if(arr2[i] !== 'www') {
        arr3.push(arr2[i])
   }
}
   return arr3[0]
}

 console.log(domainName("http://google.com"))
 console.log(domainName("http://google.co.jp"))
 console.log(domainName("http://www.zombie-bites.com"))
 console.log(domainName("www.xakep.ru"))