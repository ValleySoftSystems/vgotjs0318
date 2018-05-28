function front3(str) {
	if (typeof str === "string") {
    if (str.length < 3)
      return str;
    else {
      var copies = 3;
      var newStr = '';
      for ( var i=0; i<copies; i++){
        newStr += str.substr(0,3);
      }
      return newStr;
    }
  } else {
  		return `arg ${str} must be a string.`
  }
}

console.log(front3("Java")); // → "JavJavJav"
console.log(front3("Chocolate")); // → "ChoChoCho"
console.log(front3("abc")); // → "abcabcabc"