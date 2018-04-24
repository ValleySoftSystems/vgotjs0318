function countYZ(str) {
    var count = 0;
    var str = str.toLowerCase();
    for(var i=0; i<str.length; i++){
        if(!(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122 ) && (str[i-1]=="y"||str[i-1]=="z")){
            count++;
        }
        if((i==str.length-1)&&(str[i]=="y"|| str[i]=="z")) {
                count++;
        }
    }
return count;
}

console.log(countYZ("fez day")); // 2
console.log(countYZ("day fez")); // 2
console.log(countYZ("day fyyyz")); // 2
console.log(countYZ("day yak")); // 1
console.log(countYZ("day:yak")); // 1
console.log(countYZ("!!day--yaz!!")); // 2
console.log(countYZ("yak zak")); // 0
console.log(countYZ("DAY abc XYZ")); // 2
console.log(countYZ("aaz yyz my")); // 3
console.log(countYZ("y2bz")); // 2
console.log(countYZ("zxyx")); // 0
