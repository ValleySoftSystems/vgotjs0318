function luckySum(a,b,c) {
    if(a===13) return 0;
    if(b===13) return a;
    if(c===13) return a+b;
    return a+b+c
}


console.log(luckySum(1, 2, 3)); // 6
console.log(luckySum(1, 2, 13)); // 3
console.log(luckySum(1, 13, 3)); // 1
console.log(luckySum(1, 13, 13)); // 1
console.log(luckySum(6, 5, 2)); // 13
console.log(luckySum(13, 2, 3)); // 0
console.log(luckySum(13, 2, 13)); // 0
console.log(luckySum(13, 13, 2)); // 0
console.log(luckySum(9, 4, 13)); // 13
console.log(luckySum(8, 13, 2)); // 8
console.log(luckySum(7, 2, 1)); // 10
console.log(luckySum(3, 3, 13)); // 6
