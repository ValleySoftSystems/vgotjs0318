/*Return true if the given non-negative number is a multiple of 3 or a multiple of 5. 
Use the % "mod" operator*/

function or35 (n) {
  if(n>0){
    return ( (n % 3 == 0 )||( n % 5 == 0 ) );
  }
  
}
console.log(or35(3));
console.log(or35(10));
console.log(or35(8));