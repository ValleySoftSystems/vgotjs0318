function countHi(str) {
    var count = 0;
    for(var i=0; i<str.length; i++){
        if(str[i]=="h" && str[i+1]=="i"){
            count++;
        }
    }
return count;
}

console.log(countHi("abc hi ho"));
console.log(countHi("ABChi hi"));
console.log(countHi("hihi"));
console.log(countHi("hiHIhi"));
console.log(countHi(""));
console.log(countHi("h"));
console.log(countHi("hi"));
console.log(countHi("Hi is no HI on ahI"));
console.log(countHi("hiho not HOHIhi"));
