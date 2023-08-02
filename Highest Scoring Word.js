function high(x) {
  let words = x.split(" ");
  let aux = 0;
  let bigger = 0;
  let result = "";

  function scoring(words) {
    aux = 0;
    for (let i = 0; i < words.length; i++) {
      aux += words.charCodeAt(i) - 96;
    }
    return aux;
  }

  for (let letters of words) {
    scoring(letters);

    if (aux > bigger) {
      bigger = aux;
      result = letters;
    }
  }

  return result;
}

console.log(high("man i need a taxi up to ubud")); // taxi
console.log(high("what time are we climbing up the volcano")); // volcano
console.log(high("aa b")); // aa
console.log(high("b aa")); // b
