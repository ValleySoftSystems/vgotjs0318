/* 
Problem:
	When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.

Notes:
	when weekend is true check cigars only to be <= 40
	when weekend is false check cigars  to be <=40 and >=60
	
*/
function cigarParty (cigars, isWeekend) {
  
    if(isWeekend) {
      
       return cigars >= 40 ;
      
    } else {
      
      return (cigars >= 40 && cigars <= 60);
      
    }
    
}

console.log(cigarParty(30, false) ); //false
console.log(cigarParty(50, false) ); //true
console.log(cigarParty(70, true) ); //true
console.log();

console.log(cigarParty(30, true) ); //false
console.log(cigarParty(50, true) ); //true
console.log(cigarParty(60, false) ); //true
console.log();


console.log(cigarParty(61, false) ); //false
console.log(cigarParty(40, false) ); //true
console.log(cigarParty(39, false) ); //false
console.log();

console.log(cigarParty(40, true) ); //true
console.log(cigarParty(39, true) ); //false
console.log();
