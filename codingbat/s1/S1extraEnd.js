function extraEnd(str) {
    var s = str.substring(str.length-2);
    return s+s+s;
}

//var str = "Hello";
//console.log(str.substring(str.length-2))

console.log(extraEnd("Hello"));
console.log(extraEnd("ab"));
console.log(extraEnd("Hi"));
