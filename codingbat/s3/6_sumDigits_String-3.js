/* 
Problem:
	Given a string, return the sum of the digits 0-9 that appear in the string, ignoring all other characters. Return 0 if there are no digits in the string. (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'. Integer.parseInt(string) converts a string to an int.)
*/



function sumDigits (str) {
  
  
  var digitSum = 0 ;
  
  for( var i = 0; i < str.length;i++) {
           
    if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57 )
        
        digitSum += Number.parseInt(str[i]);
  }
 
  return digitSum;
}




console.log(sumDigits("aa1bc2d3") ); // 6
console.log(sumDigits("aa11b33") ); // 8
console.log(sumDigits("Chocolate") ); // 0
console.log();

console.log(sumDigits("5hoco1a1e") ); // 7
console.log(sumDigits("123abc123") ); // 12
console.log(sumDigits("") ); // 0
console.log();

console.log(sumDigits("Hello") ); // 0
console.log(sumDigits("X1z9b2") ); // 12
console.log(sumDigits("5432a") ); // 14


