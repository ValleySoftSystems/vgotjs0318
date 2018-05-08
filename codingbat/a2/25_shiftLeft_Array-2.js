/* 
Problem:
  
	Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. 
	You may modify and return the given array, or return a new array.
   
*/

function shiftLeft (nums) {
  
  //result array with given array's length
  var leftShiftArray = new Array(nums.length); 

  for (var i = 0; i < nums.length; i++) {

        //result array's value at first index  would be given array's value at second index.
        leftShiftArray[i] = nums[i+1]; 

        //when i reaches end of given array, then move its first value to be last value of result.
        if(i == nums.length -1) leftShiftArray[nums.length - 1] = nums[0];
  }
    
  return leftShiftArray;
}



console.log(shiftLeft([6, 2, 5, 3]) ); // [2, 5, 3, 6]
console.log(shiftLeft([1, 2]) ); // [2, 1]
console.log(shiftLeft([1]) ); // [1]
console.log();

console.log(shiftLeft([]) ); // []
console.log(shiftLeft([1, 1, 2, 2, 4]) ); // [1, 2, 2, 4, 1]
console.log(shiftLeft([1, 1, 1]) ); // [1, 1, 1]


