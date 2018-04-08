/* 
  Problem:
	Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder than it looks.

   Notes:
   	extract the substring and check with "xyz"
   	if yes, extract the front and back substrings of xyz and comapre the lengths 
   	if absolute difference is less than or equal to one, then xyz is in middle
   	return true.
*/
function xyzMiddle (str) {
  

  var front = "", back = "";
  

  for( var i = 0  ; i < str.length ; i++) {
    
    if (str.substring(i, i+3) == "xyz") {
             
       front = str.substring(0,i);
       back = str.substring(i+3, str.length);
      
       if(Math.abs(front.length - back.length) <= 1) {
         return true;
       }
    
    }
    
  }
  return false;
}
  
console.log(xyzMiddle("AAxyzBB") );// true
console.log(xyzMiddle("AxyzBB")); // true
console.log(xyzMiddle("AxyzBBB")  );//  false
console.log();

console.log(xyzMiddle("AxyzBBBB") );// false
console.log(xyzMiddle("AAAxyzB")); // false
console.log(xyzMiddle("AAAxyzBB")  );//  true
console.log();

console.log(xyzMiddle("AAAAxyzBB") );// false
console.log(xyzMiddle("AAAAAxyzBBB")); // false
console.log(xyzMiddle("1x345xyz12x4")  );//  true
console.log();

console.log(xyzMiddle("xyzAxyzBBB") );// true
console.log(xyzMiddle("xyzAxyzBxyz")); // true
console.log(xyzMiddle("xyzxyzAxyzBxyzxyz")  );//  true
console.log();

console.log(xyzMiddle("xyzxyzxyzBxyzxyz") );// true
console.log(xyzMiddle("xyzxyzAxyzxyzxyz")); // true
console.log(xyzMiddle("xyzxyzAxyzxyzxy")  );//  false
console.log();

console.log(xyzMiddle("AxyzxyzBB") );// false
console.log(xyzMiddle("")); // false
console.log(xyzMiddle("x")  );//  false
console.log();

console.log(xyzMiddle("xy") );// false
console.log(xyzMiddle("xyz")); // true
console.log(xyzMiddle("xyzz")  );//  true
console.log();



