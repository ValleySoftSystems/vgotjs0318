/* solution http://codingbat.com/prob/p184031

 Problem:
 
   Given an array of ints, return the number of 9's in the array.

Notes:
 
  compare each element of array with 9
  if yes increment count and return it.
  
  */
  
  
  function arrayCount9 (nums) {
       
    var count = 0;
    
    var len = nums.length;
        
    for (var i = 0; i < len ; i++) {
      
      if(nums[i] == 9) {
        
        count++;
        
      }
    }
    return count;
  }
  
 console.log( arrayCount9([1, 2, 9])  ); //1
 console.log( arrayCount9([1, 9, 9])  ); //2
 console.log( arrayCount9([1, 9, 9, 3, 9]));//→ 3

 console.log( arrayCount9([1, 2, 3])  );// → 0
 console.log( arrayCount9([]) );//→ 0
 console.log( arrayCount9([4, 2, 4, 3, 1]) );//→ 0

 console.log( arrayCount9([9, 2, 4, 3, 1]) );//→ 1
 
