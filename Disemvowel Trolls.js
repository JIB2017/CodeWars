/*
Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/

function disemvowel(str) {
  let array = str.split(" ");
  const isMatch = /^[aeiouAEIOU]/;
  let result = [];

  function filter(word) {
    let aux = "";
    for (let i = 0; i < word.length; i++) {
      if (!isMatch.test(word[i])) {
        aux += word[i];
      }
    }
    return aux;
  }

  for (let word of array) {
    result.push(filter(word));
  }
  return result.join(" ");
}
