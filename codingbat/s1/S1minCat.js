function minCat(a,b) {
    var alen = a.length;
    var blen = b.length;
    if(alen>blen) a = a.substring(alen-blen);
    if(blen>alen) b = b.substring(blen-alen);
    return a+b;
}

console.log(minCat("Hello", "Hi")); // "loHi"
console.log(minCat("Hello", "java")); // "ellojava"
console.log(minCat("java", "Hello")); // "javaello"
console.log(minCat("abc", "x")); // "cx"
console.log(minCat("x", "abc")); // "xc"
console.log(minCat("abc", "")); // ""
