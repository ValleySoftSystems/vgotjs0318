/* Given a string, return true if the string starts with "hi" and false otherwise. */

function startHi (str) {
  if(str.substr(0,2) === "hi")
    return true;
  else 
    return false;
  
}

console.log(startHi("hi there"));
console.log(startHi("hi"));
console.log(startHi("hello"));
