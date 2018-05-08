/* 
Problem:
	Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).
*/

function equalIsNot(str) {
   
  var isCount = 0, notCount = 0;
  
  for( var i = 0; i < str.length;i++) {
    
    if(str.substring(i, i+2) == "is") isCount++; //check for "is" 
    
    if(str.substring(i, i+3) == "not") notCount++; //check for "not"
    
  }
 
  return (isCount == notCount)? true:false;
}

console.log(equalIsNot("This is not") ); // false
console.log(equalIsNot("This is notnot") ); // true
console.log(equalIsNot("noisxxnotyynotxisi") ); // true
console.log();

console.log(equalIsNot("noisxxnotyynotxsi") ); // false
console.log(equalIsNot("xxxyyyzzzintint") ); // true
console.log(equalIsNot("") ); // true
console.log();

console.log(equalIsNot("isisnotnot") ); // true
console.log(equalIsNot("isisnotno7Not") ); // false
console.log(equalIsNot("isnotis") ); // false
console.log();

console.log(equalIsNot("mis3notpotbotis") ); // false
