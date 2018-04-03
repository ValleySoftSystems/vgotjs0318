function countXX(str){
    var count = 0;
    for(var i=0; i<str.length-1;i++){
        if((str.substring(i,i+2))=="xx"){
            count++;
        }
    }
    return count;
}

console.log(countXX("abcxx"));
console.log(countXX("xxx"));
console.log(countXX("xxxx"));

console.log(countXX("abc"));
console.log(countXX("Hello there"));
console.log(countXX("Hexxo thxxe"));

console.log(countXX(""));
console.log(countXX("Kittensxxx"));
console.log(countXX("Kittens"));

