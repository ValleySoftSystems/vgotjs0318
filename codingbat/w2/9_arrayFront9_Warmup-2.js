/* solution http://codingbat.com/prob/p186031

 Problem:
 
   Given an array of ints, return true if one of the first 4 
   elements in the array is a 9. 
   The array length may be less than 4.

Notes:
 
  when array length is zero return false
  when length is greater than zero, check whether 9 is there at indices from 0 to 3
  if yes return true, else return false
  
  
  */
  
  
  function arrayFront9 (nums) {
       
        
    var len = nums.length;
    
    if( len == 0) {
      
       return false;
    }
        
    for (var i = 0; i < len ; i++) {
      
      if(nums[i] == 9 || nums[i+1] == 9 || nums[i +2] == 9 || nums[i +3] == 9 ) {
        
        return true;
        
      }
      else
        
        return false;
    }
    
  }
  
 console.log( arrayFront9([1, 2, 9, 3, 4])  ); //true
 console.log( arrayFront9([1, 2, 3, 4, 9]) ); //false
 console.log( arrayFront9([1, 2, 3, 4, 5]) );//→ false
 console.log("\n");
 console.log( arrayFront9([9, 2, 3])  );// → true
 console.log( arrayFront9([1, 9, 9]) );//→ true
 console.log( arrayFront9([1, 2, 3]) );//→ false
 console.log("\n");
 console.log( arrayFront9([1, 9]) );//→true 
 console.log( arrayFront9([5, 5]) );//→ false
 console.log( arrayFront9([2]) );//→ false
 console.log("\n");
 console.log( arrayFront9([]) );//→ false
 console.log( arrayFront9([9]) );//→true 
 console.log( arrayFront9([3,9,2,3,3]) );//→ true
 
 
