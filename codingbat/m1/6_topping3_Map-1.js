/*
Problem:
	Given a map of food keys and topping values, modify and return the map as follows: if the key "potato" has a value, set that as the value for the key "fries". If the key "salad" has a value, set that as the value for the key "spinach".

*/
function topping3(m) {
 
  var map = new Map();
      
  for (const [key, value] of Object.entries(m)) {
     map.set(key, value);
  }
    
  if(map.has("potato")) {
    map.set("fries", map.get("potato"));
  }
  
  if(map.has("salad")){
    map.set("spinach", map.get("salad"));
  }
 for (const [key, value] of map) {
    console.log(`"${key}": "${value}"`);
  }
  /*for (let entry of map) { 
     console.log(entry); 
    
  }*/
}
topping3({"potato": "ketchup"}); 
// {"potato": "ketchup", "fries": "ketchup"}
topping3({"potato": "butter"}); 
// {"potato": "butter", "fries": "butter"}
topping3({"salad": "oil", "potato": "ketchup"});
// {"spinach": "oil", "salad": "oil", "potato": "ketchup", "fries": "ketchup"}
console.log();

topping3({"toast": "butter", "salad": "oil", "potato": "ketchup"}); 
// {"toast": "butter", "spinach": "oil", "salad": "oil", "potato": "ketchup", "fries": "ketchup"}
topping3({}); 
// {}
topping3({"salad": "pepper", "fries": "salt"}); 
// {"spinach": "pepper", "salad": "pepper", "fries": "salt"}


