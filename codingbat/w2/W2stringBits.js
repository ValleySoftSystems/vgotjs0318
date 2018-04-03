function stringBits(str) {
    var result = "";
    for(var i=0; i<str.length; i+=2){
        result += str[i];
    }
    return result;
}

console.log(stringBits("Hello"));
console.log(stringBits("Hi"));
console.log(stringBits("Heeololeo"));
console.log(stringBits("HiHiHi"));
console.log(stringBits(""));
console.log(stringBits("Greetings"));
console.log(stringBits("Chocoate"));
console.log(stringBits("pi"));
console.log(stringBits("Hello Kitten"));
console.log(stringBits("hxaxpxpxy"));