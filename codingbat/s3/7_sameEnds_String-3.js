/*
	Given a string, return the longest substring that appears at both the beginning and end of the string without overlapping. For example, sameEnds("abXab") is "ab". 
*/
function sameEnds (str) {
   
  var result = "";
  var l = str.length;
  //largest substring that can appear at both end and beginning can be of half the original length

  for (var i = 0; i <= l/ 2; i++) //start searching from beginning of string till middle of string.
        for (var j = l/ 2; j < l; j++) //start searching from middle of string till end of string
            if (str.substring(0, i) == str.substring(j) ) 
                result = str.substring(0, i);
  return result;
 
  
}
  
console.log(sameEnds("abXYab")); // "ab"
console.log(sameEnds("xx")); // "x"
console.log(sameEnds("xxx")); // "x"
console.log();

console.log(sameEnds("xxxx")); // "xx"
console.log(sameEnds("javaXYZjava")); // "java"
console.log(sameEnds("javajava")); // "java"
console.log();

console.log(sameEnds("xavaXYZjava")); // ""
console.log(sameEnds("Hello! and Hello!")); // "Hello!"
console.log(sameEnds("x")); // ""
console.log();

console.log(sameEnds("")); // ""
console.log(sameEnds("abcb")); // ""
console.log(sameEnds("mymmy")); // "my"

