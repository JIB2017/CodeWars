function sortArray(array) {
  // Return a sorted array.
  let oddIndex = [];
  let array2 = [];
  let newArray = [];
  let aux = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array2.push(array[i]);
      oddIndex.push(i);
    }
  }

  array2 = array2.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (i === oddIndex[aux]) {
      newArray.push(array2[aux]);
      aux++;
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
