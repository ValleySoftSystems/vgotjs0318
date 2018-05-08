/* solution http://codingbat.com/prob/p178318

 Problem:
 
   Given a string, return the count of the number of times 
   that a substring length 2 appears in the string and also 
   as the last 2 chars of the string, so "hixxxhi" yields 1 
   (we won't count the end substring).

Notes:
 
  find substrings of length 2 at end of string
  find the count of occurence of each substring that matches the
  last substring.
  dont include the occurence of last substring
  */
  
  
  function last2 (str) {
       
    var count = 0;
    
    var len = str.length;
    var lastoccur = str. substring(len-2, len);
    
    for (var i = 0; i < len -2 ; i++) {
      
      if(str.substring(i, i+2) == lastoccur) {
        
        count++;
        
      }
    }
    return count;
  }
  
 console.log( last2("hixxhi") ); //1
 console.log( last2("xaxxaxaxx") ); //1
 console.log( last2("axxxaaxx") );//→ 2

 console.log( last2("xxaxxaxxaxx") );// → 3
 console.log( last2("xaxaxaxx") );//→ 0
 console.log( last2("xxxx") );//→ 2

 console.log( last2("13121312") );//→ 1
 console.log( last2("11212") );//→ 1
 console.log( last2("13121311") );//→ 0

 console.log( last2("1717171") );// → 2
 console.log( last2("hi") );// → 0
 console.log( last2("h") );//→ 0

 console.log( last2("") );//→ 0
