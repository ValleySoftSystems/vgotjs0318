/* solution http://codingbat.com/prob/p126212

 Problem:
 
   Suppose the string "yak" is unlucky. Given a string, return a version 
   where all the "yak" are removed, but the "a" can be any char. The "yak" 
   strings will not overlap.

Notes:
  
  start checking "yak" at i th and i+2 th indices
  if yes increment index by 2
  if not append the char at ith index to result.
  
*/
  
  
  function stringYak (str) {
    
    var result = "";
    
    for (var i = 0; i < str.length; i++) {
    // Look for i starting a "yak" -- advance i in that case
      if (i + 2 < str.length && str.charAt(i)=='y' && str.charAt(i+2)=='k') {
        
          i =  i + 2;
        
      } else { // Otherwise do the normal append
        
        result = result + str.charAt(i);
        
      }
    }
  
  return result;
  }
  
 console.log( stringYak("yakpak") ); //"pak"
 console.log( stringYak("pakyak")  ); //"pak"
 console.log( stringYak("yak123ya") ); //"123ya"

 console.log( stringYak("yak") ); //""
 console.log( stringYak("yakxxxyak") ); //"xxx"
 console.log( stringYak("HiyakHi") ); //"HiHi"

 console.log( stringYak("xxxyakyyyakzzz") ); //"xxxyyzzz"
 

 
