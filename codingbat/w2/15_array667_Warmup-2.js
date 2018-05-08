/* solution http://codingbat.com/prob/p110019

 Problem:
 
   Given an array of ints, return the number of times that two 6's are next to
   each other in the array. Also count instances where the second "6" is 
   actually a 7.
   
Notes:
  
  initialize count to zero.
  iterate through array667check ith index has 6 or not
  and i+1th index has either 6 or 7.
  increment count if yes
  return count
  
*/
  
  
  function array667 (nums) {
    
    var count = 0;
    
    for (var i = 0; i < nums.length; i++) {
    
        if(nums[i] == 6 && (nums[i+1] ==6 || nums[i+1]==7) ) {
          
          count++;
          
        }
      
    }
    
    return count;
  
  }
  
 console.log( array667([6, 6, 2]) ); //1
 console.log( array667([6, 6, 2, 6]) ); //1
 console.log( array667([6, 7, 2, 6])  ); //1

 console.log( array667([6, 6, 2, 6, 7]) ); //2
 console.log( array667([1, 6, 3]) ); //0
 console.log( array667([6, 1]) ); //0

 console.log( array667([]) ); //0
 console.log( array667([3, 6, 7, 6]) );//1
 console.log( array667([3, 6, 6, 7]) ); //2

 console.log( array667([6, 3, 6, 6]) );//1
 console.log( array667([6, 7, 6, 6]) );//2
 console.log( array667([1, 2, 3, 5, 6]) );//0

 console.log( array667([1, 2, 3, 6, 6]) ); //1

 
