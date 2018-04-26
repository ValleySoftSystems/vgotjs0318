function deFront(str) {
    if(str[0]=="a" && str[1]=="b") return str;
    if(str[0]=="a" && str[1]!= "b") return str[0]+str.substring(2);
   //if(str[1]=="b") return str[1]+str.substring(2);
    if(str[1]=="b" && str[0]!="a") return str.substring(1);
    return str.substring(2);
    
}

console.log(deFront("Hello")); // "llo"
console.log(deFront("java")); // "va"
console.log(deFront("away")); // "aay"
console.log(deFront("axy")); // "ay"
console.log(deFront("abc")); // "abc"
console.log(deFront("xby")); // "by"
console.log(deFront("ab")); // "ab"
console.log(deFront("ax")); // "a"
console.log(deFront("axb")); // "ab"
console.log(deFront("aaa")); // "aa"
console.log(deFront("xbc")); // "bc"
console.log(deFront("bbb")); // "bb"
console.log(deFront("bazz")); // "zz"
console.log(deFront("ba")); // ""
console.log(deFront("abxyz")); // "abxyz"
console.log(deFront("hi")); // ""
console.log(deFront("his")); // "s"
console.log(deFront("xz")); // ""
console.log(deFront("zzz")); // "z"
