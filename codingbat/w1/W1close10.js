function close10(a,b){
    var aDifference = Math.abs(a - 10);
    var bDifference = Math.abs(b - 10);

    if(aDifference > bDifference) return b;
    if(aDifference == bDifference) return 0;
    return a;
}

console.log(close10(8,13));
console.log(close10(13,8));
console.log(close10(13,7));
console.log(close10(7,13));
console.log(close10(9,13));
console.log(close10(10,12));
console.log(close10(11,10));
console.log(close10(5,21));
console.log(close10(0,20));
console.log(close10(10,10));
