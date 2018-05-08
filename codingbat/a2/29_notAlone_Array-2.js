/* 
  Problem:
    We'll say that an element in an array is "alone" if there are values before and after it, and those values are different from it. Return a version of the given array where every instance of the given value which is alone is replaced by whichever value to its left or right is larger.

*/

function notAlone (nums, value) { 
  for ( var  i = 0; i < nums.length; i++) {
    
    // check array element to equal to value and element is not at beginning and end of array
    if(nums[i] == value && (i != nums.length - 1) && (i != 0)) {
      
      
      //check element is alone by checking before and after elements
      if( nums[i - 1] != nums[i] && nums[i + 1] != nums[i]) {
        
        //find max of before and after elements and assign to alone element
        nums[i] = (nums[i - 1] > nums[i + 1]) ?nums[i -1]: nums[i + 1];
        
        
      } 
     
    }
    else continue;
    
  }
  
  return nums;
  
}


console.log(notAlone([1, 2, 3], 2) ); // [1, 3, 3]
console.log(notAlone([1, 2, 3, 2, 5, 2], 2) ); // [1, 3, 3, 5, 5, 2]
console.log(notAlone([3, 4], 3) ); // [3, 4]
console.log();

console.log(notAlone([3, 3], 3) ); // [3, 3]
console.log(notAlone([1, 3, 1, 2], 1) ); // [1, 3, 3, 2]
console.log(notAlone([3], 3) ); // [3]
console.log();

console.log(notAlone([], 3) ); // []
console.log(notAlone([7, 1, 6], 1) ); // [7, 7, 6]
console.log(notAlone([1, 1, 1], 1) ); // [1, 1, 1]
console.log();

console.log(notAlone([1, 1, 1, 2], 1) ); // [1, 1, 1, 2]
