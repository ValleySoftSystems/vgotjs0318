function doubleChar(str) {
    if ((typeof str === "string")) {
      var newStr = '';
      for (let i=0; i<=str.length-1; i++) {
          newStr += `${str.substr(i,1)}${str.substr(i,1)}`;
      }
      return newStr;
  } else {
      return `The argument -${str}- must be a string`;
  }
  
}

console.log(doubleChar("The")); // → "TThhee"
console.log(doubleChar("AAbb")); // → "AAAAbbbb"
console.log(doubleChar("Hi-There")); // → "HHii--TThheerree"
console.log(doubleChar(""));
console.log(doubleChar([]));
console.log(doubleChar({}));
console.log(doubleChar(null));
console.log(doubleChar(true));
console.log(doubleChar(1));
console.log(doubleChar("!!")); 