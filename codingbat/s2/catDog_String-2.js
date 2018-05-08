/* 
  Problem:
	Return true if the string "cat" and "dog" appear the same number of times in the given string.

   Notes:
   	initialize catcount to zero.
    loop through the string and extract substring from ith index to i+3 index and comapre it to "cat"
    if true increment count.

    initialize dogcount to zero.
    loop through the string and extract substring from ith index to i+3 index and comapre it to "cat"
    if true increment count.

    comapre both counts and return true if they are same.

*/
function catDog (str) {
  
  var countcat = 0, countdog = 0;
  
  
  for (var i = 0; i < str.length; i++ ) {
    if(str.substring(i, i + 3) == "cat") {
      countcat++;   
    } 
  }
  
  for (var i = 0; i < str.length; i++ ) {
    if(str.substring(i, i + 3) == "dog") {
      countdog++;   
    } 
  }
  
  return (countcat == countdog)? true : false;
}



console.log(catDog("catdog"));//true
console.log(catDog("catcat")); //false
console.log(catDog("1cat1cadodog"));//true

console.log(catDog("catxxdogxxxdog")); //false
console.log(catDog("catxdogxdogxca")); //true
console.log(catDog("catxdogxdogxcat"));//false

console.log(catDog("dogdogcat")); // false
console.log(catDog("dogogcat")); // true
console.log(catDog("dog"));//false
console.log(catDog("cat"));//false

console.log(catDog("ca")); //true
console.log(catDog("c"));//true
console.log(catDog(""));//true
