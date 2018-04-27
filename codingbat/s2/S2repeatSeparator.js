function repeatSeparator(word, sep, count) {
    var result = "";
    for(var i=0; i<count; i++){
        if(i == (count-1)){
            result += word;
            break;
        }
        result += word + sep;
    }
 return result;
}

console.log(repeatSeparator("Word", "X", 3)); // "WordXWordXWord"
console.log(repeatSeparator("This", "And", 2)); // "ThisAndThis"
console.log(repeatSeparator("This", "And", 1)); // "This"
console.log(repeatSeparator("Hi", "-n-", 2)); // "Hi-n-Hi"
console.log(repeatSeparator("AAA", "", 1)); // "AAA"
console.log(repeatSeparator("AAA", "", 0)); // ""
console.log(repeatSeparator("A", "B", 5)); // "ABABABABA"
console.log(repeatSeparator("abc", "XX", 3)); // "abcXXabcXXabc"
console.log(repeatSeparator("abc", "XX", 2)); // "abcXXabc"
console.log(repeatSeparator("abc", "XX", 1)); // "abc"
console.log(repeatSeparator("XYZ", "a", 2)); // "XYZaXYZ"*/
