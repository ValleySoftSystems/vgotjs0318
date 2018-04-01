function stringX(str) {
  if (typeof str === "string") {
    var len = str.length;
    var firstChar = (len) ? str[0] : ''; 
    var lastChar = (len > 1) ? str[len-1] : '';
    var newStr = '';
    for (let i=1; i<len-1; i++) {
      if (str[i] === "x")
        continue;
      else
        newStr+= str[i];
    }
    return `${firstChar}${newStr}${lastChar}`;
  } else {
      return `Argument - ${str} - must be a string.`
  }
}

console.log(stringX("xxHxix")); // → "xHix"
console.log(stringX("abxxxcd")); // → "abcd"
console.log(stringX("xabxxxcdx")); // → "xabcdx"
console.log(stringX("")); // → ""
console.log(stringX("x")); // → "x"
console.log(stringX("xx")); // → "xx"
console.log(stringX("xKittenx")); // → "xKittenx"
console.log(stringX("Hello")); // → "Hello"