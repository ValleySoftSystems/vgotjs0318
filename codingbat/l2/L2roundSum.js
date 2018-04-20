function round10(val) {

return (val%10 < 5) ? ((val/10*10)-(val%10)) : ((val/10*10+10)-(val%10)) ;
}

function roundSum(a,b,c) {
    return round10(a) + round10(b) + round10(c);
}

console.log(roundSum(16, 17, 18)); // 60
console.log(roundSum(12, 13, 14)); // 30
console.log(roundSum(6, 4, 4)); // 10
console.log(roundSum(4, 6, 5)); // 20
console.log(roundSum(4, 4, 6)); // 10
console.log(roundSum(9, 4, 4)); // 10
console.log(roundSum(0, 0, 1)); // 0
console.log(roundSum(0, 9, 0)); // 10
console.log(roundSum(10, 10, 19)); // 40
console.log(roundSum(20, 30, 40)); // 90
console.log(roundSum(45, 21, 30)); // 100
console.log(roundSum(23, 11, 26)); // 60
console.log(roundSum(23, 24, 25)); // 70
console.log(roundSum(25, 24, 25)); // 80
console.log(roundSum(23, 24, 29)); // 70
console.log(roundSum(11, 24, 36)); // 70
console.log(roundSum(24, 36, 32)); // 90
console.log(roundSum(14, 12, 26)); // 50
console.log(roundSum(12, 10, 24)); // 40
