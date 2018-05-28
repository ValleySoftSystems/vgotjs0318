function parrotTrouble(talking, hour) {
  if (!(hour >= 0 && hour <= 23))
    {
      return `The hour ${hour} is not valid; must be in the range 0..23`;
    }
  if (typeof talking !== "boolean") {
  	return `The first argument must be a boolean.`
  }
  
  if (talking && ((hour < 7) || (hour > 20))) {
    return true;
  } else {
    return false;
  }
}

console.log(parrotTrouble(true, 6));// → true
console.log(parrotTrouble(true, 7));// → false
console.log(parrotTrouble(false, 6));// → false