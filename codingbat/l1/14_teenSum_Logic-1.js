/* 
Problem:
	Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.
*/

function teenSum (a, b) {
  
   
     return ((a >= 13 && a <= 19) || (b >= 13 && b <= 19))? 19: a + b;
   
    
}

console.log(teenSum(3, 4) ); // 7
console.log(teenSum(10, 13) ); // 19
console.log(teenSum(13, 2) ); // 19
console.log();

console.log(teenSum(3, 19) ); // 19
console.log(teenSum(13, 13) ); // 19
console.log(teenSum(10, 10) ); // 20
console.log();

console.log(teenSum(6, 14) ); // 19
console.log(teenSum(15, 2) ); // 19
console.log(teenSum(19, 19) ); // 19
console.log();

console.log(teenSum(19, 20) ); // 19
console.log(teenSum(2, 18) ); // 19
console.log(teenSum(12, 4) ); // 16
console.log();

console.log(teenSum(2, 20) ); // 22
console.log(teenSum(2, 17) ); // 19
console.log(teenSum(2, 16) ); // 19
console.log();

console.log(teenSum(6, 7) ); // 13
