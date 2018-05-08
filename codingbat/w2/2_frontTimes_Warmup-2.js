/*solution to http://codingbat.com/prob/p101475

Problem: 
  Given a string and a non-negative int n, we'll say that the front 
  of the string is the first 3 chars, or whatever is there if the 
  string is less than length 3. Return n copies of the front;
  
Notes:
  take emprty string
  append the given string n times if length is less than 3
  append the substring of first three chars if length is more than 3
  
*/

function frontTimes (str, n) {
 
  var res = "";
  var l =str.length;
  while( n >= 1 ) {
    if (l < 3){
        res = res + str ;
       } else {
         res = res + str.substring(0, 3) ;
       }
      n--;
  }
    
  return res;
} 
 
console.log( frontTimes("Chocolate", 2)); //→ "ChoCho"
console.log( frontTimes("Chocolate", 3)); //→ "ChoChoCho"
console.log( frontTimes("Abc", 3) ); //→ "AbcAbcAbc"

console.log( frontTimes("Ab", 4) ); //→ "AbAbAbAb"
console.log( frontTimes("A", 4)  );  //→ "AAAA"
console.log( frontTimes("", 4) ); // → ""

console.log( frontTimes("Abc", 0) ); //→ ""


