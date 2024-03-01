function findMissingLetter(array) {
  array = array.reverse();
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1]) {
      if (array[i].charCodeAt() - array[i + 1].charCodeAt() > 1) {
        return String.fromCharCode(array[i + 1].charCodeAt() + 1);
      }
    }
  }
}
