function solution(str) {
  let aux = [];
  let newStr = str.split("");
  if (newStr.length % 2 === 0) {
    for (let i = 0; i < newStr.length; i += 2) {
      aux.push(newStr[i] + newStr[i + 1]);
    }
  } else {
    for (let i = 0; i < newStr.length; i += 2) {
      if (i + 1 === newStr.length) {
        aux.push(newStr[i] + "_");
      } else {
        aux.push(newStr[i] + newStr[i + 1]);
      }
    }
  }
  return aux;
}
