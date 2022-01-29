function symmetricPoint(p, q) {
    let p1 = [];
    let x = 0;
    let y = 0;
    for (let i = 0; i < 1; i++) {
      p1.push((q[0] * 2 - p[0]), (q[1] * 2 - p[1]))
    }
    return p1;
  }