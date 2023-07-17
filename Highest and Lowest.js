/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/

function highAndLow(numbers) {
  // ...
  let nros = numbers.split(" ");
  let aux = nros.map((e) => parseInt(e));

  return `${Math.max(...aux)} ${Math.min(...aux)}`;
}
