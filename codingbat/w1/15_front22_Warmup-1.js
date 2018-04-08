/*Given a string, take the first 2 chars and return the string with the 2 chars
added at both the front and back, so "kitten" yields"kikittenki". 
If the string length is less than 2, use whatever chars are there.

 */
 function front22 (str) {
   if(str.length > 2){
      return str.substring(0, 2) + str + str.substring(0, 2);
    }
    return str;
 } 
console.log(front22("kitten"));
console.log(front22("ha"));
console.log(front22("valley"));