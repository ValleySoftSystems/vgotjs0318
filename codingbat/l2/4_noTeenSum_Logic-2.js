/* 
Problem:
	Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().
*/

function  noTeenSum(a, b, c) {
  
  a = fixTeen(a);
  b = fixTeen(b)
  c = fixTeen(c);
  
  return a + b + c;
  
}

function fixTeen (n) {

  return ( (n >=13 && n <= 19 ) && n != 15 && n !=16 ) ? 0 : n
    
}


console.log(noTeenSum(1, 2, 3) ); // 6
console.log(noTeenSum(2, 13, 1) ); // 3
console.log(noTeenSum(2, 1, 14) ); // 3
console.log();

console.log(noTeenSum(2, 1, 15) ); // 18
console.log(noTeenSum(2, 1, 16) ); // 19
console.log(noTeenSum(2, 1, 17) ); // 3
console.log();

console.log(noTeenSum(17, 1, 2) ); // 3
console.log(noTeenSum(2, 15, 2) ); // 19
console.log(noTeenSum(16, 17, 18) ); // 16
console.log();

console.log(noTeenSum(17, 18, 19) ); // 0
console.log(noTeenSum(15, 16, 1) ); // 32
console.log(noTeenSum(15, 15, 19) ); // 30
console.log();

console.log(noTeenSum(15, 19, 16) ); // 31
console.log(noTeenSum(5, 17, 18) ); // 5
console.log(noTeenSum(17, 18, 16) ); // 16
console.log();

console.log(noTeenSum(17, 19, 18) ); // 0