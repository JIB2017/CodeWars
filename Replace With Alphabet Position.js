/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

*/

function alphabetPosition(text) {
  const pattern = /^[a-zA-Z]+$/;
  let words = text.split("").filter((e) => pattern.test(e));
  let result = [];

  for (let word of words) {
    result.push(word.toLowerCase().charCodeAt() - 96);
  }

  return result.join(" ");
}
