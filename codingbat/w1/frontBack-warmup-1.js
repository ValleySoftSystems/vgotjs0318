function frontBack(str) {
	if (typeof str === "string") {
    if (str.length == 1)
      return str;
    else
      return (str.substr(str.length-1,1) + str.slice(1,str.length-1) + str.substr(0,1));
  } 
  else {
  	return `The parameter -${str}- must be a string.`;
  }
}

console.log(frontBack("code"));// → "eodc"
console.log(frontBack("a"));// → "a"
console.log(frontBack("ab"));// → "ba"