/* 
Problem:
	Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.
*/
function start1 (numA, numB) {
  
  var count = 0;
  
  if(numA[0] == 1 )  count++;
  if(numB[0] == 1 )  count++;
  
  return count;
  
 }

console.log(start1([1, 2, 3], [1, 3]) ); // 2
console.log(start1([7, 2, 3], [1]) ); // 1
console.log(start1([1, 2], []) ); // 1
console.log();

console.log(start1([], [1, 2]) ); // 1
console.log(start1([7], []) ); // 0
console.log(start1([7], [1]) ); // 1
console.log();

console.log(start1([1], [1]) ); // 2
console.log(start1([7], [8]) ); // 0
console.log(start1([], []) ); // 0
console.log();

console.log(start1([1, 3], [1]) ); // 2

