/* 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.
*/

function pigIt(str) {
  //Code here
  let aux = [];
  let str2 = str.split(" ");
  const pattern = /[A-Za-z]/;

  for (let word of str2) {
    if (pattern.test(word)) {
      let firstLetter = word.substring(0, 1);
      let rest = word.substring(1);
      aux.push(rest + firstLetter + "ay");
    } else {
      aux.push(word);
    }
  }

  return aux.join(" ");
}
