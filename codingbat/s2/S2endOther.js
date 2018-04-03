/*******************************/
function endOther(strA,strB) {
    var strA = strA.toLowerCase();
    var strB = strB.toLowerCase();
    var aLen = strA.length;
    var bLen = strB.length;
    console.log("lengths: " + aLen + " "+ bLen);
    if(aLen >= bLen){
        var end = strA.substring(aLen - bLen);
        var temp = strB;
        console.log("end: "+ end);
    }else {
        end = strB.substring(bLen - aLen);
        temp = strA;
        console.log("end: "+ end);
    }
    return end == temp ;
}

console.log(endOther("Hiabc", "abc"));