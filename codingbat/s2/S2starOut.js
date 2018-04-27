function starOut(str) {
    var resultString = "";
    var flag = false;
    for(var i=0; i<str.length; i++){
        if(str[i+1]=="*"||str[i]=="*"){
            flag = true;
        }
        if((!flag)&&(str[i-1]!="*")&&str[i+1]!="*"){
            resultString += str[i];
        }
        flag = false;
    }
    return resultString;
}

console.log(starOut("ab*cd")); // "ad"
console.log(starOut("ab**cd")); // "ad"
console.log(starOut("sm*eilly")); // "silly"
console.log(starOut("sm*eil*ly")); // "siy"
console.log(starOut("sm**eil*ly")); // "siy"
console.log(starOut("sm***eil*ly")); // "siy"
console.log(starOut("stringy*")); // "string"
console.log(starOut("*stringy")); // "tringy"
console.log(starOut("*str*in*gy")); // "ty"
console.log(starOut("abc")); // "abc"
console.log(starOut("a*bc")); // "c"
console.log(starOut("ab")); // "ab"
console.log(starOut("a*b")); // ""
console.log(starOut("a")); // "a"
console.log(starOut("a*")); // ""
console.log(starOut("*a")); // ""
console.log(starOut("*")); // ""
console.log(starOut("")); // ""
