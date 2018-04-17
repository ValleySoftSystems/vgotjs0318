/* 
Problem:
  
Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields {5, 6, 7, 8, 9}. The end number will be greater or equal to the start number. Note that a length-0 array is valid. 

Notes:
  create an empty array.
  start the loop and keep start value at 0th index of array and continue till end value but not including it.
  return the array.
    
*/

function fizzArray3 (start, end) {
  
  var nums =  new Array();
  
  for (var i = start, j = 0 ; i < end; i++, j++) {
    
        nums[j] = i;
  }
    
  return nums;
}

console.log(fizzArray3(5, 10) ); // [5, 6, 7, 8, 9]
console.log(fizzArray3(11, 18) ); // [11, 12, 13, 14, 15, 16, 17]
console.log(fizzArray3(1, 3) ); // [1, 2]
console.log();

console.log(fizzArray3(1, 2) ); // [1]
console.log(fizzArray3(1, 1) ); // []
console.log(fizzArray3(1000, 1005) ); // [1000, 1001, 1002, 1003, 1004]



