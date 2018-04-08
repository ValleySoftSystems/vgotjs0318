/* 
  Problem:
	
	Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

   Notes:

   	Create an empty string result variable
   	lop through the string and extract the substring of 3 chars and assign it to result
   	check whether first and last char of result are equal to 'b'
   	if yes, return true
   	
*/
function bobThere (str) {
  
  var len = str.length;
  var sub = "";
  
  for( var i = 0; i < len ; i++) {
    
    sub = str.substring(i, i + 3);
               
    if (sub.charAt(0)=='b' && sub.charAt(2)=='b') {
      return true;
    } 
        
  }
  return false;
}
  
console.log(bobThere("abcbob"));//true
console.log(bobThere("b9b")); //true
console.log(bobThere("bac"));//false
console.log();

console.log(bobThere("bbb")); //true
console.log(bobThere("abcdefb") ); //false
console.log(bobThere("123abcbcdbabxyz")  );//true
console.log();

console.log(bobThere("b12")); // false
console.log(bobThere("b1b")); // true
console.log(bobThere("b12b1b"));//true
console.log();

console.log(bobThere("bbc")  );//false
console.log(bobThere("bbb") ); //true
console.log(bobThere("bb"));//false
console.log();

console.log(bobThere("b") );//false



