function snail(matrix) {
  let result = [];

  while(matrix.length > 0) {
    // toda la primera fila
    result.push(...matrix.shift());

    // toda la ultima columna
    for (let i = 0; i < matrix.length; i++) {
      result.push(matrix[i].pop());
    }

    // toda la ultima fila
    if (matrix.length > 0) {
      result.push(...matrix.pop().reverse());
    }
    // toda la primer fila de nuevo
      for (let i = matrix.length - 1; i >= 0; i--) {
        result.push(matrix[i].shift());
      }
  }
  return result;
}

const matriz = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];

console.log(snail(matriz));
// Resultado: [1,2,3,4,5,6,7,8,9]