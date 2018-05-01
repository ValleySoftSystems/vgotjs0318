/*solution to http://codingbat.com/prob/p177372

Problem: 
  Given 2 positive int values, return the larger value that is in the range 10..20 
  inclusive, or return 0 if neither is in that range.
  
Notes: 
  check a and b are in range
    if yes return the largest (because && looks for first false and we cant say which(a or b) is not in range )
    if no find which is not in range
      if a is in range 
        check b is also in range
        if yes return the largest
        if not return a
      if b is in range
        return b
    if both are not in range
      return 0
  */

function max1020 (a, b) {
  
    if( (a >= 10 && a <= 20 ) && (b >=10 && b <=20 ) ) {
     return (a>b)? a :b;
    } 
    else 
        if ( (a >= 10 && a <= 20 ) )  {
            if ( (b >= 10 && b <= 20 ) ) {
              return (a > b)? a : b;
            } else
                return a;
        } else if ( (b>=10 && b<=20 ) ) {
            return b;
        }
    else
        return 0;
} 



console.log( max1020(11, 19) ); //19
console.log( max1020(19, 11) ); //19
console.log( max1020(11, 9 ) ); //→ 11
console.log("\n");

console.log( max1020(9, 21) );//→ 0
console.log( max1020(10, 21) ); //→ 10
console.log( max1020(21, 10) );//-->10
console.log("\n");

console.log( max1020(9, 11) ); //-->11
console.log( max1020(23, 10) ); //-->10
console.log( max1020(20, 10) );//-->10
console.log("\n");

console.log( max1020(7, 20) ); //-->20
console.log( max1020(17,16) ); //-->17




