/*

Problem: 

	Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

Notes:

	if lengthA is > length B , then extract substring from string A , which is of length (equal to String B length) starting from back.
	if lengthB is > length A , then extract substring from string B , which is of length (equal to String A length) starting from back.

*/



function minCat (strA, strB) {
  
  var lenA = strA.length;
  var lenB = strB.length;
 
  if(lenA > lenB) {
      return  strA.substr(-lenB, lenB) + strB;
     }  
  if(lenA < lenB) {
    return  strA + strB.substr(-lenA, lenA);
  }
   
  return strA + strB;
} 
 

console.log( minCat("Hello", "Hi") ); // loHi
console.log( minCat("Hello", "java") ); // ellojava
console.log( minCat("java", "Hello") ); // javaello


console.log( minCat("abc", "x") ); // "cx"
console.log( minCat("x", "abc") ); // "xc"
console.log( minCat("abc", "") ); // ""




