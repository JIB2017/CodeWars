/* 
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {
	// your code
  let aux = s.split("");
  if(s.length === 1) return s[0].toUpperCase();
  
  for (let i = 0; i < aux.length; i++) {
    
    let aux2 = aux[i].toLowerCase();
    
    aux[i] = aux[i].toUpperCase();
    
    for (let j = 1; j <= i; j++) {
      aux[i] = aux[i] + aux2;
    }
  }
  return aux.join("-");
}