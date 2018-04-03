function altPairs(str){
    var resultStr ="";
    for(var i=0; i<str.length; i+=4){
        resultStr += str[i];

        if(i+1<str.length)
            resultStr += str[i+1];
    }

return resultStr;
}

console.log(altPairs("kitten"));
console.log(altPairs("Chocolate"));
console.log(altPairs("CodingHorror"));
console.log(altPairs("yak"));
console.log(altPairs("ya"));
console.log(altPairs("y"));
console.log(altPairs(""));
console.log(altPairs("ThisThatTheOther"));
