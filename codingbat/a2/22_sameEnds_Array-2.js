* 
Problem:
	Return true if the group of N numbers at the start and end of the array are the same. For example, with {5, 6, 45, 99, 13, 5, 6}, the ends are the same for n=0 and n=2, and false for n=1 and n=3. You may assume that n is in the range 0..nums.length inclusive.

Notes:
	Copied solution ..couldnt understand properly...
*/

function sameEnds (nums, n) {
 
  var hasSameEnds = true ;
  
  for (var i = 0; i < n;i++) {
     
     if (!(nums[i] == nums[nums.length - n + i]))

      hasSameEnds = false;
   }

  return hasSameEnds; 
}


console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 1) ); // false
console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 2) ); // true
console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 3) ); // false
console.log();

console.log(sameEnds([1, 2, 5, 2, 1], 1) ); // true
console.log(sameEnds([1, 2, 5, 2, 1], 2) ); // false
console.log(sameEnds([1, 2, 5, 2, 1], 0) ); // true
console.log();

console.log(sameEnds([1, 2, 5, 2, 1], 5) ); // true
console.log(sameEnds([1, 1, 1], 0) ); // true
console.log(sameEnds([1, 1, 1], 1) ); // true
console.log();

console.log(sameEnds([1, 1, 1], 2) ); // true
console.log(sameEnds([1, 1, 1], 3) ); // true
console.log(sameEnds([1], 1) ); // true

 
      





