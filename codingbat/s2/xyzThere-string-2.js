
function xyzThere(str) {
    if ((typeof str === "string")) {
        for (let i=0;i<str.length-2;i++) {
            if (str.substr(i, 3).toLowerCase().match("xyz")) {
                if (i == 0 || (i > 0 && str.charAt(i - 1) != '.')) {
                    return true;
                }
            }
        }
        return false;
    } else {
      return `The argument "${str}" must be a string`;
  }
}


console.log(xyzThere("abcxyz")); // → true
console.log(xyzThere("abc.xyz")); // → false
console.log(xyzThere("xyz.abc")); // → true
console.log(xyzThere("xYZ.abc")); // → true
console.log(xyzThere(""));
console.log(xyzThere("[]"));
console.log(xyzThere("{}"));
console.log(xyzThere("1"));
console.log(xyzThere("***"));
console.log(xyzThere());
console.log(xyzThere(1));
console.log(xyzThere("$%^&*"));