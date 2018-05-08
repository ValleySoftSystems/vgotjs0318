/* 
Problem:
	Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

*/
function shareDigit (a, b) {
  
  
  return (a % 10 == Math.floor(b/10) || 
          a % 10 == b % 10 || 
          Math.floor(a/10) == Math.floor(b/10) ||
          Math.floor(a/10) == b % 10)? true:false;
}  
  
console.log(shareDigit(12, 23) ); // true
console.log(shareDigit(12, 43) ); // false
console.log(shareDigit(12, 44) ); // false
console.log();

console.log(shareDigit(23, 12) ); // true
console.log(shareDigit(23, 39) ); // true
console.log(shareDigit(23, 19) ); // false
console.log();


console.log(shareDigit(30, 90) ); // true
console.log(shareDigit(30, 91) ); // false
console.log(shareDigit(55, 55) ); // true
console.log();

console.log(shareDigit(55, 44) ); // false
