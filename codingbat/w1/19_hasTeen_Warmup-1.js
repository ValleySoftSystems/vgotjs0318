/* We'll say that a number is "teen" if it is in the range 13..19 inclusive. 
Given 3 int values, return true if 1 or more of them are teen.
*/


function hasTeen (a, b, c) {
  if((13 <= a <=19) || (13 <= a <=19) || (13 <= a <=19))
    return true;
}

console.log(hasTeen(13, 20, 10));
console.log(hasTeen(20, 19, 10));
console.log(hasTeen(20, 10, 13));