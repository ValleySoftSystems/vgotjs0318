/* 
Problem:
  Given a string, return the length of the largest "block" in the string. A block is a run of adjacent chars that are the same.
*/

function maxBlock (str) {
  
  var checkChar = str[0], maxCount = 0, charCount = 0;
     
  for(var i = 0; i < str.length; i++) {
    
    //compare each charater of string with adjacent character   
    if(checkChar == str[i]){
      //if same, increase the count and change the character to be compared with.
      charCount++;
      checkChar = str[i];

    } else {
      //if not same, reset the character count to 1 and change the character to comapred to the new char found in string.
      charCount = 1;
      checkChar = str[i];
    }
    
    // find the max count 
    maxCount = (maxCount > charCount)? maxCount : charCount;  
  }
  return maxCount ;
}




console.log(maxBlock("hoopla") ); // 2
console.log(maxBlock("abbCCCddBBBxx") ); // 3
console.log(maxBlock("") ); // 0
console.log();

console.log(maxBlock("xyz") ); // 1
console.log(maxBlock("xxyz") ); // 2
console.log(maxBlock("xyzz") ); // 2
console.log();

console.log(maxBlock("abbbcbbbxbbbx") ); // 3
console.log(maxBlock("XXBBBbbxx") ); // 3
console.log(maxBlock("XXBBBBbbxx") ); // 4
console.log();

console.log(maxBlock("XXBBBbbxxXXXX") ); // 4
console.log(maxBlock("XX2222BBBbbXX2222") ); // 4



