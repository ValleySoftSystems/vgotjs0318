/* 
Problem:
	You have a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from each other, the result is 0. If all of the numbers are the same, the result is 20. If two of the numbers are the same, the result is 10.

*/

function greenTicket  (a, b, c) {
  
  if(a == b && a == c && b == c) return 20;
  if( a == b ||  b == c || c == a) return 10;
  
  if(a != b && a != c && b != c) return 0;
  
}  
  
console.log(greenTicket(1, 2, 3) ); // 0
console.log(greenTicket(2, 2, 2) ); // 20
console.log(greenTicket(1, 1, 2) ); // 10
console.log();

console.log(greenTicket(2, 1, 1) ); // 10
console.log(greenTicket(1, 2, 1) ); // 10
console.log(greenTicket(3, 2, 1) ); // 0
console.log();

console.log(greenTicket(0, 0, 0) ); // 20
console.log(greenTicket(2, 0, 0) ); // 10
console.log(greenTicket(0, 9, 10) ); // 0
console.log();

console.log(greenTicket(0, 10, 0) ); // 10
console.log(greenTicket(9, 9, 9) ); // 20
console.log(greenTicket(9, 0, 9) ); // 10
