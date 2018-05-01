/*

Problem: 
  Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". 
  The string length will be at least 3.
  
Notes:
  
  
  
  
*/

function middleThree (str) {
 
  var len = str.length;
  var midindex = (len)/2;
  
  if(str.length>= 3 ) {
     
    return str.substr(midindex - 1, 3);
    
  }
 
} 
 

console.log( middleThree("Candy") ); // "and"
console.log( middleThree("and") );  //"and"
console.log( middleThree("solving") ); //"lvi"

console.log( middleThree("Hi yet Hi") );// "yet"
console.log( middleThree("java yet java") ); // "yet"
console.log( middleThree("Chocolate") ); // "col"

console.log( middleThree("XabcxyzabcX") ); //"xyz"
