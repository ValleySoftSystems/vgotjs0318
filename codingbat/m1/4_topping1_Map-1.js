/*
Problem:
	Given a map of food keys and topping values, modify and return the map as follows: if the key "ice cream" 
	is present, set its value to "cherry". In all cases, set the key "bread" to have the value "butter".
*/

function topping1(m) {
  
  var map = new Map();
      
  for (const [key, value] of Object.entries(m)) {
     map.set(key, value);
  }
  
  map.set("bread", "butter");
  
  if(map.has("ice cream")) {
    map.set("ice cream", "cherry");
  }
  
  for (const [key, value] of map) {
    console.log(`"${key}": "${value}"`);
  }
  /*for (let entry of map) { 
     console.log(entry); 
    
  }*/
}

topping1({"ice cream": "peanuts"}) ; 
// {"bread": "butter", "ice cream": "cherry"}
console.log();
topping1({}) ; 
// {"bread": "butter"}
console.log();
topping1({"pancake": "syrup"}) ; 
// {"bread": "butter", "pancake": "syrup"}
console.log();
console.log();

topping1({"bread": "dirt", "ice cream": "strawberries"}) ; 
// {"bread": "butter", "ice cream": "cherry"}
console.log();
topping1({"bread": "jam", "ice cream": "strawberries", "salad": "oil"}) ; 
// {"bread": "butter", "ice cream": "cherry", "salad": "oil"}


/*

console.log(topping1({"ice cream": "peanuts"}) ); 
// {"bread": "butter", "ice cream": "cherry"}
console.log(topping1({}) ); 
// {"bread": "butter"}
console.log(topping1({"pancake": "syrup"}) ); 
// {"bread": "butter", "pancake": "syrup"}
console.log();

console.log(topping1({"bread": "dirt", "ice cream": "strawberries"}) ); 
// {"bread": "butter", "ice cream": "cherry"}
console.log(topping1({"bread": "jam", "ice cream": "strawberries", "salad": "oil"}) ); 
// {"bread": "butter", "ice cream": "cherry", "salad": "oil"}

*/


