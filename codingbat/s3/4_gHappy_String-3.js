/* 
Problem:
  We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

*/

function gHappy(str) {
 
  var gHappy = (!str)?true:false;
  
  for( var i = 0; i < str.length;i++) {
      
    if(str.charAt(i) == 'g' ){
      
      if(str.charAt(i - 1) == 'g' || str.charAt(i + 1) == 'g')
        gHappy = true;
      else
        gHappy = false;
    }
  }
  return gHappy;
}





console.log(gHappy("xxggxx") ); // true
console.log(gHappy("xxgxx") ); // false
console.log(gHappy("xxggyygxx") ); // false
console.log();

console.log(gHappy("g") ); // false
console.log(gHappy("gg") ); // true
console.log(gHappy("") ); // true
console.log();

console.log(gHappy("xxgggxyz") ); // true
console.log(gHappy("xxgggxyg") ); // false
console.log(gHappy("xxgggxygg") ); // true
console.log();

console.log(gHappy("mgm") ); // false
console.log(gHappy("mggm") ); // true
console.log(gHappy("yyygggxyy") ); // true
