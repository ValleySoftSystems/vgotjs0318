
/* 
Problem:
	Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

	*/


function plusTwo (numA, numB) {
  
  var result = new Array(numA.length + numB.length);
  
  
  
  result[0] = numA[0];
  result[1] = numA[1];
  result[2] = numB[0];
  result[3] = numB[1];
  
  return result;
}

console.log(plusTwo([1, 2], [3, 4]) ); // [1, 2, 3, 4]
console.log(plusTwo([4, 4], [2, 2]) ); // [4, 4, 2, 2]
console.log(plusTwo([9, 2], [3, 4]) ); // [9, 2, 3, 4]