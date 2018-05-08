/* 
Problem:
	We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. However, if either tea or candy is at least double the amount of the other one, the party is great (2). However, in all cases, if either tea or candy is less than 5, the party is always bad (0).
*/
function teaParty (tea, candy) {
  
  if(tea >= 5 && candy >= 5) 
  
    return (tea >= 2 * candy || candy >= 2 * tea) ? 2 : 1;
  
  if (tea <= 5 || candy <= 5) return 0;
  
  
}  
  


console.log(teaParty(6, 8) ); // 1
console.log(teaParty(3, 8) ); // 0
console.log(teaParty(20, 6) ); // 2
console.log();

console.log(teaParty(12, 6) ); // 2
console.log(teaParty(11, 6) ); // 1
console.log(teaParty(11, 4) ); // 0
console.log();

console.log(teaParty(4, 5) ); // 0
console.log(teaParty(5, 5) ); // 1
console.log(teaParty(6, 6) ); // 1
console.log();

console.log(teaParty(5, 10) ); // 2
console.log(teaParty(5, 9) ); // 1
console.log(teaParty(10, 4) ); // 0
console.log();

console.log(teaParty(10, 20) ); // 2