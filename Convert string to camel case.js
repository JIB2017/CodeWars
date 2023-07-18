/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.
*/

function toCamelCase(str) {
  if (str.length === 0) return "";
  const regex = /[^A-Za-z0-9]+/g;
  let array = str.split(regex);

  for (let i = 1; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  return array.join("");
}
