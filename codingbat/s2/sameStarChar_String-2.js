/* 
  Problem:
	Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.

   Notes:
   	find * , check its before index and after index

*/

function sameStarChar (str) {
  
var len = str.length;
  
  for(var i = 1; i < len -1 ; i++){ 
    
    if (str.charAt(i) == '*' && str.charAt(i-1) != str.charAt(i+1)){
      
      return false;
      
    }
    
  }
  return true;
}
     

console.log(sameStarChar("xy*yzz"));// true
console.log(sameStarChar("xy*zzz")); //false
console.log(sameStarChar("*xa*az") ); //true
console.log("");

console.log(sameStarChar("*xa*bz"));// false
console.log(sameStarChar("*xa*a*")); //true
console.log(sameStarChar("") ); //true
console.log("");

console.log(sameStarChar("*xa*a*a"));// true
console.log(sameStarChar("*xa*a*b")); //false
console.log(sameStarChar("*12*2*2") ); //true
console.log("");

console.log(sameStarChar("12*2*3*"));// false
console.log(sameStarChar("abcDEF")); //true
console.log(sameStarChar("XY*YYYY*Z*") ); //false
console.log("");

console.log(sameStarChar("XY*YYYY*Y*"));// true
console.log(sameStarChar("12*2*3*")); //false
console.log(sameStarChar("*") ); //true
console.log("");

console.log(sameStarChar("**")); //true


