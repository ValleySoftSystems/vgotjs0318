/* 
Problem:
	The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.
*/

function squirrelPlay(temp, isSummer) {
  
  if( (!isSummer) && (temp >= 60 && temp <= 90) ) return true;
  else if ((isSummer) && (temp >= 60 && temp <= 100) ) return true;
  else return false;
  
}
console.log(squirrelPlay(70, false) ); // true      
console.log(squirrelPlay(95, false) ); // false      
console.log(squirrelPlay(95, true) ); // true 
console.log();

console.log(squirrelPlay(90, false) ); // true      
console.log(squirrelPlay(90, true) ); // true      
console.log(squirrelPlay(50, false) ); // false 
console.log();

console.log(squirrelPlay(50, true) ); // false      
console.log(squirrelPlay(100, false) ); // false      
console.log(squirrelPlay(100, true) ); // true  
console.log();

console.log(squirrelPlay(105, true) ); // false      
console.log(squirrelPlay(59, false) ); // false      
console.log(squirrelPlay(59, true) ); // false  
console.log();

console.log(squirrelPlay(60, false) ); // true      
