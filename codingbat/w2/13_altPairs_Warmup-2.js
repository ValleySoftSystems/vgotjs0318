/* solution http://codingbat.com/prob/p121596

 Problem:
 
   Given a string, return a string made of the chars at indexes 
   0,1, 4,5, 8,9 ... so "kittens" yields "kien".

Notes:
  
  iterate through str
  start from index 0 till length , by incrementing to 4th index
  append the result of ith element and i+1 th element 
  return the result
  
*/
  
  
  function altPairs (str) {
    
    var res ="";
    
    for (var i= 0; i< str.length; i+=4) {
      
      res += str.charAt(i) + str.charAt(i+1) ;
    }
    
    return res;
  }
  
 console.log( altPairs("kitten") ); //"kien"
 console.log( altPairs("Chocolate") ); //"Chole"
 console.log( altPairs("CodingHorror") ); //"Congrr"

 console.log( altPairs("yak") ); //"ya"
 console.log( altPairs("ya") ); //"ya"
 console.log( altPairs("y") ); //"y"

 console.log( altPairs("") ); //""
 console.log( altPairs("ThisThatTheOther") ); //"ThThThth"

 
