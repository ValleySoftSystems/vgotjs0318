/*solution to http://codingbat.com/prob/p100905 

Problem: 
  Given a string, if the string "del" appears starting
  at index 1, return a string where that "del" has 
  been deleted. 
  Otherwise, return the string unchanged.
Notes:
  find a sub string that starts at index 1 .
  compare it with 'del'
  if true replce del with empty string
  if false return the original string 
  
  */

function delDel (str) {
  return (( str.substr(1, 3) == 'del'))? str.replace('del','') : str;
}

console.log( delDel("adelbc") ); // "abc"
console.log( delDel("adelHello") );// "aHello"
console.log( delDel("adedbc") );// "adedbc"

console.log( delDel("abcdel") ); // "abcdel"
console.log( delDel("add") );
console.log( delDel("ad") );

console.log( delDel("a") );
console.log( delDel("") );
console.log( delDel("del") );

console.log( delDel("adel") );
console.log( delDel("aadelbb") );
