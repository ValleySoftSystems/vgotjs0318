/* 

  Problem:
  
    Given a string and an int n, return a string made of the first and last n chars 
    from the string. The string length will be at least n.


  Notes:
    
    find length
    check if length is greater than n
    return substring from 0 index and of n char length + substring starting from l-n and of length n
    

*/

function nTwice (str, n) {
 
 var l = str.length;
 if(l >= n) {
    return str.substr(0, n) + str.substr(l-n, n );
 }
 
}

console.log(nTwice("Hello", 2)); 
console.log(nTwice("Chocolate", 3)); 
console.log(nTwice ("Chocolate", 1)); 

console.log(nTwice ("Chocolate", 0)); 
console.log(nTwice ("Hello", 4)); 
console.log(nTwice ("Code", 4)); 

console.log(nTwice("Code", 2)); 


