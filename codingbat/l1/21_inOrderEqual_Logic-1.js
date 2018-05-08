/* 
Problem:
	Given three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.

*/
function inOrderEqual (a, b, c, equalOk) {
  
  return (a < b && b < c ) || (equalOk && a <= b && b <= c )  ? true:false;
}  
  

console.log(inOrderEqual(2, 5, 11, false) ); // true
console.log(inOrderEqual(5, 7, 6, false) ); // false
console.log(inOrderEqual(5, 5, 7, true) ); // true
console.log();

console.log(inOrderEqual(5, 5, 7, false) ); // false
console.log(inOrderEqual(2, 5, 4, false) ); // false
console.log(inOrderEqual(3, 4, 3, false) ); // false
console.log();

console.log(inOrderEqual(3, 4, 4, false) ); // false
console.log(inOrderEqual(3, 4, 3, true) ); // false
console.log(inOrderEqual(3, 4, 4, true) ); // true
console.log();

console.log(inOrderEqual(1, 5, 5, true) ); // true
console.log(inOrderEqual(5, 5, 5, true) ); // true
console.log(inOrderEqual(2, 2, 1, true) ); // false
console.log();

console.log(inOrderEqual(9, 2, 2, true) ); // false
console.log(inOrderEqual(0, 1, 0, true) ); // false
