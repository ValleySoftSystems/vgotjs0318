function frontTimes(str,n) {
    var frontStr = str.substring(0,3);
    var resultString = "";
    for(var i=1; i<=n; i++){
        resultString += frontStr;
    }
    return resultString;

}

console.log(frontTimes("Chocolate",2));
console.log(frontTimes("Chocolate",3));
console.log(frontTimes("Abc",3));
console.log(frontTimes("Ab",4));
console.log(frontTimes("A",4));
console.log(frontTimes("",4));
console.log(frontTimes("Abc",0));
