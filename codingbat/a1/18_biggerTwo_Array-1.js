/* 
Problem:
	Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.
*/

function biggerTwo (numA, numB) {
  
  var sumA = 0, sumB = 0;
  
  sumA = numA[0] + numA[1];
  sumB = numB[0] + numB[1];
  
  
  return (sumA >= sumB)?numA:numB;
  
 }

console.log(biggerTwo([1, 2], [3, 4]) ); // [3, 4]
console.log(biggerTwo([3, 4], [1, 2]) ); // [3, 4]
console.log(biggerTwo([1, 1], [1, 2]) ); // [1, 2]
console.log();

console.log(biggerTwo([2, 1], [1, 1]) ); // [2, 1]
console.log(biggerTwo([2, 2], [1, 3]) ); // [2, 2]
console.log(biggerTwo([1, 3], [2, 2]) ); // [1, 3]
console.log();

console.log(biggerTwo([6, 7], [3, 1]) ); // [6, 7]
