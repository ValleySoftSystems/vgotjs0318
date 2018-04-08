/* 
Problem:
	Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.
Notes:
	loop through array
	check each element of array is divisible by 2 . if yes increment the count
	return count.
	

*/
function countEvens (nums) {
 
  var count = 0;
  
  for (var i = 0; i < nums.length;i++ ) {
    if (nums[i] % 2 == 0 ) {
      count++;
    }
  }
  return count;
}



console.log(countEvens([2, 1, 2, 3, 4]) ); // 3
console.log(countEvens([2, 2, 0]) ); // → 3
console.log(countEvens([1, 3, 5])  ); // 0

console.log(countEvens([11, 9, 0, 1]) ); // 1
console.log(countEvens([2, 11, 9, 0]) ); // → 2
console.log(countEvens([2]) ); // 1
console.log(countEvens([]) ); // 0
console.log(countEvens([2, 5, 12]) ); // 2
