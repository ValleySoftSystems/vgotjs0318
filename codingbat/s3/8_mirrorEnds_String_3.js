/* 
Problem:
  Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. In other words, zero or more characters at the very begining of the given string, and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".

*/

function mirrorEnds (str) {
  
  var endStr, result = "";
  var l = str.length;
  
  //i will start from 0th index and j will start from nth index
  for(var i = 0, j = str.length - 1; i <= str.length - 1 ,j >= 0; i++, j--) {
        // extract substring for each j from end 
        endStr = str.substring(j, l);
        //reverse that substring 
        endStr = endStr.split('').reverse().join('');
       //compare the beginning of string vs reversed string from ending
        if(str.substring(0,i +1 ) == endStr) {
          //whenever begin and reverse of end are matched assign the begin to result.
          //result will keep changing for each loop
          result = str.substring(0, i+1);
        }
        
  }
  return result ;
}




console.log(mirrorEnds("abXYZba") ); // "ab"
console.log(mirrorEnds("abca") ); // "a"
console.log(mirrorEnds("aba") ); // "aba"
console.log();

console.log(mirrorEnds("abab") ); // ""
console.log(mirrorEnds("xxx") ); // "xxx"
console.log(mirrorEnds("xxYxx") ); // "xxYxx"
console.log();

console.log(mirrorEnds("Hi and iH") ); // "Hi "
console.log(mirrorEnds("x") ); // "x"
console.log(mirrorEnds("") ); // ""
console.log();

console.log(mirrorEnds("123and then 321") ); // "123"
console.log(mirrorEnds("band andab") ); // "ba"