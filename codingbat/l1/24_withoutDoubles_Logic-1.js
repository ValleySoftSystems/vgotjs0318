/* 
Problem:
	Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true, if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6.
*/
function withoutDoubles  (die1, die2, noDoubles) {
  
  if(noDoubles && die1 == die2){
    if (die1 == 6 || die2 == 6) 
        die1 = 1;
    else die1 ++;
  }
    
  return die1 + die2;
}  
  
console.log(withoutDoubles(2, 3, true) ); // 5
console.log(withoutDoubles(3, 3, true) ); // 7
console.log(withoutDoubles(3, 3, false) ); // 6
console.log();

console.log(withoutDoubles(2, 3, false) ); // 5
console.log(withoutDoubles(5, 4, true) ); // 9
console.log(withoutDoubles(5, 4, false) ); // 9
console.log();

console.log(withoutDoubles(5, 5, true) ); // 11
console.log(withoutDoubles(5, 5, false) ); // 10
console.log(withoutDoubles(6, 6, true) ); // 7
console.log();

console.log(withoutDoubles(6, 6, false) ); // 12
console.log(withoutDoubles(1, 6, true) ); // 7
console.log(withoutDoubles(6, 1, false) ); // 7
