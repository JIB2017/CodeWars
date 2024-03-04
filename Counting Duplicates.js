function duplicates(string) {
  string = string.toLowerCase();
  let obj = {};

  for (let any of string) {
    obj[any] = (obj[any] || 0) + 1;
  }

  const duplicates = Object.keys(obj).filter((el) => obj[el] > 1);

  return duplicates;
}
