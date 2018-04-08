/*

Problem:
	Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of fewer than 3 chars at the end.

Notes:
	extract the substring of 2 chars except the first one and append to result
	extract the first char and append to result

	repeat above two steps till length of string.
*/

function oneTwo (str) {
  
  var res = "";
  var len = str.length;
  for (var i = 0; i < len-2; i++) {
    
    if (i == 0 || i % 3 == 0) {
      
      res += str.substring(i + 1, i + 3);
      res += str.charAt(i);
      
    }
  }
  return res;   
}


 
console.log(oneTwo("abc"));// "bca"
console.log(oneTwo("tca")); //"cat"
console.log(oneTwo("tcagdo") ); // "catdog"
console.log("");

console.log(oneTwo("chocolate") );// "hocolctea"
console.log(oneTwo("1234567890")); //"231564897"
console.log(oneTwo("xabxabxabxabxabxabxab") ); // "abxabxabxabxabxabxabx"
console.log("");

console.log(oneTwo("abcdefx"));// "bcaefd"
console.log(oneTwo("abcdefxy")); //"bcaefd"
console.log(oneTwo("abcdefxyz") ); // "bcaefdyzx"
console.log("");

console.log(oneTwo(""));// ""
console.log(oneTwo("x")); //""
console.log(oneTwo("xy") ); // ""
console.log("");

console.log(oneTwo("xyz"));// "yzx"
console.log(oneTwo("abcdefghijklkmnopqrstuvwxyz1234567890")); //"bcaefdhigkljmnkpqostrvwuyzx231564897"
console.log(oneTwo("abcdefghijklkmnopqrstuvwxyz123456789") ); // "bcaefdhigkljmnkpqostrvwuyzx231564897"
console.log("");

console.log(oneTwo("abcdefghijklkmnopqrstuvwxyz12345678"));// "bcaefdhigkljmnkpqostrvwuyzx231564"




