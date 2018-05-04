function teaParty(tea, candy) {
    if(tea<5 || candy<5) return 0;
    if(tea>=5 && candy>=5 && !((tea >= 2*candy) || (candy >= 2*tea))) return 1;
    if((tea >= 2*candy) || (candy >= 2*tea)) return 2;
}


console.log(teaParty(6, 8)); // 1
console.log(teaParty(3, 8)); // 0
console.log(teaParty(20, 6)); // 2
console.log(teaParty(12, 6)); // 2
console.log(teaParty(11, 6)); // 1
console.log(teaParty(11, 4)); // 0
console.log(teaParty(4, 5)); // 0
console.log(teaParty(5, 5)); // 1
console.log(teaParty(6, 6)); // 1
console.log(teaParty(5, 10)); // 2
console.log(teaParty(5, 9)); // 1
console.log(teaParty(10, 4)); // 0
console.log(teaParty(10, 20)); // 2
