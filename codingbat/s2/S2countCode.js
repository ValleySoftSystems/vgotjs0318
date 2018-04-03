function countCode(str) {
    var count = 0;
    for(var i=0; i<str.length-3; i++){
        if((str.substring(i,i+2)=="co" )&& str[i+3]=="e" ){
            count++;
        }
    }
    return count;
}

console.log(countCode("aaacodebbb")); //1
console.log(countCode("codexxcode")); //2
console.log(countCode("cozexxcope")); //2
console.log(countCode("cozfxxcope")); //1
console.log(countCode("xxcozeyycop")); //1
console.log(countCode("cozcop")); //0
console.log(countCode("abcxyz")); //0
console.log(countCode("code")); //1
console.log(countCode("ode")); //0
console.log(countCode("c")); //0
console.log(countCode("")); //0
console.log(countCode("AAcodeBBcoleCCccoreDD")); //3
console.log(countCode("AAcodeBBcoleCCccorfDD")); //2
console.log(countCode("coAcodeBcoleccoreDD")); //3