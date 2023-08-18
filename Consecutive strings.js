function longestConsec(strarr, k) {
  // your code
  let length = 0;
  let result = "";
  let jump = k - 1;

  for (let i = 0; i < strarr.length; i++) {
    let aux = [];
    if (strarr[i + jump]) {
      for (let j = i; j <= i + jump; j++) {
        aux.push(strarr[j]);
      }
      if (aux.join("").length > length && aux.join("").length !== length) {
        result = aux.join("");
        length = aux.join("").length;
      }
    }
  }
  return result;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
