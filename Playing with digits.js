function digPow(n, p){
   let sum = 0;
    n = String(n);
    for (let i = 0, j = p; i < n.length, j < n.length + p; i++, j++) {
      sum += Number(n[i]) ** j;
    }
   if (sum % n !== 0) {
      return -1;
   } else {
      return sum / n;
   }
  }

  console.log(digPow(46288, 3));