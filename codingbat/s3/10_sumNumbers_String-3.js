
/* 
Problem:
	Given a string, return the sum of the numbers appearing in the string, ignoring all other characters. 
  A number is a series of 1 or more digit chars in a row. 
	
*/

function sumNumbers (str) {
  
  var number = "", sum = 0;
 
  for(var i = 0; i < str.length; i++) {
    //check whether character at ith index is digit or not
    if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57 && str[i] ) {

      //check whether next character is also a digit (to make a number as stated in problem)
      if(str.charCodeAt(i + 1) >= 48 && str.charCodeAt(i + 1) <= 57) {
        
          //collect digits in row together
          number += str[i];
      } else {
         number += str[i]; //collect digits in row
         sum += Number.parseInt(number); //add number to sum
         number = "";   //start making a new number block by resetting to empty    
      }
    }
  }   
  return sum ;
}   

console.log(sumNumbers("abc123xyz") ); // 123
console.log(sumNumbers("aa11b33") ); // 44
console.log(sumNumbers("7 11") ); // 18
console.log();

console.log(sumNumbers("Chocolate") ); // 0
console.log(sumNumbers("5hoco1a1e") ); // 7
console.log(sumNumbers("5$$1;;1!!") ); // 7
console.log();

console.log(sumNumbers("a1234bb11") ); // 1245
console.log(sumNumbers("") ); // 0
console.log(sumNumbers("a22bbb3") ); // 25

