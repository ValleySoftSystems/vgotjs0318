/* 
Problem:
	Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.

Notes:
	
	if value at ith index is 7 then 
		check for values at i+1 and i+2 indices. 
		if any one of them is 7 return true.
*/
function has77 (nums) {
 
  var has77 = false;
  
  for(var i = 0; i < nums.length; i++) {
    
    if ((nums[i] == 7) && (nums[i + 1] == 7 || nums[i+2] == 7 ) ) {
      
          has77 = true;
    } 
    else continue;
  }
  return has77;
}


console.log(has77([1, 7, 7]) ); //true      
console.log(has77([1, 7, 1, 7]) ); // true      
console.log(has77([1, 7, 1, 1, 7]) ); // false 
console.log();

console.log(has77([7, 7, 1, 1, 7]) ); // true      
console.log(has77([2, 7, 2, 2, 7, 2]) ); // false      
console.log(has77([2, 7, 2, 2, 7, 7]) ); // true 
console.log();

console.log(has77([7, 2, 7, 2, 2, 7]) ); // true      
console.log(has77([7, 2, 6, 2, 2, 7]) ); // false      
console.log(has77([7, 7, 7])); // true  
console.log();

console.log(has77([7, 1, 7]) ); // true      
console.log(has77([7, 1, 1]) ); // false      
console.log(has77([1, 2]) ); // false  
console.log();

console.log(has77([1, 7]) ); // false      
console.log(has77([7]) ); // false      
