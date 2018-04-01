
function startHi (str) {
	if (typeof str === "string") {
    if (str.slice(0,2) == "hi") 
        return true;
    else 
        return false;
  } else 
  	return `The parameter -${str}- must be a string`;
}

console.log(startHi(“hi there")); // → true
console.log(startHi("hi")); //→ true
console.log(startHi("hello hi"));// → false