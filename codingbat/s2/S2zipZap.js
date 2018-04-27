function zipZap(str) {
    var resultString = "";
    for(var i=0; i<str.length; i++){
        resultString += str[i];
        if(str[i]=="z" && str[i+2]=="p"){
            i += 1;
        }
    }
 return resultString;
}

console.log(zipZap("zipXzap")); // "zpXzp"
console.log(zipZap("zopzop")); // "zpzp"
console.log(zipZap("zzzopzop")); // "zzzpzp"
console.log(zipZap("zibzap")); // "zibzp"
console.log(zipZap("zip")); // "zp"
console.log(zipZap("zi")); // "zi"
console.log(zipZap("z")); // "z"
console.log(zipZap("")); // ""
console.log(zipZap("zzp")); // "zp"
console.log(zipZap("abcppp")); // "abcppp"
console.log(zipZap("azbcppp")); // "azbcppp"
console.log(zipZap("azbcpzpp")); // "azbcpzp"
