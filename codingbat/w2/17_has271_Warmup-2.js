/* solution http://codingbat.com/prob/p167430

 Problem:
 
   Given an array of ints, return true if it contains a 2, 7, 1 
   pattern: a value, followed by the value plus 5, followed by the 
   value minus 1. Additionally the 271 counts even if the "1" differs 
   by 2 or less from the correct value.


   
Notes:
  
  check 3 values at a time  with 
  second value as first+5 and 
  diff between actual third and first-1 is less than or equal to 2
  if yes return true
  
  
  
*/
  
  
  function has271 (nums) {
    
      
    for (var i = 0; i < nums.length - 2 ; i++) {
        
      if (nums[i+1] == (nums[i] + 5) &&            
          Math.abs(nums[i+2] - (nums[i]-1)) <= 2 ) { 
        
        return true;
      }      
    }
    return false;
     
  }
  
 console.log( has271([1, 2, 7, 1])); //true
 console.log( has271([1, 2, 8, 1]) ); //false
 console.log( has271([2, 7, 1])  ); //true
 console.log("\n");
 console.log( has271([3, 8, 2])); //true
 console.log( has271([2, 7, 3])  ); //true
 console.log( has271([2, 7, 4])  ); //false
 console.log("\n");
 console.log( has271([2, 7, -1]) ); //true
 console.log( has271([2, 7, -2]) );//false
 console.log( has271([4, 5, 3, 8, 0]) ); //true
 console.log("\n");
 console.log( has271([2, 7, 5, 10, 4])); //true
 console.log( has271([2, 7, -2, 4, 9, 3]) ); //true
 console.log( has271([2, 7, 5, 10, 1])   ); //false
 console.log("\n");
 console.log( has271([2, 7, -2, 4, 10, 2])); //false
 console.log( has271([1, 1, 4, 9, 0])  ); //false
 console.log( has271([1, 1, 4, 9, 4, 9, 2]) ); //true

 


 
 
