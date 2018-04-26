function without2(str) {
    var len = str.length;
    if(len==2 || len==0) return "";
    if(len == 1) return str;
    if(str.substring(0,2)==str.substring(len-2)) return str.substring(2);
    return str;
}

console.log(without2("HelloHe")); // "lloHe"
console.log(without2("HelloHi")); // "HelloHi"
console.log(without2("Hi")); // ""
console.log(without2("Chocolate")); // "Chocolate"
console.log(without2("xxx")); // "x"
console.log(without2("xx")); // ""
console.log(without2("x")); // "x"
console.log(without2("")); // ""
console.log(without2("Fruits")); // "Fruits"
