function orderWeight(strng) {
  let list = strng.split(" ");
  let array = [];
  let result = [];

  for (let i = 0; i < list.length; i++) {
    array.push({
      weight: list[i],
      sum: list[i].split("").reduce((acc, curr) => Number(acc) + Number(curr)),
    });
  }

  function ord(a, b) {
    return a.sum - b.sum;
  }

  array.sort(ord);

  for (let weight of array) {
    result.push(weight.weight);
  }

  return result.join(" ");
}
