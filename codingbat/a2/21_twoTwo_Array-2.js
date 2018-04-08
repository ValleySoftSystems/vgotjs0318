/* 
Problem:
  
Given an array of ints, return true if every 2 that appears in the array is next to another 2

Notes:
  loop through the array
  if 2 is found at ith index, 
  	then check for 2 in before and after index. if yes return true.
  	if not return false.
  else continue the loop.
    
*/

function twoTwo (nums) {
 
  var hastwoTwo = true;
  
  for(var i = 0; i < nums.length  ; i++) {
    
    if (nums[i] == 2) {
        
        if (nums[i+1] == 2  || nums[i-1] == 2 ){
                   
              hastwoTwo = true;
              
        } else hastwoTwo = false;
        
    } else continue;
   
  }
 
  return (hastwoTwo ); 
}




console.log( twoTwo([4, 2, 2, 3]) ); // true
console.log( twoTwo([2, 2, 4]) ); // true
console.log( twoTwo([2, 2, 4, 2]) ); // false
console.log();

console.log( twoTwo([1, 3, 4]) ); // true
console.log( twoTwo([1, 2, 2, 3, 4]) ); // true
console.log( twoTwo([1, 2, 3, 4]) ); // false
console.log();

console.log( twoTwo([2, 2]) ); // true
console.log( twoTwo([2, 2, 7]) ); // true
console.log( twoTwo([2, 2, 7, 2, 1]) ); // false
console.log();

console.log( twoTwo([4, 2, 2, 2]) ); // true
console.log( twoTwo([2, 2, 2]) ); // true
console.log( twoTwo([1, 2]) ); // false









