function rgb(r, g, b){
   if(r < 0) {
      r = '00'
   } 
   if(r > 255) {
      r = 'FF'
   } else {
      r = r.toString(16);
   }
   if(g < 0) {
      g = '00'
   } 
   if(g > 255) {
      g = 'FF'
   } else {
      g = g.toString(16);
   }
   if(b < 0) {
      b = '00'
   } 
   if(b > 255) {
      b = 'FF'
   } else {
      b = b.toString(16);
   }
      
      if (r.length == 1) r = '0' + r; 
      if (g.length == 1) g = '0' + g;
      if (b.length == 1) b = '0' + b;
      return (r + g + b).toUpperCase();
 
      
  }

   console.log(rgb(300,255,255))