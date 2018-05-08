/* 
Problem:
	Given a non-negative number "num", return true if num is within 2 of a multiple of 10. 
*/
function nearTen (n) {
  
   
     return (n % 10 >= 8 || n % 10 <= 2)? true:false;
   
    
}

console.log(nearTen(12) ); // true
console.log(nearTen(17) ); // false
console.log(nearTen(19) ); // true
console.log();

console.log(nearTen(31) ); // true
console.log(nearTen(6) ); // false
console.log(nearTen(10) ); // true
console.log();

console.log(nearTen(11) ); // true
console.log(nearTen(21) ); // true
console.log(nearTen(22) ); // true
console.log();

console.log(nearTen(23) ); // false
console.log(nearTen(54) ); // false
console.log(nearTen(155) ); // false
console.log();

console.log(nearTen(158) ); // true
console.log(nearTen(3) ); // false
console.log(nearTen(1) ); // true
