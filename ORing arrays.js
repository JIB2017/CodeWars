function orArrays(arr1, arr2, defaultValue = 0) {
  let result = [];
  let maxLength = Math.max(arr1.length, arr2.length);
  let aux1, aux2;

  for (let i = 0; i < maxLength; i++) {
    aux1 = arr1[i] ?? defaultValue;
    aux2 = arr2[i] ?? defaultValue;

    result.push(aux1 | aux2);
  }
  return result;
}
