/* 
Problem:
	Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.
*/

function  closeFar (a, b, c) {
  
 return ( ( Math.abs(a - b) <= 1 &&  (Math.abs(a - c) >= 2) &&  (Math.abs(b - c) >= 2) ) ||
          ( Math.abs(a - c) <= 1 &&  (Math.abs(a - b) >= 2) &&  (Math.abs(b - c) >= 2) ) 
        );
      
}

console.log(closeFar(1, 2, 10) ); // true
console.log(closeFar(1, 2, 3) ); // false
console.log(closeFar(4, 1, 3) ); // true
console.log();

console.log(closeFar(4, 5, 3) ); // false
console.log(closeFar(4, 3, 5) ); // false
console.log(closeFar(-1, 10, 0) ); // true
console.log();

console.log(closeFar(0, -1, 10) ); // true
console.log(closeFar(10, 10, 8) ); // true
console.log(closeFar(10, 8, 9) ); // false
console.log();

console.log(closeFar(8, 9, 10) ); // false
console.log(closeFar(8, 9, 7) ); // false
console.log(closeFar(8, 6, 9) ); // true


