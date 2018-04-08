/* 
  Problem:
  	Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.

  Notes:

*/


function wordEnds(str, word) {
  
  var res = "";
  var i = 1;
  var len = str.length;
  var wlen = word.length;
  
  if(word == str) 
    return res;
  
  if(str.startsWith(word) )
     res = res + str.charAt(wlen);
  
  
  
  while(i < (len - wlen) )
  { 
        if(str.substring(i).startsWith(word))
        {
               res = res + str.charAt(i-1) + str.charAt(i + wlen);
               i = i + wlen;
        } else
          i++;
  }
  
  if(str.endsWith(word)) 
   res = res + str.charAt( len - wlen - 1);
  
  return res;
}



console.log(wordEnds("abcXY123XYijk", "XY") );//"c13i"
console.log(wordEnds("XY123XY", "XY") ); //"13"
console.log(wordEnds("XY1XY", "XY") );//"11"
console.log();


console.log(wordEnds("XYXY", "XY") );//"XY"
console.log(wordEnds("XY", "XY") ); //""
console.log(wordEnds("Hi", "XY") );//""
console.log();


console.log(wordEnds("", "XY") );//""
console.log(wordEnds("abc1xyz1i1j", "1") ); //"cxziij"
console.log(wordEnds("XY1XY", "XY") );//"11"
console.log();


console.log(wordEnds("abcXY123XYijk", "XY") );//"c13i"
console.log(wordEnds("abc1xyz1", "1") ); //"cxz"
console.log(wordEnds("abc1xyz11", "1") );//"cxz11"
console.log();

console.log(wordEnds("abc1xyz1abc", "abc") );//"11"
console.log(wordEnds("abc1xyz1abc", "b") ); //"acac"
console.log(wordEnds("abc1abc1abc", "abc") );//"1111"
console.log();

