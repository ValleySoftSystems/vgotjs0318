/* 
Problem:
	Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.
*/

function evenlySpaced(a, b, c) {
  
  var small, medium, large;
  
  if (a == b && b == c && c == a ) return true;
  
  if(a > b && a > c) large = a;
  if(b > a && b > c) large = b;
  if(c > a && c > b) large = c;
  
  if(a < b && a < c) small = a;
  if(b < a && b < c) small = b;
  if(c < a && c < b) small = c;
   
  if(small == a && large == b) medium = c;
  if(small == a && large == c) medium = b;
  
  if(small == b && large == a) medium = c;
  if(small == b && large == c) medium = a;
  
  if(small == c && large == a) medium = b;
  if(small == c && large == b) medium = a;
  
  
  return ((small - medium)==(medium -large));
  
    
}

console.log(evenlySpaced(2, 4, 6) ); // true
console.log(evenlySpaced(4, 6, 2) ); // true
console.log(evenlySpaced(4, 6, 3) ); // false
console.log();

console.log(evenlySpaced(6, 2, 4) ); // true
console.log(evenlySpaced(6, 2, 8) ); // false
console.log(evenlySpaced(2, 2, 2) ); // true
console.log();

console.log(evenlySpaced(2, 2, 3) ); // false
console.log(evenlySpaced(9, 10, 11) ); // true
console.log(evenlySpaced(10, 9, 11) ); // true
console.log();

console.log(evenlySpaced(10, 9, 9) ); // false
console.log(evenlySpaced(2, 4, 4) ); // false
console.log(evenlySpaced(2, 2, 4) ); // false
console.log();

console.log(evenlySpaced(3, 6, 12) ); // false
console.log(evenlySpaced(12, 3, 6) ); // false

