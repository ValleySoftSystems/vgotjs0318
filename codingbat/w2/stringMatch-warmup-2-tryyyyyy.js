function stringMatch(str1, str2) {
  
  if ((typeof str1 === "string") && (typeof str2 === "string")) {
    var flag = false;
    if (str1.length <= str2.length) {
      flag = true;
    }
    
    var len = 0;
    if (flag)
      len = str1.length;
    else
      len = str2.length;

    var count = 0;
    for (let i=0; i<(len-1); i++) {
      if (str1.substring(i,i+2) === str2.substring(i,i+2)) {
        count++;  
      }
    }
    return count;
  } else {
      return `Both the arguments must be a string.`
  }
}

console.log(stringMatch("3", true)); // arg must be a string
console.log(stringMatch("xxcaazz", "xxbaaz")); // → 3
console.log(stringMatch("abc", "abc")); // → 2
console.log(stringMatch("abc", "axc")); // → 0
console.log(stringMatch("aabbccdd", "abbbxxd")); // → 1
console.log(stringMatch("he", "hello")); // → 1
console.log(stringMatch("", "hello")); // → 0  