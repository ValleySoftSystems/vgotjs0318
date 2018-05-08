/*Given a string, return a new string where the first 
and last chars have been exchanged.*/

function frontBack (str) {
  let l =str.length;
  if (l>1) {
      return str.charAt([l-1]) + str.substring(1,l-1) + str.charAt(0);
      }
  else
    return str;
}

console.log(frontBack("code"));
console.log(frontBack("a") );
console.log(frontBack("javascript") );