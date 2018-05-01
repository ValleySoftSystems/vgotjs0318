/* 
  Problem:
	Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

  Notes:
  	extract 3 char substring 
  	check first and last chrs of the substring tobe z and p
  	if matched, replace the middle char of substring to empty
  	 repeat these steps for the whole string.

  	 return the string.

*/
function zipZap (str) {
  
  var len = str.length;
  var pattern;
  
  for (var i = 0; i < len ; i++) {
    
    pattern = str.substring(i, i+3);
    
    if (pattern.charAt(0) == 'z' && pattern.charAt(2) == 'p') {
        
        str = str.replace(str.charAt(i + 1) ,"");
      
    }     
  }
  return str; 
}


 
console.log(zipZap("zipXzap") );// "zpXzp"
console.log(zipZap("zopzop") );//zpzp
console.log(zipZap("zzzopzop") );//zzzpzp
console.log();

console.log(zipZap("zibzap") );// "zibzp"
console.log(zipZap("zip") );//zp
console.log(zipZap("zi") );//zi
console.log();

console.log(zipZap("z") );// "z"
console.log(zipZap("") );//""
console.log(zipZap("zzp") );//zp
console.log();

console.log(zipZap("abcppp") );// "abcppp"
console.log(zipZap("azbcppp") );//azbcppp
console.log(zipZap("azbcpzpp") );//azbcpzp
console.log();


