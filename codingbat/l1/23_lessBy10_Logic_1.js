/* 
Problem:
	Given three ints, a b c, return true if one of them is 10 or more less than one of the others.

*/

function lessBy10 (a, b, c) {
  
  
  return (Math.abs(a - b) >= 10 || Math.abs(b - c) >= 10 || Math.abs(c - a) >= 10)  ? true:false;
  
}  
  
console.log(lessBy10(1, 7, 11) ); // true
console.log(lessBy10(1, 7, 10) ); // false
console.log(lessBy10(11, 1, 7) ); // true
console.log();

console.log(lessBy10(10, 7, 1) ); // false
console.log(lessBy10(-10, 2, 2) ); // true
console.log(lessBy10(2, 11, 11) ); // false
console.log();

console.log(lessBy10(3, 3, 30) ); // true
console.log(lessBy10(3, 3, 3) ); // false
console.log(lessBy10(10, 1, 11) ); // true
console.log();

console.log(lessBy10(10, 11, 1) ); // true
console.log(lessBy10(10, 11, 2) ); // false
console.log(lessBy10(3, 30, 3) ); // true
console.log();

console.log(lessBy10(2, 2, -8) ); // true
console.log(lessBy10(2, 8, 12) ); // true











