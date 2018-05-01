/*solution to http://codingbat.com/prob/p194667

Problem: 
  Count the number of "xx" in the given string.
  We'll say that overlapping is allowed, so "xxx" contains 2 "xx".
  
Notes:
  create count with 0 as default value.
  increase count whenever x appears in adjacent index of str.
  
*/

function countXX (str) {
 
  var count = 0;
  
  for (var i =0; i <  str.length ;i++) {
    if( (str.charAt(i) == 'x') && (str.charAt(i+1) == 'x') ) {
      count ++;
    }
  }
  return count;
} 
 
console.log( countXX("abcxx")); //→ 1
console.log( countXX("xxx")); //→ 2
console.log( countXX("xxxx") ); //→ 3

console.log( countXX("Abc") ); //→ 0
console.log( countXX("Hexxo thxxe")  );  //→ 2
console.log( countXX("") ); // → 0

console.log( countXX("Kittens") ); //0
console.log( countXX("Kittensxxx") );//→ 2


