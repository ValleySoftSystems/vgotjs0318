function withoutX(str) {
    var resStr = str;
    var len = str.length;
    if(len==1 && str[0]=="x") return "";
    if(str.startsWith("x") && str.endsWith("x")) {
        resStr = str.substring(1,len-1);
    }
    if(str.startsWith("x") && !str.endsWith("x")) {
        resStr = str.substring(1);
    }
    if(str.endsWith("x") && !str.startsWith("x")) {
        resStr = str.substring(0,len-1);
    }
    return resStr;
}

console.log(withoutX("xHix")); // "Hi"
console.log(withoutX("xHi")); // "Hi"
console.log(withoutX("Hxix")); // "Hxi"
console.log(withoutX("Hi")); // "Hi"
console.log(withoutX("xxHi")); // "xHi"
console.log(withoutX("Hix")); // "Hi"
console.log(withoutX("xaxbx")); // "axb"
console.log(withoutX("xx")); // ""
console.log(withoutX("x")); // ""
console.log(withoutX("")); // ""
console.log(withoutX("Hello")); // "Hello"
console.log(withoutX("Hexllo")); // "Hexllo"
