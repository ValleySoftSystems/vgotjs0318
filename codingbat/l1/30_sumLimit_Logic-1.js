/* 
Problem:
	Given 2 non-negative ints, a and b, return their sum, so long as the sum has the same number of digits as a. If the sum has more digits than a, just return a without b. (Note: one way to compute the number of digits of a non-negative int n is to convert it to a string with String.valueOf(n) and then check the length of the string.)

*/

function sumLimit (a, b) {

 return (a.toString().length == (a+b).toString().length ) ? a + b : a 
  
}  
  
console.log(sumLimit(2, 3) ); // 5
console.log(sumLimit(8, 3) ); // 8
console.log(sumLimit(8, 1) ); // 9
console.log();

console.log(sumLimit(11, 39) ); // 50
console.log(sumLimit(11, 99) ); // 11
console.log(sumLimit(0, 0) ); // 0
console.log();

console.log(sumLimit(99, 0) ); // 99
console.log(sumLimit(99, 1) ); // 99
console.log(sumLimit(123, 1) ); // 124
console.log();

console.log(sumLimit(1, 123) ); // 1
console.log(sumLimit(23, 60) ); // 83
console.log(sumLimit(23, 80) ); // 23
console.log();

console.log(sumLimit(9000, 1) ); // 9001
console.log(sumLimit(90000000, 1) ); // 90000001
console.log(sumLimit(9000, 1000) ); // 9000
