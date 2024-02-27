var uniqueInOrder = function (iterable) {
  let array = [...iterable];
  let i = 0;

  while (i < array.length) {
    while (array[i] === array[i + 1]) {
      array.splice(i + 1, 1);
    }
    i++;
  }
  return array;
};
