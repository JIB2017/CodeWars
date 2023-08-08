function solution(numbers) {
  // Great Common Divisor approach
  function mcd(a, b) {
    if (b === 0) {
      return a;
    }
    return mcd(b, a % b);
  }

  let mcdValue = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    mcdValue = mcd(mcdValue, numbers[i]);
  }

  return mcdValue * numbers.length;

  //   Iterative approach
  /*
    while (true) {
      let isReady = false;

      for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
          if (i !== j && numbers[i] > numbers[j]) {
            numbers[i] -= numbers[j];
            isReady = true;
          }
        }
      }

      if (!isReady) {
        break;
      }
    }

    return numbers.reduce((sum, num) => sum + num, 0);
  */
}
