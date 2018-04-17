/* 
Problem:
	We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special. 
	
*/

function specialEleven (n) {
  
   
     return ( n % 11 == 0 || (n - 1) % 11 == 0) ? true:false;
      
   
    
}

console.log(specialEleven(22) ); // true
console.log(specialEleven(23) ); // true
console.log(specialEleven(24) ); // false
console.log();

console.log(specialEleven(21) ); // false
console.log(specialEleven(11) ); // true
console.log(specialEleven(12) ); // true
console.log();

console.log(specialEleven(10) ); // false
console.log(specialEleven(9) ); // false
console.log(specialEleven(8) ); // false
console.log();

console.log(specialEleven(0) ); // true
console.log(specialEleven(1) ); // true
console.log(specialEleven(2) ); // false
console.log();

console.log(specialEleven(121) ); // true
console.log(specialEleven(122) ); // true
console.log(specialEleven(123) ); // false
console.log();

console.log(specialEleven(46) ); // false
console.log(specialEleven(49) ); // false
console.log(specialEleven(52) ); // false
console.log();

console.log(specialEleven(54) ); // false
console.log(specialEleven(55) ); // true
