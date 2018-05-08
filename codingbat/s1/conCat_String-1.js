/*

Problem: 
  
 Given two strings, append them together (known as "concatenation") and return the result. However,
 if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".
   
Notes:
  
  if first string's last char and second string's first char are matching, 
  extract the substring og second string from index 1 to length and append it to first string.
  
*/

function conCat (strA, strB) {
 
   
  if (strA.charAt(strA.length -1 ) == strB.charAt(0) ) {
    return strA + strB.substring(1, strB.length );
      
  } 
  
  return strA + strB;
 
} 
 

console.log( conCat ("abc", "cat") ); // abcat
console.log( conCat ("dog", "cat") ); // dogcat
console.log( conCat ("abc", "") ); // abc

console.log( conCat ("", "cat") ); // cat
console.log( conCat ("pig", "g") ); // pig
console.log( conCat ("pig", "doggy") ); // pigdoggy


