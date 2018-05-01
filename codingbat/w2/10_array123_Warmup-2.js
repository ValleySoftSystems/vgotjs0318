/* solution http://codingbat.com/prob/p136041

 Problem:
 
   Given an array of ints, return true if the sequence of numbers
   1, 2, 3  appears in the array somewhere.

Notes:
 
 loop through the array for evry 3 elements
 check whether array element is equal to 1 and check its next element 
 is equal to 2 and check its next element is equal to 3
 return true 
 
*/
  
  
  function array123 (nums) {
    
    var len = nums.length;
    
    for (var i = 0; i < len - 2 ; i++) {
      
      if( nums[i] == 1 && nums[i+1] == 2 && nums[i+2] == 3 ){
        
            return true;
        
      } 
      
     }
    
    return false;
  }
  



 console.log( array123([1, 1, 2, 3, 1])  ); //true
 console.log( array123([1, 1, 2, 4, 1]) ); //false
 console.log( array123([1, 1, 2, 1, 2, 3]) );//→ true 
 console.log("\n");
 console.log( array123([1, 1, 2, 1, 2, 1])  );// → false
 console.log( array123([1, 2, 3, 1, 2, 3])  );//→ true
 console.log( array123([1, 2, 3])  );//→ true
 console.log("\n");
 console.log( array123([1, 1, 1]) );//→false 
 console.log( array123([1, 2]) );//→ false
 console.log( array123([1])  );//→ false
 console.log("\n");
 console.log( array123([]) );//→ false 
 
 
