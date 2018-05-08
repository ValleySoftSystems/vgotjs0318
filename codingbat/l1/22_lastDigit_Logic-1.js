/* 
Problem:
	Given three ints, a b c, return true if two or more of them have the same rightmost digit. The ints are non-negative. Note: the % "mod" operator computes the remainder, e.g. 17 % 10 is 7.
*/

function lastDigit (a, b, c) {
  
  return (a % 10 == b % 10 || a % 10 == c % 10 || b % 10 == c % 10 )  ? true:false;
}  
  

console.log(lastDigit(23, 19, 13) ); // true
console.log(lastDigit(23, 19, 12) ); // false
console.log(lastDigit(23, 19, 3) ); // true
console.log();

console.log(lastDigit(23, 19, 39) ); // true
console.log(lastDigit(1, 2, 3) ); // false
console.log(lastDigit(1, 1, 2) ); // true
console.log();

console.log(lastDigit(1, 2, 2) ); // true
console.log(lastDigit(14, 25, 43) ); // false
console.log(lastDigit(14, 25, 45) ); // true
console.log();

console.log(lastDigit(248, 106, 1002) ); // false
console.log(lastDigit(248, 106, 1008) ); // true
console.log(lastDigit(10, 11, 20) ); // true
console.log();

console.log(lastDigit(0, 11, 0) ); // true