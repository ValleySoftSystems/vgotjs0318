/* 
Problem:
	Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.
*/

function sortaSum (a, b) {
  
  
   return (a + b >= 10 && a + b <= 19)? 20 : a + b;
  
}
console.log(sortaSum(3, 4) ); // 7
console.log(sortaSum(9, 4) ); // 20
console.log(sortaSum(10, 11) ); // 21
console.log();

console.log(sortaSum(12, -3) ); // 9
console.log(sortaSum(-3, 12) ); // 9
console.log(sortaSum(4, 5) ); // 9
console.log();

console.log(sortaSum(4, 6) ); // 20
console.log(sortaSum(14, 7) ); // 21
console.log(sortaSum(14, 6) ); // 20
