function withoutX2(str) {
    var strResult = str;
    if(str.substr(0,2)=="xx") {
        strResult = str.substring(2);
    }
    if(str[0]=="x"&&str[1]!="x"){
        strResult = str.substring(1);
    }
    if(str[0]!="x"&&str[1]=="x") {
        strResult = str[0] + str.substring(2);
    }
    return strResult;
}

console.log(withoutX2("xHi")); // "Hi"
console.log(withoutX2("Hxi")); // "Hi"
console.log(withoutX2("Hi")); // "Hi"
console.log(withoutX2("xxHi")); // "Hi"
console.log(withoutX2("Hix")); // "Hix"
console.log(withoutX2("xaxb")); // "axb"
console.log(withoutX2("xx")); // ""
console.log(withoutX2("x")); // ""
console.log(withoutX2("")); // ""
console.log(withoutX2("Hello")); // "Hello"
console.log(withoutX2("Hexllo")); // "Hexllo"
console.log(withoutX2("xHxllo")); // "Hxllo"
