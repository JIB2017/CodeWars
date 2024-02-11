function orderWeight(strng) {
  if (strng.length === 0) {
    return "";
  }
  let list = strng.trim().split(" ");
  let obj = [];
  let aux;
  let repeatedObj;
  let repeatedNums = [];
  let ordered = [];

  for (let i = 0; i < list.length; i++) {
    obj.push({
      weight: list[i],
      sum:
        list[i].length === 1
          ? Number(list[i])
          : list[i].split("").reduce((acc, curr) => Number(acc) + Number(curr)),
    });
  }

  function order(a, b) {
    return a.sum - b.sum;
  }

  function compare(numeros) {
    numeros.sort((a, b) => {
      return a.localeCompare(b);
    });
    return numeros;
  }

  obj.sort(order);

  for (let i = 0; i < obj.length; i++) {
    if (i + 1 < obj.length) {
      if (obj[i].sum === obj[i + 1].sum && obj[i].sum !== aux) {
        aux = obj[i].sum;
        repeatedObj = obj.filter((e) => e.sum === aux);
        for (let rep of repeatedObj) {
          repeatedNums.push(rep.weight);
        }
        ordered.push(compare(repeatedNums));
        repeatedNums = [];
      }
      if (obj[i].sum !== aux) {
        ordered.push(obj[i].weight);
      }
    } else if (obj[i].sum !== aux) {
      ordered.push(obj[i].weight);
    }
  }

  return ordered.flat().toString().replaceAll(",", " ");
}
