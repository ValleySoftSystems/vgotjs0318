/*

Problem: 

	Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

Notes:

	find word length
	extract substring of str from 0th index till wordlength
	extract substring of str from 1st index till wordlength

	comapare extracted strings with word and return subs.

*/

function startWord (str, word) {
  
  var wordl = word.length;
  var subs = str.substring(0, wordl);
  var sub = str.substring(1, wordl);

  if( subs == word ) {
     return subs;
  }
  
  if ( sub == word.substring(1, wordl) ) {
      return subs;
  }
  return "";
}



console.log(startWord("hippo", "hi") ); // "hi"
console.log(startWord("hippo", "xip") ); // → "hip"
console.log(startWord("hippo", "i")  ); // "h"

console.log(startWord("hippo", "ix") ); // ""
console.log(startWord("h", "ix") ); // → ""
console.log(startWord("", "i")  ); // ""

console.log(startWord("hip", "zip") ); // "hip"
console.log(startWord("h", "z") ); // → "h"
console.log(startWord("hippo", "xippo")  ); // "hippo"

console.log(startWord("hippo", "xyz") ); // ""
console.log(startWord("hippo", "hip") ); // → "hip"
console.log(startWord("kitten", "cit")  ); // "kit"

console.log(startWord("kit", "cit")); //"kit"
