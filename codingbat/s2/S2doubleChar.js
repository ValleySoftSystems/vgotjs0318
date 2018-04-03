function doubleChar(str){
    var resultStr = "";
    for(var i=0; i<str.length; i++){
        resultStr = resultStr + str[i]+ str[i];
    }
return resultStr;
}

console.log(doubleChar("The"));
console.log(doubleChar("AAbb"));
console.log(doubleChar("Hi-There"));
console.log(doubleChar("Word!"));
console.log(doubleChar("!!"));
console.log(doubleChar(""));
console.log(doubleChar("a"));
console.log(doubleChar("."));
console.log(doubleChar("aa"));


