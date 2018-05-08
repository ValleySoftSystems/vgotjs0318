/* 
  Problem:
  
   Return the number of times that the string "hi" appears anywhere in the given string.

  Notes:
    
    initialize count to zero.
    loop through the string and extract substring from ith index to i+1 index and comapre it to "hi"
    if true increment count.
        

*/
function countHi (str) {
  
  var count = 0;
  
  
  for (var i = 0; i < str.length; i++ ) {
    if(str.substring(i, i + 2) == "hi") {
      count++;   
    } 
  }
  
  return count;
}

console.log(countHi("abc hi ho"));//1
console.log(countHi("ABChi hi")); //2
console.log(countHi("hihi"));//2

console.log(countHi("hiHIhi")); //2
console.log(countHi("")); //0
console.log(countHi("h")); // 0

console.log(countHi("hi")); // 1
console.log(countHi("Hi is no HI on ahI"));//0
console.log(countHi("hiho not HOHIhi"));//2