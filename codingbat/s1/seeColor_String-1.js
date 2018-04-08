/*

Problem: 

	Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

Notes:
 
 	extract substrings from 0 to 3 indices and check with red, return red if true
 	extract substrings from 0 to 4 indices and check with blue, return blue if true
 	return empty string if both conditions fail
 	

 */


function seeColor (str) {
 
 if (str.substring(0, 3) == "red" )
   return "red";
 if (str.substring(0, 4) == "blue") 
   return "blue";
       
 return "";
     
 
} 
 
console.log("*********");
console.log( seeColor("xxred") ); // ""
console.log( seeColor("a") ); // ""
console.log( seeColor("") ); // ""
console.log( seeColor("xyzred") ); // ""
console.log( seeColor("re")); //""
console.log( seeColor("blu") ); // ""
console.log("*********");

console.log( seeColor("redxx")); //red
console.log( seeColor("blueTimes") ); // blue
console.log( seeColor("red") ); // red
console.log( seeColor("blue") ); // blue





