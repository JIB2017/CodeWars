/* 
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/


function DNAStrand(dna){
    //your code here
    
    let array = dna.split("");
    let aux = array.map((s) => ( s === 'A' ? s = 'T' : s === 'T' ? s = 'A' : s === 'C' ? s = 'G' : s = 'C'));
    
    return aux.join("");
  }