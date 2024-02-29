function digitalRoot(n) {
  if ([...n.toString()].length <= 1) return n;
  let array = [...n.toString()].reduce(
    (acc, curr) => Number(acc) + Number(curr),
    0
  );
  while (array.toString().length > 1) {
    array = [...array.toString()].reduce(
      (acc, curr) => Number(acc) + Number(curr),
      0
    );
  }
  return array;
}
