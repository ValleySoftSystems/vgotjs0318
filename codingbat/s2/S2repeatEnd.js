function repeatEnd(str,n) {
    var result = "";
    for(var i=0; i<n; i++){
        result += str.substring(str.length-n);
    }
 return result;
}

console.log(repeatEnd("Hello", 3)); // "llollollo"
console.log(repeatEnd("Hello", 2)); // "lolo"
console.log(repeatEnd("Hello", 1)); // "o"
console.log(repeatEnd("Hello", 0)); // ""
console.log(repeatEnd("abc", 3)); // "abcabcabc"
console.log(repeatEnd("1234", 2)); // "3434"
console.log(repeatEnd("1234", 3)); // "234234234"
console.log(repeatEnd("", 0)); // ""
