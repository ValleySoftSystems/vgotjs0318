/* 
Problem:
	Given three ints, a b c, return true if b is greater than a, and c is greater than b. However, with the exception that if "bOk" is true, b does not need to be greater than a.

*/
function inOrder (a, b, c, bOk) {
  
  return (b > a && c > b) || (bOk && c > b) ? true:false;
}  
  

console.log(inOrder(1, 2, 4, false) ); // true
console.log(inOrder(1, 2, 1, false) ); // false
console.log(inOrder(1, 1, 2, true) ); // true
console.log();

console.log(inOrder(3, 2, 4, false) ); // false
console.log(inOrder(2, 3, 4, false) ); // true
console.log(inOrder(3, 2, 4, true) ); // true
console.log();

console.log(inOrder(4, 2, 2, true) ); // false
console.log(inOrder(4, 5, 2, true) ); // false
console.log(inOrder(2, 4, 6, true) ); // true
console.log();

console.log(inOrder(7, 9, 10, false) ); // true
console.log(inOrder(7, 5, 6, true) ); // true
console.log(inOrder(7, 5, 4, true) ); // false

