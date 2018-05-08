/* 
  Problem:
	Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.

   Notes:
	find out which string length is more.
	create result as an empty string
	loop through till that length 
	append to result first char + first char+second char + second char +...
	return the result.

*/

function mixString (strA, strB) {
  
  
  var len = (strA.length > strB.length ) ? strA.length: strB.length;
  var res = "";
  
  for(var i = 0; i < len; i++ ) {
    
         
      res += strA.charAt(i) + strB.charAt(i);
    
    
  }
   return res;           
  
}
  
console.log(mixString("abc", "xyz") );//"axbycz"
console.log(mixString("Hi", "There")  ); //"HTihere"
console.log(mixString("xxxx", "There") );//"xTxhxexre"
console.log();

console.log(mixString("xxx", "X") );//"xXxx"
console.log(mixString("2/", "27 around")  ); //"22/7 around"
console.log(mixString("", "Hello") );//"Hello"
console.log();

console.log(mixString("ax", "b") );//"abx"
console.log(mixString("a", "bx")  ); //"abx"
console.log(mixString("So", "Long") );//"SLoong"
console.log();

console.log(mixString("", ""));
console.log(mixString("Long", "So") ); //"LSoong"





