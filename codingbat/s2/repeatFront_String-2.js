/* 
  Problem:
	Given a string and an int n, return a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on. You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).

   Notes:
   create result as empty string
   	while n is in limits o and length of string
   	extract the string from 0 th index and of length n,append to result
*/

function repeatFront (str, n) {
  
  
  var len = str.length;
  var res = "";
  
  while(n >= 0 && n <= len) {
    
     str = str.substr(0 , n);
     res+=str;
     n--;
   }

     
  return res;
}
  
console.log(repeatFront("Chocolate", 4) );// "ChocChoChC"
console.log(repeatFront("Chocolate", 3)  ); // "ChoChC"
console.log(repeatFront("Ice Cream", 2)  );// "IcI"
console.log();

console.log(repeatFront("Ice Cream", 1));// "I"
console.log(repeatFront("Ice Cream", 0)  ); // ""
console.log(repeatFront("xyz", 3)  );// "xyzxyx"
console.log();

console.log(repeatFront("", 0) );// ""
console.log(repeatFront("Java", 4)  ); // "JavJaJaJ"
console.log(repeatFront("Java", 1)  );// "J"
console.log();

