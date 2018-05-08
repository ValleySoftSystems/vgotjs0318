/*Given 2 ints, a and b, return true 
if one if them is 10 or if their sum is 10.*/

function makes10 (a, b){
  return ((a==10)||(b==10)||(a+b==10));

}
console.log(makes10(9, 10));
console.log(makes10(9, 9));
console.log(makes10(1, 9));

