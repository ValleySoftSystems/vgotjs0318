function sortaSum(a,b) {
    var sum = a+b;
    if(sum>=10 && sum<=19){
        return 20;
    }else return sum;
}

console.log(sortaSum(3, 4)); // 7
console.log(sortaSum(9, 4)); // 20
console.log(sortaSum(10, 11)); // 21
console.log(sortaSum(12, -3)); // 9
console.log(sortaSum(-3, 12)); // 9
console.log(sortaSum(4, 5)); // 9
console.log(sortaSum(4, 6)); // 20
console.log(sortaSum(14, 7)); // 21
console.log(sortaSum(14, 6)); // 20
