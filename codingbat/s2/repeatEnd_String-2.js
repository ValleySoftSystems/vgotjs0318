/* 
  Problem:
	Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.

   Notes:
   	find length of string
   	create an empty string
   	check limits of n between 0 to length and extract the substring of length equal to n and starting from index length-n
   	append substring to empty string n times

*/

function repeatEnd (str, n) {
  
  
  var len = str.length;
  var res = "";
  
  if( 0 < n < len) {
    
     str = str.substr(len - n , n);
   }

   while( n > 0) {

     res+=str;
     n--;
   }
  
  return res;
}
  
console.log(repeatEnd("Hello", 3) );// "llollollo"
console.log(repeatEnd("Hello", 2) ); // "lolo"
console.log(repeatEnd("Hello", 1) );// "o"
console.log();

console.log(repeatEnd("Hello", 0) );// ""
console.log(repeatEnd("abc", 3) ); // "abcabcabc"
console.log(repeatEnd("1234", 2) );// "3434"
console.log();

console.log(repeatEnd("1234", 3) );// "234234234"
console.log(repeatEnd("Hello", 2) ); // "lolo"
console.log(repeatEnd("", 0) );// ""
console.log();

