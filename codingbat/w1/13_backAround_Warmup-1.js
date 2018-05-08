/*  Given a string, take the last char and return a new string with 
  the last char added at the front and back, 
  so "cat" yields "tcatt". 
  The original string will be length 1 or more.*/

function backAround(str){
  let l = str.length;
  if(l>=1){
    return str.charAt(l - 1) + str + str.charAt(l - 1);
  }
}

console.log(backAround("cat"));
console.log(backAround("Hello"));
console.log(backAround("a"));
