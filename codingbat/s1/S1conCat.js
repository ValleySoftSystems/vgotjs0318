function conCat(a,b) {
    if(a.substr(-1) == b[0]) b= b.substr(1);
    return a+b;
}

console.log(conCat("abc", "cat")); // "abcat"
console.log(conCat("dog", "cat")); // "dogcat"
console.log(conCat("abc", "")); // "abc"
console.log(conCat("", "cat")); // "cat"
console.log(conCat("pig", "g")); // "pig"
console.log(conCat("pig", "doggy")); // "pigdoggy"

