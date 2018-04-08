/* 
Problem:
  Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.

Notes:
  
  loop through the array
  check if the value at ith index is even , then check the  values at i+1 and i+2 th indices. return true if all 3 are even.
  check if the value at ith index is odd , then check the  values at i+1 and i+2 th indices. return true if all 3 are odd.
  otherwise return false.

  
*/

function modThree (nums) {
 
  var isModThree = false;
  
  for(var i = 0; i < nums.length - 1 ; i++) {
     
    
    if ( (nums[i] % 2 == 0) && (nums[i + 1] % 2 == 0) && (nums[i + 2] % 2 == 0) ) {
      
      isModThree = true;
      
    }
           
    else if ( (nums[i] % 2 != 0) && (nums[i + 1] % 2 != 0) && (nums[i + 2] % 2 != 0) ) {
      
      isModThree = true;
      
    }
    
    else continue;
     
  }
  return isModThree;
}



console.log(modThree([2, 1, 3, 5]) ); // true
console.log(modThree([2, 1, 2, 5]) ); // false
console.log(modThree([2, 4, 2, 5]) ); // true
console.log();    
    
console.log(modThree([1, 2, 1, 2, 1]) ); // false
console.log(modThree([9, 9, 9]) ); // true
console.log(modThree([1, 2, 1]) ); // false
console.log();
    
console.log(modThree([1, 2]) ); // false
console.log(modThree([1]) ); // false
console.log(modThree([]) ); // false
console.log();
    
console.log(modThree([9, 7, 2, 9]) ); // false
console.log(modThree([9, 7, 2, 9, 2, 2]) ); // false
console.log(modThree([9, 7, 2, 9, 2, 2, 6]) ); // true
