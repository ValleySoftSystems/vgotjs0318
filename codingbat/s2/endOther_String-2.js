/* 
  Problem:

	Given two strings, return true if either of the strings appears at the very end of the other string, 
	ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). 

   Notes:

   	extract substring of  first given string from end which is of length equal to second string and comapre 
   	with second given string 

   	extract substring of  second given string from end which is of length equal to first string and comapre 
   	with first given string
   	
   	if both conditions are true, return true 

*/

function endOther (strA, strB) {
  
  
  strA = strA.toLowerCase();
  strB = strB.toLowerCase();
  
  var lenA = strA.length;
  var lenB = strB.length;
  
   
  if ((strA.substr(-lenB, lenB) == strB) || (strB.substr(-lenA, lenA) == strA) ) {
     return true; 
  }
  
  return false;

 
}

console.log(endOther("Hiabc", "abc"));//true
console.log(endOther("AbC", "HiaBc")); //true
console.log(endOther("abc", "abXabc")  );//true
console.log();

console.log(endOther("Hiabc", "abcd")); //false
console.log(endOther("Hiabc", "bc") ); //true
console.log(endOther("Hiabcx", "bc")  );//false
console.log();

console.log(endOther("abc", "abc")); // true
console.log(endOther("xyz", "12xyz")); // true
console.log(endOther("yz", "12xz") );//false
console.log();

console.log(endOther("Z", "12xz") );//true
console.log(endOther("12", "12")); //true
console.log(endOther("abcXYZ", "abcDEF"));//false
console.log();

console.log(endOther("abcXYZ", "abcDEF"));//false
console.log(endOther("ab", "ab12"));//false
console.log(endOther("ab", "12ab") );//true
