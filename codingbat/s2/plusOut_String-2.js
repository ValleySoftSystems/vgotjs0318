/*
Problem:
  Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

Notes:
  create an empty result string
  loop through the given string, 
    extract substring starting at every index and check whether it starts with word
    if yes, append the word to result and increment loop counter to word length

    if not, append '+' to result and increment loop counter.
  return the string.

*/


function plusOut (str, word) {
 
  var res = "";
  var i = 0;

  while(i < str.length) {

    if(str.substring(i).startsWith(word)) {

      res = res + word;
      i = i + word.length;

    } else {
      
        res = res + '+';
        i++;
    }

  }
  return res;  
}
  
console.log(plusOut("12xy34", "xy") ); // "++xy++"
console.log(plusOut("12xy34", "1") );  //"1+++++"
console.log(plusOut("12xy34xyabcxy", "xy")  ); //"++xy++xy+++xy"
console.log();

console.log(plusOut("abXYabcXYZ", "ab")  ); //"ab++ab++++"
console.log(plusOut("abXYabcXYZ", "abc")  ); //"++++abc+++"
console.log(plusOut("abXYabcXYZ", "XY")  ); //"++XY+++XY+"
console.log();

console.log(plusOut("abXYxyzXYZ", "XYZ")  ); //"+++++++XYZ"
console.log(plusOut("--++ab", "++")  ); //"++++++"
console.log(plusOut("aaxxxxbb", "xx")  ); //"++xxxx++"
console.log();

console.log(plusOut("123123", "3") ); //"++3++3"


/*  this code failed when word length is 3 or more
str = str.split('');
for(var i = 0; i < str.length; i++) {
  str[i] = (word.includes(str[i])) ? str[i] : '+' ;
} 
return str.join('');    
*/