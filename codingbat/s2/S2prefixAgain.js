function prefixAgain(str,n) {
    var prefix = str.substring(0,n);
    return str.includes(prefix, n);
}

console.log(prefixAgain("abXYabc", 1)); // true
console.log(prefixAgain("abXYabc", 2)); // true
console.log(prefixAgain("abXYabc", 3)); // false
console.log(prefixAgain("xyzxyxyxy", 2)); // true
console.log(prefixAgain("xyzxyxyxy", 3)); // false
console.log(prefixAgain("Hi12345Hi6789Hi10", 1)); // true
console.log(prefixAgain("Hi12345Hi6789Hi10", 2)); // true
console.log(prefixAgain("Hi12345Hi6789Hi10", 3)); // true
console.log(prefixAgain("Hi12345Hi6789Hi10", 4)); // false
console.log(prefixAgain("a", 1)); // false
console.log(prefixAgain("aa", 1)); // true
console.log(prefixAgain("ab", 1)); // false


