function everyNth(str, n){
	if ((typeof str === "string") && (typeof n === "number")) {
    var newStr = '';
    for(var i=0; i<str.length; i=i+n){
      newStr += str.substr(i, 1);
    }
    return newStr;
  }
}

console.log(everyNth("Miracle", 2));// → "Mrce"
console.log(everyNth("abcdefg", 2));// → "aceg"
console.log(everyNth("abcdefg", 3));// → "adg"