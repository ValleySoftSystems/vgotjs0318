/* 
Problem:
	Given two int values, return whichever value is larger. However if the two values have the same remainder when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same, return 0.	
*/

function maxMod5 (a, b) {
  if(a == b ) return 0;
  else if(a % 5 == b % 5 ) return (a > b )? b : a;
  else return (a > b )? a : b;
}  
  
console.log(maxMod5(2, 3) ); // 3
console.log(maxMod5(6, 2) ); // 6
console.log(maxMod5(3, 2) ); // 3
console.log();

console.log(maxMod5(8, 12) ); // 12
console.log(maxMod5(7, 12) ); // 7
console.log(maxMod5(11, 6) ); // 6
console.log();

console.log(maxMod5(2, 7) ); // 2
console.log(maxMod5(7, 7) ); // 0
console.log(maxMod5(9, 1) ); // 9
console.log();

console.log(maxMod5(9, 14) ); // 9
console.log(maxMod5(1, 2) ); // 2

