/* 
  Problem:
	Return true if the given string contains an appearance of "xyz"
	 where the xyz is not directly preceeded by a period (.). 
	 So "xxyz" counts but "x.xyz" does not.

   Notes:
	extract the substring and comapre with "xyz", if true check that substring is preceded by "."
	if yes, then return false.
	if not return true.

*/
function xyzThere (str) {
  
  var len = str.length;
  
  for( var i = 0; i < len; i++) {
    
    if (str.substring(i, i + 3) == "xyz" ) {
      
      if (str.charAt(i - 1) == '.') {
            continue;
      } 
      return true;
    }
    
  }
  return false;
 
}


console.log(xyzThere("abcxyz"));//true
console.log(xyzThere("abc.xyz")); //false
console.log(xyzThere("xyz.abc"));//true
console.log();

console.log(xyzThere("abcxy")); //false
console.log(xyzThere("xyz") ); //true
console.log(xyzThere("xy") );//false
console.log();

console.log(xyzThere("x") ); // false
console.log(xyzThere("")); // false
console.log(xyzThere("abc.xyzxyz"));//true
console.log();

console.log(xyzThere("abc.xxyz") );//true
console.log(xyzThere(".xyz")); //false
console.log(xyzThere("12.xyz"));//false
console.log();

console.log(xyzThere("12xyz"));//true
console.log(xyzThere("1.xyz.xyz2.xyz") );//false

