function XO(str) {
    let x = [...str].map(el => el.toLowerCase() === 'x')?.reduce((acc, curr) => acc + curr, 0);
    let s = [...str].map(el => el.toLowerCase() === 'o')?.reduce((acc, curr) => acc + curr, 0);
    
    return x === s;
  }