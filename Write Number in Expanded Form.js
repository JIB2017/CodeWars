function expandedForm(num) {
  let array = num.toString().split("").reverse();
  let str = [];
  let j = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] * j !== 0) {
        str.push(array[i] * j);
    }
    j *= 10;
  }
  return str.reverse().join(" + ")
}

let num = 8078;
console.log(expandedForm(num));