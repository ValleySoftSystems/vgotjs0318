/*Given an int n, return true if it is within 10 of 100 or 200. 
Note: Math.abs(num) computes the absolute value of a number.*/

function nearHundred (num) {
  return ( (100 - num <= 10) || (200-num <= 10) );
}

console.log(nearHundred(93));
console.log(nearHundred(90));
console.log(nearHundred(89));