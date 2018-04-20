function loneSum(a,b,c) {
    if (a===b && b===c) return 0;
    if(a===b) return c;
    if(a===c) return b;
    if(b===c) return a;
    return a+b+c;
}

console.log(loneSum(1, 2, 3)); // 6
console.log(loneSum(3, 2, 3)); // 2
console.log(loneSum(3, 3, 3)); // 0
console.log(loneSum(9, 2, 2)); // 9
console.log(loneSum(2, 2, 9)); // 9
console.log(loneSum(2, 9, 2)); // 9
console.log(loneSum(2, 9, 3)); // 14
console.log(loneSum(4, 2, 3)); // 9
console.log(loneSum(1, 3, 1)); // 3