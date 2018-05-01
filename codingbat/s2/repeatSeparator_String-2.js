/* 
  Problem:
	Given two strings, word and a separator sep, return a big string made of count occurrences of the word, 
	separated by the separator string.

   Notes:

   	when count is 1 , append only the word to result.
   	otherwise, append word and sep to result.
*/

function repeatSeparator (word, sep, count) {
  

  var res = "";
  var str = word+sep;
  
  while(count) {
    
    if(count == 1){
       res+= word;
       break;
     }

     res+= str;
     count--;
   }

  return res;
}
  
console.log(repeatSeparator("Word", "X", 3) );// "WordXWordXWord"
console.log(repeatSeparator("This", "And", 2)  ); // "ThisAndThis"
console.log(repeatSeparator("This", "And", 1) );//  "This"
console.log();

console.log(repeatSeparator("Hi", "-n-", 2) );// "Hi-n-Hi"
console.log(repeatSeparator("AAA", "", 1)  ); // "AAA"
console.log(repeatSeparator("AAA", "", 0) );//  ""
console.log();

console.log(repeatSeparator("A", "B", 5) );// "ABABABABA"
console.log(repeatSeparator("abc", "XX", 3)  ); // "abcXXabcXXabc"
console.log(repeatSeparator("abc", "XX", 2) );//  "abcXXabc"
console.log();

console.log(repeatSeparator("abc", "XX", 1) );// "abc"
console.log(repeatSeparator("XYZ", "a", 2)  ); //  "XYZaXYZ"


