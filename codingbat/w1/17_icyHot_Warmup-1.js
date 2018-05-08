/*Given two temperatures, 
return true if one is less than 0 and the other is greater than 100. */

function icyHot (tempA, tempB ) {
  return (((tempA < 0) && (tempB > 100)) || ( (tempB < 0)&& (tempA > 100)));
  
}

console.log(icyHot(120, -1));
console.log(icyHot(-1, 120));
console.log(icyHot(2, 120));
