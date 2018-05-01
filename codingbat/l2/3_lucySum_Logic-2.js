/* 
Problem:
	Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.
*/

function lucySum(a,  b, c) {
  
  if(a == 13) return 0;
  if(b == 13) return a ;
  if(c == 13) return a + b;
  
  return a + b + c;
  
}

console.log(lucySum(1, 2, 3) ); // 6
console.log(lucySum(1, 2, 13) ); // 3
console.log(lucySum(1, 13, 3) ); // 1
console.log();

console.log(lucySum(1, 13, 13) ); // 1
console.log(lucySum(6, 5, 2) ); // 13
console.log(lucySum(13, 2, 3) ); // 0
console.log();

console.log(lucySum(13, 2, 13) ); // 0
console.log(lucySum(13, 13, 2) ); // 0
console.log(lucySum(9, 4, 13) ); // 13
console.log();

console.log(lucySum(8, 13, 2) ); // 8
console.log(lucySum(7, 2, 1) ); // 10
console.log(lucySum(3, 3, 13) ); // 6