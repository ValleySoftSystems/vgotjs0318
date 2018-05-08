/* 
Problem:
	We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.
*/

function countTriple(str) {
 
  
  var tripleCount = 0;
  
  for( var i = 0; i < str.length;i++) {
           
    if(str[i] == str[i + 1] && str[i + 1] == str[i + 2] )
        
        tripleCount++;
     
  }
 
  return tripleCount;
}



console.log(countTriple("abcXXXabc") ); // 1
console.log(countTriple("xxxabyyyycd") ); // 3
console.log(countTriple("a") ); // 0
console.log();

console.log(countTriple("") ); // 0
console.log(countTriple("XXXabc") ); // 1
console.log(countTriple("XXXXabc") ); // 2
console.log();

console.log(countTriple("XXXXXabc") ); // 3
console.log(countTriple("222abyyycdXXX") ); // 3
console.log(countTriple("abYYYabXXXXXab") ); // 4
console.log();

console.log(countTriple("abYYXabXXYXXab") ); // 0
console.log(countTriple("abYYXabXXYXXab") ); // 0
console.log(countTriple("122abhhh2") ); // 1
