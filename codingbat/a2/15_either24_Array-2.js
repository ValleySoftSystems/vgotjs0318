/* 
Problem:
	Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.

Notes:
	loop through the array.
	check for 2 in adjacent indices. if yes make contain22 as true. 
	check for 4 in adjacent indices. if yes make contain44 as true.

	return true when contains22 and contains44 are not equal.
*/

function either24 (nums) {
  
  
  var contains22 = false, contains44 = false;
  
  for (var i = 0; i < nums.length; i++) {
    
     
       if ((nums[i] == 2) && (nums[i+1] == 2)) {
         contains22 = true;
         
       }
       
       if ((nums[i] == 4) && (nums[i+1] == 4) ) {
          contains44 = true;
         
       }
     
     } 
        
  return (contains22 != contains44) ;
}

console.log(either24([1, 2, 2]) ); //true
console.log(either24([4, 4, 1]) ); //true
console.log(either24([4, 4, 1, 2, 2]) ); //false
console.log();

console.log(either24([1, 2, 3, 4]) ); //false
console.log(either24([3, 5, 9])); //false           
console.log(either24([1, 2, 3, 4, 4]) ); //true
console.log();

console.log(either24([2, 2, 3, 4])  ); //true
console.log(either24([1, 2, 3, 2, 2, 4])); //true
console.log(either24([1, 2, 3, 2, 2, 4, 4])); //false
console.log();

console.log(either24([1, 2])); // false
console.log(either24([2, 2])); //true
console.log(either24([4,4])); // true
console.log();

console.log(either24([2]) ); //false
console.log(either24([] ) ); // false

