/* 
Problem:
	Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.
*/

function rotateLeft3 (nums) {
  
  var leftArray = new Array(nums.length); 

  for (var i = 0; i < nums.length; i++) {
    
        leftArray[i] = nums[i+1]; 
    
        if(i == nums.length -1) leftArray[nums.length - 1] = nums[0];
  }
    
  return leftArray;
}

console.log(rotateLeft3([1, 2, 3]) ); //[2, 3, 1]
console.log(rotateLeft3([5, 11, 9]) ); //[11, 9, 5]
console.log(rotateLeft3([7, 0, 0]) ); //[0, 0, 7]
console.log();

console.log(rotateLeft3([1, 2, 1]) ); //[2, 1, 1]
console.log(rotateLeft3([0, 0, 1]) ); //[0, 1, 0]
