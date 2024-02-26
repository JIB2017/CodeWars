function squareDigits(num) {
  return Number([...String(num)].map((el) => Math.pow(el, 2)).join(""));
}
