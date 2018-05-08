/* 
Problem:
	We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.	

Notes:
	extract every pair of elements from array.
	if pair length is less than or equal to one, return true.
	check value is in every pair. 
		if yes return true.
		if not return false.
	
*/


function isEverywhere (nums, val) {
  
 var pair, isEverywhere = true ;
  
  for (var i = 0; i < nums.length; i++) {
  
         pair = nums.slice(i, i + 2);
    
         if (pair.length <= 1) break;
           
         if(!pair.includes(val)) {
          
              isEverywhere = false;
              break;
         }
  }
  return isEverywhere; 
}

console.log(isEverywhere([1, 2, 1, 3], 1) ); //true
console.log(isEverywhere([1, 2, 1, 3], 2)  ); //false
console.log(isEverywhere([1, 2, 1, 3, 4], 1) ); //false
console.log();

console.log(isEverywhere([2, 1, 2, 1], 1) ); //true
console.log(isEverywhere([2, 1, 2, 1], 2)); //true
console.log(isEverywhere([2, 1, 2, 3, 1], 2)  ); //false
console.log();

console.log(isEverywhere([3, 1], 3)); //true
console.log(isEverywhere([3, 1], 2)); //false
console.log(isEverywhere([3], 1)); // true
console.log();

console.log(isEverywhere([], 1)); //true
console.log(isEverywhere([1, 2, 1, 2, 3, 2, 5], 2)); // true
console.log(isEverywhere([1, 2, 1, 1, 1, 2], 2) ); //false
console.log();

console.log(isEverywhere([2, 1, 2, 1, 1, 2], 2)  ); // false
console.log(isEverywhere([2, 1, 2, 2, 2, 1, 1, 2], 2)  ); //false
console.log(isEverywhere([2, 1, 2, 2, 2, 1, 2, 1], 2) ); // true
console.log();

console.log(isEverywhere([2, 1, 2, 1, 2], 2)  ); //true
