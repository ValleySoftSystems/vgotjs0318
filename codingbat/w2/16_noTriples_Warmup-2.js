/* solution http://codingbat.com/prob/p170221

 Problem:
 
   Given an array of ints, we'll say that a triple is a value appearing 3 
   times in a row in the array. Return true if the array does not contain 
   any triples.
   
Notes:
  
  loop through the array so that 0th, 1st and 2nd indice elements can be 
  checked
  if 0th element is equal to following next 2 elements return false.
  if not return true.
  
  
*/
  
  
  function noTriples (nums) {
    
      
    for (var i = 0; i < nums.length - 2; i++) {
        
        if((nums[i] == nums[i+1] ) && ( nums[i] == nums[i+2] ) ){
          
          
          return false;
       
        }
      
    }
    return true;
     
  }
  
 console.log( noTriples([1, 1, 2, 2, 1])); //true
 console.log( noTriples([1, 1, 2, 2, 2, 1]) ); //false
 console.log( noTriples([1, 1, 1, 2, 2, 2, 1]) ); //false

 console.log( noTriples([1, 1, 2, 2, 1, 2, 1])); //true
 console.log( noTriples([1, 2, 1])  ); //true
 console.log( noTriples([1, 1, 1])  ); //false

 console.log( noTriples([1, 1]) ); //true
 console.log( noTriples([1]) );//true
 console.log( noTriples([]) ); //true

 
 
