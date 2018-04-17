/*

Problem:
	Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.
*/

function middleWay (numA, numB) {
  
  
  var midArr = new Array(2);
    
  midArr[0] = numA[1];
  midArr[1] = numB[1];
    
  
  return midArr;
    
}

console.log(middleWay([1, 2, 3], [4, 5, 6])); // [2, 5]
console.log(middleWay([7, 7, 7], [3, 8, 0])); // [7, 8]
console.log(middleWay([5, 2, 9], [1, 4, 5])); // [2, 4]
console.log();

console.log(middleWay([1, 9, 7], [4, 8, 8])); // [9, 8]
console.log(middleWay([1, 2, 3], [3, 1, 4])); // [2, 1]
console.log(middleWay([1, 2, 3], [4, 1, 1])); // [2, 1]  



