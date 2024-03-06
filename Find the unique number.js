function findUniq(arr) {
  return arr
    .map((el) => (arr.filter((ella) => ella === el).length === 1 ? el : null))
    .filter((el) => el !== null)[0];
}
