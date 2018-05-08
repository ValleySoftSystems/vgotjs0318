/*
	Problem:
		Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.
*/
function sameFirstLast(nums) {
 
  //check array is empty or not
  if (!nums.length) return false;
  
  for(var i = 0; i < nums.length; i++) {
  	//check first and last elements of array
    return ( nums[0] == nums[nums.length - 1] ) ? true : false;
    
  }
}



console.log(sameFirstLast([1, 2, 3]) ); // false
console.log(sameFirstLast([1, 2, 3, 1]) ); // true
console.log(sameFirstLast([1, 2, 1]) ); // true
console.log();

console.log(sameFirstLast([7]) ); // true
console.log(sameFirstLast([]) ); // false
console.log(sameFirstLast([1, 2, 3, 4, 5, 1]) ); // true
console.log();

console.log(sameFirstLast([1, 2, 3, 4, 5, 13]) ); // false
console.log(sameFirstLast([13, 2, 3, 4, 5, 13]) ); // true
console.log(sameFirstLast([7, 7]) ); // true
