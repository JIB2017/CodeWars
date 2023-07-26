function duplicateEncode(word){
    // ...
  let encoded = [];
  let count = {};
  word = word.toLowerCase();

  // 1 for repeated ones and 2 for non repeated ones
  for (letter of word) {
    if(count[letter]) {
      count[letter] = 1;
    } else {
      count[letter] = 2;
    }
  }

  for (letter of word) {
    if (count[letter] === 2) {
      encoded.push("(");
    } else {
      encoded.push(")");
    }
  }

  return encoded.join("");
}
console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Success")); // )())())
console.log(duplicateEncode("(( @")); // ))((
