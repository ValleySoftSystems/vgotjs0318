function nTwice(str,n) {
    if(n==0) return "";
    return str.substr(0,n)+str.substr(-n);
}

console.log(nTwice("Hello", 2)); // "Helo"
console.log(nTwice("Chocolate", 3)); // "Choate"
console.log(nTwice("Chocolate", 1)); // "Ce"
console.log(nTwice("Chocolate", 0)); // ""
console.log(nTwice("Hello", 4)); // "Hellello"
console.log(nTwice("Code", 4)); // "CodeCode"
console.log(nTwice("Code", 2)); // "Code"
