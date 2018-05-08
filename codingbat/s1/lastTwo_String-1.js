/*

Problem: 

	Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

Notes:
 
 	save the last 2 chars and append them to the substring.

 */



function lastTwo (str) {
 
 var len = str.length; 
 var temp = str.charAt(len - 2);
 var tempLast = str.charAt(len - 1);
 

 return str.substring(0, len - 2) + tempLast + temp;
  
 
} 
 

console.log( lastTwo ("coding")); //codign
console.log( lastTwo ("cat") ); // cta
console.log( lastTwo ("ab") ); // ba

console.log( lastTwo ("a") ); // a
console.log( lastTwo ("") ); // ""



