function sumDigits(str) {
    var result = 0;
    var charCodeZero = "0".charCodeAt(0);
    var charCodeNine = "9".charCodeAt(0);
    for(var i=0; i<str.length; i++){
        if(str.charCodeAt(i)>=charCodeZero && str.charCodeAt(i)<=charCodeNine){
          result += parseInt(str[i]);
        }
    }
 return result;
}


console.log(sumDigits("aa1bc2d3")); // 6
console.log(sumDigits("aa11b33")); // 8
console.log(sumDigits("Chocolate")); // 0
console.log(sumDigits("5hoco1a1e")); // 7
console.log(sumDigits("123abc123")); // 12
console.log(sumDigits("")); // 0
console.log(sumDigits("Hello")); // 0
console.log(sumDigits("X1z9b2")); // 12
console.log(sumDigits("5432a")); // 14
