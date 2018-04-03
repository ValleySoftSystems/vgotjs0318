function everyNth(str,n) {
    var resultString = "";
    for(var i=0; i<str.length; i+=n){
        resultString += str[i];
    }
    return resultString;
}

console.log(everyNth("Miracle", 2));
console.log(everyNth("abcdefg", 2));
console.log(everyNth("abcdefg", 3));

console.log(everyNth("Chocolate", 3));

console.log(everyNth("Chocolates", 3));
console.log(everyNth("Chocolates", 4));
console.log(everyNth("Chocolates", 100));