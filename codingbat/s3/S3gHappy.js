function gHappy(str) {
    for(var i=0; i<str.length; i++){
     if (str[i]=="g" && !(str[i-1]=="g" || str[i+1]=="g")) return false;
    }
 return true;
}

console.log(gHappy("xxggxx")); // true
console.log(gHappy("xxgxx")); // false
console.log(gHappy("xxggyygxx")); // false
console.log(gHappy("g")); // false
console.log(gHappy("gg")); // true
console.log(gHappy("")); // true
console.log(gHappy("xxgggxyz")); // true
console.log(gHappy("xxgggxyg")); // false
console.log(gHappy("xxgggxygg")); // true
console.log(gHappy("mgm")); // false
console.log(gHappy("mggm")); // true
console.log(gHappy("yyygggxyy")); // true
