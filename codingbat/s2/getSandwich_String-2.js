
/* 
  Problem:
  	A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

   Notes:
   	find firstindex and last index of bread
   	if both are not equal return the substring between them
   	otherwise return empty string
*/
function getSandwich (str) {
  
  var firstb , lastb;
    
  firstb = str.indexOf('bread');
  lastb = str.lastIndexOf('bread');
  
  return (firstb != lastb)? str.substring(firstb + 5, lastb):"";
  
}
 

 
console.log(getSandwich("breadjambread") );// "jam"
console.log(getSandwich("xxbreadjambreadyy") ); //jam
console.log(getSandwich("xxbreadyy") ); //""
console.log("");

console.log(getSandwich("xxbreadbreadjambreadyy") );// "breadjam"
console.log(getSandwich("breadAbread") ); //"A"
console.log(getSandwich("breadbread") ); //""
console.log("");

console.log(getSandwich("xyz") );// ""
console.log(getSandwich("") ); //""
console.log(getSandwich("breadbreaxbread") ); //"breax"
console.log("");
console.log(getSandwich("breaxbreadybread") );// "y"
console.log(getSandwich("breadbreadbreadbread") ); //"breadbread"
console.log("");

