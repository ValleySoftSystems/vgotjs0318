/* 

  Problem:
  
    Given a string and an index, return a string length 2 starting at the given index. 
    If the index is too big or too small to define a string length 2, use the first 2 
    chars. The string length will be at least 2.

  Notes:
    
    find length of string
    create an empty string.
    extract substring of length 2 starting from index 2.
    if the resulted string length is less than 2, then extract the the substring 
    starting from index 0  which is of length 2.
    

*/

function twoChar (str, n) {
 
 var l = str.length;
 var res = "";
  
 if(l >= 2 ) {
    res = str.substr(n, 2) ;
   
 } 
  
 if (res.length < 2) {
      res = str.substr(0, 2);
    
 }
 return res;
  
}

console.log(twoChar ("java", 0)); 
console.log(twoChar ("java", 2)); 
console.log(twoChar ("java", 3)); 

console.log(twoChar  ("java", 4)); 
console.log(twoChar  ("java", -1)); 
console.log(twoChar  ("Hello", 0)); 

console.log(twoChar  ("Hello", 1));
console.log(twoChar  ("Hello", 99));
console.log(twoChar  ("Hello", 3));

console.log(twoChar  ("Hello", 4)); 
console.log(twoChar  ("Hello", 5));
console.log(twoChar  ("Hello", -7));

console.log(twoChar  ("Hello", 6));
console.log(twoChar  ("Hello", -1)); 
console.log(twoChar  ("yay", 0));

