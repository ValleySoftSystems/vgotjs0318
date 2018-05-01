/*solution to http://codingbat.com/prob/p132134

Problem: 
  Given 2 int values, return true if they are both in the range 30..40
  inclusive, or they are both in the range 40..50 inclusive.
  
Notes:
    compare a and b within range 30 and 40
    if yes return true
  else
    compare a and b within range 40 and 50
    if yes return true
  else 
    return false
  
  */

function in3050 (a, b) {
  
  if( ( (a>=30)&&(a<=40) ) && ( (b>=30)&&(b<=40) ) )
     return true;
  else if ( ( (a>=40)&&(a<=50) ) && ( (b>=40)&&(b<=50) ) )
     return true;
  else
    return false;
}


console.log( in3050(30, 31) );
console.log( in3050(30, 41) ); 
console.log( in3050(40, 50) );

console.log( in3050(40, 51) );
console.log( in3050(39, 50) ); 
console.log( in3050(50, 39) );

console.log( in3050(40, 39) );
console.log( in3050(49, 48) ); 
console.log( in3050(50, 40) );

console.log( in3050(50, 51) );
console.log( in3050(35, 36) ); 
console.log( in3050(35, 45) );