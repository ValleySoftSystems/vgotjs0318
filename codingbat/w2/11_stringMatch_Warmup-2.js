/* solution http://codingbat.com/prob/p171260

 Problem:
 
   Given 2 strings, a and b, return the number of the positions where they 
   contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, 
   since the "xx", "aa", and "az" substrings appear in the same place in both 
   strings.

Notes:
 
  find minimum length.
  loop through the min. length -1 
  check substr of stra and strb are same which start at index 0 and of 
  length 2. If yes, increment the count.
  return the count
 
*/
  
  
  function stringMatch (stra, strb) {
    
    var len = (stra.length < strb.length)? stra.length:strb.length;
    
    var count = 0;
    
    for (var i = 0; i < len - 1  ; i++) {
      
      if (stra.substr(i, 2) == strb.substr(i, 2)) {

            count++;
   
      }
      
    }
    
    return count;
  }
  
 console.log( stringMatch("xxcaazz", "xxbaaz") ); //3
 console.log( stringMatch("abc", "abc") ); //2
 console.log( stringMatch("abc", "axc") ); //0

 console.log( stringMatch("hello", "he") ); //1
 console.log( stringMatch("he", "hello") ); //1
 console.log( stringMatch("h", "hello") ); //0

 console.log( stringMatch("", "hello") ); //0
 console.log( stringMatch("aabbccdd", "abbbxxd") ); //1
 console.log( stringMatch("aaxxaaxx", "iaxxai") ); //3

 console.log( stringMatch("iaxxai", "aaxxaaxx") ); //3 
 
 
