function stringYak(str) {
//var posYak = str.indexOf("yak");
var resultStr = "";
/*while(posYak != -1) {
    str = str.substring(0, posYak) + str.substring(posYak + 3);
    posYak = str.indexOf("yak");
}
    return str;*/


for(var i= 0; i<str.length; i++){
    if(i+2<str.length && str[i]=="y" && str[i+2]=="k"){
        i= i +2;
    }else{
        resultStr += str[i];
    }
}
return resultStr;
}


console.log(stringYak("yakpak"));
console.log(stringYak("pakyak"));
console.log(stringYak("yak123ya"));
console.log(stringYak("yak"));
console.log(stringYak("yakxxxyak"));
console.log(stringYak("HiyakHi"));
console.log(stringYak("xxxyakyyyakzzz"));
console.log(stringYak("HiybkHi"));
console.log(stringYak("yeksugar"));

