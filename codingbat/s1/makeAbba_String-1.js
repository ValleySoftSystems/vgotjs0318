/* 

  Problem:
  
    Given two strings, a and b, return the result of putting them 
    together in the order abba, e.g. "Hi" and "Bye" returns 
    "HiByeByeHi".

  Notes:
    
    repeat the strings in result one after the another. return the result as
    a followed by b  followed by b and followed by a
    

*/

function makeAbba (a, b) {
  
  return a  + b + b + a;
}

console.log(makeAbba("Hi", "Bye"));
console.log(makeAbba("Yo", "Alice"));
console.log(makeAbba("What", "Up"));

console.log(makeAbba("aaa", "bbb"));
console.log(makeAbba("x", "y"));
console.log(makeAbba("x", ""));

console.log(makeAbba("", "y"));
console.log(makeAbba("Bo", "Ya"));
console.log(makeAbba("Ya", "Ya"));