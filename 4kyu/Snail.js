// const snail = function (array) {
//   // enjoy
//   let result = [];

//   // shift() para el primer elemento // RIGHT, UP
//   // pop() para el ultimo elemento  // DOWN, LEFT

//   while (array.length > 0) {

//     // RIGHT
//     result.push(...array.shift());

//     // DOWN!!!!!
//     for (let i = 0; i < array.length; i++) {
//       result.push(array[i].pop());
//     }

//     // LEFT
//     if (array.length > 0) {
//       result.push(...array.pop().reverse());
//     }


//     // UP
//     for (let i = array.length - 1; i >= 0; i--) {
//       result.push(array[i].shift());
//     }
//   }
//   return result;
// };

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
      result.push(...matrix.pop());
    }
    // toda la primer fila de nuevo
      for (let i = matrix.length - 1; i >= 0; i--) {
        result.push(matrix[i].shift());
      }

  }
}

const matriz = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];

console.log(snail(matriz));
