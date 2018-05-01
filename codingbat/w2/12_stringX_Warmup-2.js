/* solution http://codingbat.com/prob/p171260

 Problem:
 
   Given a string, return a version where all the "x" have been removed.
   Except an "x" at the very start or end should not be removed.



Notes:
 
  loop through the string
  when x is found at start and end of string , ignore it
  when x is found in between start and end , replace it with empty string
*/
  
  
  function stringX (str) {
    
    var len = str.length;
    
    var res = "" ;
    for (var i = 0; i < len ; i++) {
      // Only append the char if it is not the "x" case
      if (!(i > 0 && i < (len - 1) && ( str.substring(i, i+1) == "x")) ) {
          res = res + str.substring(i, i+1); 
      }
      
    }
    return res;
  }
  
 console.log( stringX("xxHxix")  ); //"xHix"
 console.log( stringX("abxxxcd") ); //"abcd"
 console.log( stringX("xabxxxcdx") );//→ "xabcdx"

 console.log( stringX("xKittenx") );// → "xKittenx"
 console.log( stringX("Hello") );//→ "Hello"
 console.log( stringX("xx") );//→ "xx"

 console.log( stringX("x") );//→"x" 
 console.log( stringX("") );//→ ""
 
 
 
