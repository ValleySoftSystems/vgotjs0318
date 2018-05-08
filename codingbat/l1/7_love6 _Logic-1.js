/* 
Problem:
	The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.

*/
function love6 (a, b) {
  
   
  return (a == 6 || b == 6 || a + b == 6|| a - b == 6)? true: false;
  
   
}

console.log(love6(6, 4) ); // true
console.log(love6(4, 5) ); // false
console.log(love6(1, 5) ); // true
console.log();

console.log(love6(1, 6) ); // true
console.log(love6(1, 8) ); // false
console.log(love6(1, 7) ); // true
console.log();

console.log(love6(7, 5) ); // false
console.log(love6(8, 2) ); // true
console.log(love6(6, 6) ); // true
console.log();

console.log(love6(-6, 2) ); // false
console.log(love6(-4, -10) ); // true
console.log(love6(-7, 1) ); // false
console.log();

console.log(love6(7, -1) ); // true
console.log(love6(-6, 12) ); // true
console.log(love6(-2, -4) ); // false
console.log();

console.log(love6(7, 1) ); // true
console.log(love6(0, 9) ); // false
console.log(love6(8, 3) ); // false
console.log();

console.log(love6(3, 3) ); // true
console.log(love6(3, 4) ); // false
