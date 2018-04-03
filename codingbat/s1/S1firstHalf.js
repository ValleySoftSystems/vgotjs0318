function firstHalf(str) {
    if(str.length%2 == 0){
        return str.substring(0,str.length/2);
    }
    return "Enter even length of string"
}

console.log(firstHalf("WooHoo"));
console.log(firstHalf("HelloThere"));
console.log(firstHalf("abcdef"));