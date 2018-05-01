/* 
  Problem:
  	Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

  Notes:
  	create result as  empty string
  	loop through the string
  		compare character at ith index with '*' (checks for single * strings)
  		if yes return the result
  		if not, 
  			check length is greater than i and compare character at i-1 th index with '*', 
  			if yes return the result
  		if not, 
  			check length is  less than length  and compare character at i+1 th index with '*', 
  			if yes resturn the result
  		if not 
  			append the character at ith index to result
  	return the result.

*/


function starOut(str) {
  
  var res = "";
  var len = str.length;
  
  for (var i = 0; i < len; i++) {
    
        if (str.charAt(i) == '*') { continue; }
        else if (i > 0 && str.charAt(i - 1) == '*') { continue; }
        else if (i < len - 1 && str.charAt(i + 1) == '*') { continue;}
        else { res+=str.charAt(i); }
   }

   return res;
}



console.log(starOut("ab*cd"));//"ad"
console.log(starOut("ab**cd") ); //"ad"
console.log(starOut("sm*eilly") );//"silly"
console.log();

console.log(starOut("sm*eil*ly"));//"siy"
console.log(starOut("sm***eil*ly") ); //"siy"
console.log(starOut("stringy*") );//"string"
console.log();

console.log(starOut("*stringy"));//"tringy"
console.log(starOut("*str*in*gy") ); //"ty"
console.log(starOut("abc") );//"abc"
console.log();

console.log(starOut("a*bc"));//"c"
console.log(starOut("ab") ); //"ab"
console.log(starOut("a*b") );//""
console.log();

console.log(starOut("a"));//"a"
console.log(starOut("*a") ); //""
console.log(starOut("*") );//""
console.log("");//""