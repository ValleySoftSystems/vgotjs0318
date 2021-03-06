/*Given 2 int values, return true if one is negative and one is positive.
Except if the parameter "negative" is true, 
  then return true only if both are negative.*/

function posNeg (a, b, negative ){
  
  if (negative) {
    return (a < 0 && b < 0);
  } else {
    return ((a < 0 && b > 0) || (a > 0 && b < 0));
  }
  
}

console.log(posNeg(1, -1, false));
console.log(posNeg(-1, -1, false));
console.log(posNeg(-4, -5, true));
console.log(posNeg(-4, -5, false));