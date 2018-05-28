function mixStart(str) { 
	if (typeof str === "string") {
    if (str.slice(1,3) == "ix")
      return true;
    else
      return false;
  } else {
  	return `The parameter -${str}- must be a string.`
  }
}

console.log(mixStart(“mix snacks”));// → true
console.log(mixStart("pix snacks"));// → true
console.log(mixStart("piz snacks"));// → false