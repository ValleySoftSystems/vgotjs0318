/* 
Problem:
  
 For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.
   
*/

function pre4 (nums) {
  
   
  for (var i = 0; i < nums.length; i++) {
    
     if(nums[i] == 4 ) {
          
          var result = nums.slice(0, i);
         
          break;
      } 
           
  }
    
  return result;
}

console.log( pre4([1, 2, 4, 1]) ); // [1, 2]
console.log( pre4([3, 1, 4]) ); // [3, 1]
console.log( pre4([1, 4, 4]) ); // [1]
console.log();

console.log( pre4([1, 4, 4, 2]) ); // [1]
console.log( pre4([1, 3, 4, 2, 4]) ); // [1, 3]
console.log( pre4([4, 4]) ); // []
