/*

Problem: 

	Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. 
	The string may be any length. Harder than it looks.

Notes:

	check charAt 0th and 1st index to be 'a' and 'b'
	if yes keep them in result
	if not remove them.

*/


function deFront (str) {
  
  var res = str.substring(2, str.length);
  
  if(str.charAt(0) == 'a' && str.charAt(1) == 'b') {
     return str;
  }
  
  if (str.charAt(0) == 'a' ){
    return 'a'+ res ;
    
  }
      
  if( str.charAt(1) == 'b') {
    return 'b' + res;
  }
  
  
  return res;
  
  
}



console.log( deFront("Hello") ); // "llo"
console.log( deFront("java") ); // "va"
console.log( deFront("away") ); // "aay"

console.log( deFront("axy") ); // "ay"
console.log( deFront("abc") ); // "abc"
console.log( deFront("xby") ); // "by"

console.log( deFront("ab") ); // "ab"
console.log( deFront("ax") ); // "a"
console.log( deFront("axb") ); // "ab"

console.log( deFront("aaa") ); // "aa"
console.log( deFront("xbc") ); // "bc"
console.log( deFront("bbb") ); // "bb"

console.log( deFront("bazz") ); // "zz"
console.log( deFront("ba")); //""
console.log( deFront("abxyz") ); // "abxyz"
console.log( deFront("hi") ); // ""

console.log( deFront("his") ); // "s"
console.log( deFront("xz") ); // ""
console.log( deFront("zzz") ); // "z"

