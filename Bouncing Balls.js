function bouncingBall(h,  bounce,  window) {
  
  
  let i = 0;
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
    i = -1;
  } else{
    while (h > window) {
    i++;
    h *= bounce;
    if (h > window) 
      i++;
    }
  }
  
  return i;
}