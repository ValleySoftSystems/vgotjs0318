function repeatFront(str,n) {
    var result = "";
    var nChar = n;
    for(var i=0; i<=n; i++){
        result += str.substring(0,nChar);
        nChar--;
    }
 return result;
}

console.log(repeatFront("Chocolate", 4)); // "ChocChoChC"
console.log(repeatFront("Chocolate", 3)); // "ChoChC"
console.log(repeatFront("Ice Cream", 2)); // "IcI"
console.log(repeatFront("Ice Cream", 1)); // "I"
console.log(repeatFront("Ice Cream", 0)); // ""
console.log(repeatFront("xyz", 3)); // "xyzxyx"
console.log(repeatFront("", 0)); // ""
console.log(repeatFront("Java", 4)); // "JavaJavJaJ"
console.log(repeatFront("Java", 1)); // "J"
