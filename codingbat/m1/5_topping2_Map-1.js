/*
Problem:
	Given a map of food keys and their topping values, modify and return the map as follows: 
	if the key "ice cream" has a value, set that as the value for the key "yogurt" also. 
	If the key "spinach" has a value, change that value to "nuts".

*/
function topping2(m) {
 
  var map = new Map();
      
  for (const [key, value] of Object.entries(m)) {
     map.set(key, value);
  }
  if(map.has("ice cream")){
    map.set("yogurt", map.get("ice cream"));
  }
  if(map.has("spinach")){
    map.set("spinach", "nuts");
  }
  for (const [key, value] of map) {
    console.log(`"${key}": "${value}"`);
  }
  /*for (let entry of map) { 
     console.log(entry); 
    
  }*/
}
topping2({"ice cream": "cherry"}); 
// {"yogurt": "cherry", "ice cream": "cherry"}
console.log();
topping2({"spinach": "dirt", "ice cream": "cherry"}) ; 
// {"yogurt": "cherry", "spinach": "nuts", "ice cream": "cherry"}
console.log();
topping2({"yogurt": "salt"}) ;
// {"yogurt": "salt"}
console.log();

topping2({"yogurt": "salt", "bread": "butter"}) ; 
// {"yogurt": "salt", "bread": "butter"}
console.log();
topping2({}) ; // {}
console.log();
topping2({"ice cream": "air", "salad": "oil"}) ; 
// {"yogurt": "air", "ice cream": "air", "salad": "oil"}


/*

console.log(topping2({"ice cream": "cherry"}) ); 
// {"yogurt": "cherry", "ice cream": "cherry"}
console.log(topping2({"spinach": "dirt", "ice cream": "cherry"}) ); 
// {"yogurt": "cherry", "spinach": "nuts", "ice cream": "cherry"}
console.log(topping2({"yogurt": "salt"}) );
// {"yogurt": "salt"}
console.log();


console.log(topping2({"yogurt": "salt", "bread": "butter"}) ); 
// {"yogurt": "salt", "bread": "butter"}
console.log(topping2({}) ); // {}
console.log(topping2({"ice cream": "air", "salad": "oil"}) ); 
// {"yogurt": "air", "ice cream": "air", "salad": "oil"}

*/