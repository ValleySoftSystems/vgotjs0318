
function fixTeen(val) {
    if(val===15 || val===16) return val;
    if(val<13 || val>19) return val;
    return 0;
}

function noTeenSum(a,b,c) {
 return fixTeen(a) + fixTeen(b) + fixTeen(c);
}


console.log(noTeenSum(1, 2, 3)); // 6
console.log(noTeenSum(2, 13, 1)); // 3
console.log(noTeenSum(2, 1, 14)); // 3
console.log(noTeenSum(2, 1, 15)); // 18
console.log(noTeenSum(2, 1, 16)); // 19
console.log(noTeenSum(2, 1, 17)); // 3
console.log(noTeenSum(17, 1, 2)); // 3
console.log(noTeenSum(2, 15, 2)); // 19
console.log(noTeenSum(16, 17, 18)); // 16
console.log(noTeenSum(17, 18, 19)); // 0
console.log(noTeenSum(15, 16, 1)); // 32
console.log(noTeenSum(15, 15, 19)); // 30
console.log(noTeenSum(15, 19, 16)); // 31
console.log(noTeenSum(5, 17, 18)); // 5
console.log(noTeenSum(17, 18, 16)); // 16
console.log(noTeenSum(17, 19, 18)); // 0
