/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function count(string) {
  // TODO
  let characters = {};
  let array = string.split("");

  for (let i = 0; i < array.length; i++) {
    if (characters[array[i]]) {
      characters[array[i]] += 1;
    } else {
      characters[array[i]] = 1;
    }
  }
  return characters;
}
