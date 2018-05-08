/* 
  Problem:
	Return the number of times that the string "code" appears anywhere in the given string, 
	except we'll accept any letter for the 'd', so "cope" and "cooe" count.

   Notes:
   	declare count to 0.
   	extract substring of given string from i to i+4 and 
   	check the first 2 chars of substring are equal to "co" and last char to "e"
   	if yes increment count

   	return count.
   	
*/
function countCode (str) {
  
  var count = 0;
  
  
  for (var i = 0; i < str.length; i++ ) {
    
    var strcode = str.substring(i, i + 4);
    
    if( strcode.substring(0, 2)=="co" && strcode.charAt(3)=='e') {
      count++;   
    }
    
  }
  
    
  return count;
}



console.log(countCode("aaacodebbb"));//1
console.log(countCode("codexxcode")); //2
console.log(countCode("cozexxcope") );//2
console.log();

console.log(countCode("cozfxxcope")); //1
console.log(countCode("xxcozeyycop") ); //1
console.log(countCode("cozcop") );//0
console.log();

console.log(countCode("abcxyz")); // 0
console.log(countCode("code") ); // 1
console.log(countCode("ode") );//0
console.log();

console.log(countCode("c") );//0
console.log(countCode("")); //0
console.log(countCode("AAcodeBBcoleCCccoreDD"));//3
console.log();

console.log(countCode("AAcodeBBcoleCCccorfDD"));//2
console.log(countCode("coAcodeBcoleccoreDD"));//3
