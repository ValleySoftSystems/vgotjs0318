/* 
Problem:
	Given a number n, return true if n is in the range 1..10, inclusive. Unless outsideMode is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.	

*/
function in1To10 (n, outsideMode) {
  
   if(!outsideMode) 
     return ( n >= 1 && n <= 10)? true:false;
      
   else 
     return (n <= 1 || n >= 10)?true : false;
    
}

console.log(in1To10(5, false) ); // true
console.log(in1To10(11, false) ); // false
console.log(in1To10(11, true) ); // true
console.log();

console.log(in1To10(10, false) ); // true
console.log(in1To10(10, true) ); // true
console.log(in1To10(9, false) ); // true
console.log();

console.log(in1To10(9, true) ); // false
console.log(in1To10(1, false) ); // true
console.log(in1To10(1, true) ); // true
console.log();

console.log(in1To10(0, false) ); // false
console.log(in1To10(0, true) ); // true
console.log(in1To10(-1, false) ); // false
console.log();

console.log(in1To10(-1, true) ); // true
console.log(in1To10(99, false) ); // false
console.log(in1To10(-99, true) ); // true

