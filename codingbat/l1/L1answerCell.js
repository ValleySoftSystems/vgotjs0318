function answerCell(isMorning, isMom, isAsleep) {
   if(isAsleep) return false;
   if(isMorning && !isMom ) return false;
 return true;
}


console.log(answerCell(false, false, false)); // true
console.log(answerCell(false, false, true)); // false
console.log(answerCell(true, false, false)); // false
console.log(answerCell(true, true, false)); // true
console.log(answerCell(false, true, false)); // true
console.log(answerCell(true, true, true)); // false
