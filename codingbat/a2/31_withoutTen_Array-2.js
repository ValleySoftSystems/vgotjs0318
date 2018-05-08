/*
Problem: 
  Return a version of the given array where all the 10's have been removed. The remaining elements should shift left towards the start of the array as needed, and the empty spaces a the end of the array should be 0. So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the given array or make a new array. 
*/

function withoutTen (nums) {
 
  
  var result = new Array(nums.length); 
  
  
  //copy values that are not 10 to resultArray
  for(var i = 0,j =0; i < nums.length;i++) {
      
    if(nums[i] != 10) {
      
      result[j] = nums[i];
      j++;
    }
   
  }
  
  //assign 0 to values that are not defined
  for(var i = 0; i < result.length;i++) {
      
    if(!result[j] ) result[j] = 0;
  
  }
  
  return result;
}
console.log(withoutTen([1, 10, 10, 2])); //[1, 2, 0, 0]
console.log(withoutTen([10, 2, 10]) ); // [2, 0, 0]
console.log(withoutTen([1, 99, 10]) ); // [1, 99, 0]
console.log();
console.log(withoutTen([10, 13, 10, 14]) ); // [13, 14, 0, 0]
console.log(withoutTen([10, 13, 10, 14, 10]) ); // [13, 14, 0, 0, 0]
console.log(withoutTen([10, 10, 3]) ); // [3, 0, 0]
console.log();
console.log(withoutTen([1]) ); // [1]
console.log(withoutTen([13, 1]) ); // [13, 1]
console.log(withoutTen([10]) ); // [0]
console.log();
console.log(withoutTen([]) ); // []