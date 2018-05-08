/* 
Problem:
	Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. 

*/

function countYZ (str) {
  
  var count = 0;
  
  str = str.toLowerCase(); //convert string to lowercase
  
  for( var j = 0; j < str.length;j++) {
    
    // check for y or z in given string then check for the following character of it to be not alphabetic
    
    if( (str[j] == 'y' || str[j] == 'z') && 
        (!str.charCodeAt(j + 1) || str.charCodeAt(j + 1) < 97 || str.charCodeAt(j + 1) > 122 )
      )
      count++; 
  }
  
 return count;
  
}

console.log(countYZ("fez day") ); // 2
console.log(countYZ("day fez") ); // 2
console.log(countYZ("day fyyyz") ); // 2
console.log();

console.log(countYZ("day yak") ); // 1
console.log(countYZ("day:yak") ); // 1
console.log(countYZ("!!day--yaz!!") ); // 2
console.log();

console.log(countYZ("yak zak") ); // 0
console.log(countYZ("DAY abc XYZ") ); // 2
console.log(countYZ("aaz yyz my") ); // 3
console.log();

console.log(countYZ("y2bz") ); // 2
console.log(countYZ("zxyx") ); // 0