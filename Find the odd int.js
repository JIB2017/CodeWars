/* 
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  //happy coding!
  let aux = {};

  for (nro of A) {
    aux[nro] ? (aux[nro] = !aux[nro]) : (aux[nro] = true);
  }

  for (odd in aux) {
    if (aux[odd]) return parseInt(odd);
  }
}
