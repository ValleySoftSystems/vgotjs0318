/* 
  Problem:
	Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().

   Notes:
   	extract substring of length n starting from index 0
   	loop through rest of array starting from nth index and search for substring
   	if yes , return true.
*/
function prefixAgain (str, n) {
  

  var res = str.substr(0, n);
  

  for( var i = n  ; i < str.length ; i++) {
    
    if (str.substr(i, n) == res) {
      return true;
    }
    
  }
  return false;
}
  
console.log(prefixAgain("abXYabc", 1)  );// true
console.log(prefixAgain("abXYabc", 2)  ); // true
console.log(prefixAgain("abXYabc", 3)  );//  false
console.log();


console.log(prefixAgain("xyzxyxyxy", 2)  );// true
console.log(prefixAgain("xyzxyxyxy", 3)  ); // false
console.log(prefixAgain("Hi12345Hi6789Hi10", 1)  );//  true
console.log();

console.log(prefixAgain("Hi12345Hi6789Hi10", 2)  );// true
console.log(prefixAgain("Hi12345Hi6789Hi10", 3)  ); // true
console.log(prefixAgain("Hi12345Hi6789Hi10", 4)  );//  false
console.log();

console.log(prefixAgain("a", 1)  );// false
console.log(prefixAgain("aa", 1)  ); // true
console.log(prefixAgain("ab", 1)  );//  false
console.log();

