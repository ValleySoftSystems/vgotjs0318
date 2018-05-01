/* 
Problem:
  Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.

Notes:
  
  loop through the array
  	check if the array has 1 starting from index 0.
  	if yes, check for 2 from next index of i.
  	if yes, return true.
  otherwise return false.

  
*/

function has12 (nums) {
 
  var arrayHas12 = false;
  
  for(var i = 0; i < nums.length - 1 ; i++) {
     
    
    if (nums.includes(1)) {
      
       if (nums.includes(2, i + 1)) {
            
            arrayHas12 = true;
       }
            
    } else continue;
     
  }
  return arrayHas12;
}



console.log( has12([1, 3, 2]) ); // true
console.log( has12([3, 1, 2]) ); // true
console.log( has12([3, 1, 4, 5, 2]) ); // true
console.log();

console.log( has12([3, 1, 4, 5, 6]) ); // false
console.log( has12([3, 1, 4, 1, 6, 2]) ); // true
console.log( has12([2, 1, 4, 1, 6, 2]) ); // true
console.log();

console.log( has12([2, 1, 4, 1, 6]) ); // false
console.log( has12([1]) ); // false
console.log( has12([2, 1, 3]) ); // false
console.log();

console.log( has12([2, 1, 3, 2]) ); // true
console.log( has12([2]) ); // false
console.log( has12([3, 2]) ); // false
console.log();

console.log( has12([3, 1, 3, 2]) ); // true


