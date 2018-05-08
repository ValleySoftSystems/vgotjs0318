/* 
Problem:
	For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().
*/

function  roundSum (a, b, c) {
  
  a = round10(a);
  b = round10(b);
  c = round10(c);
  
  return a + b + c;
  
}

function round10 (num) {
  
  if ( (num % 10) >= 5 ) num += 10 - (num % 10);
  
  if ( (num % 10) < 5 )  num = num - (num % 10);
  
  return num;  
}

console.log(roundSum(16, 17, 18) ); // 60
console.log(roundSum(12, 13, 14) ); // 30
console.log(roundSum(6, 4, 4) ); // 10
console.log();


console.log(roundSum(4, 6, 5) ); // 20
console.log(roundSum(4, 4, 6) ); // 10
console.log(roundSum(9, 4, 4) ); // 10
console.log();


console.log(roundSum(0, 0, 1) ); // 0
console.log(roundSum(0, 9, 0) ); // 10
console.log(roundSum(10, 10, 19) ); // 40
console.log();

console.log(roundSum(20, 30, 40) ); // 90
console.log(roundSum(45, 21, 30) ); // 100
console.log(roundSum(23, 11, 26) ); // 60
console.log();

console.log(roundSum(23, 24, 25) ); // 70
console.log(roundSum(25, 24, 25) ); // 80
console.log(roundSum(23, 24, 29) ); // 70
console.log();

console.log(roundSum(11, 24, 36) ); // 70
console.log(roundSum(24, 36, 32) ); // 90
console.log(roundSum(14, 12, 26) ); // 50