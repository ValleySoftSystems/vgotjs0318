/*
	Problem:
		Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

*/


function commonEnd(numA, numB) {
 
  return (numA[0] == numB[0]) || (numA[numA.length - 1] == numB[numB.length - 1])?true:false;
}



console.log(commonEnd([1, 2, 3], [7, 3]) ); // true
console.log(commonEnd([1, 2, 3], [7, 3, 2]) ); // false
console.log(commonEnd([1, 2, 3], [1, 3]) ); // true
console.log();

console.log(commonEnd([1, 2, 3], [1]) ); // true
console.log(commonEnd([1, 2, 3], [2]) ); // false
