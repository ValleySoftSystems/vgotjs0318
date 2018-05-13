/*
Problem:
	Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that value, and set the key "a" to have the value "". Basically "b" is a bully, taking the value and replacing it with the empty string.
*/



function mapBully(obj) {
  
  
  var map = new Map();
      
  for (const [key, value] of Object.entries(obj)) {
     map.set(key, value);
  }
  
  if(map.has("a") ) {
    var tmp = map.get("a");
     map.set("b", tmp);
    map.set("a", "");
   
   
  }
  
  /*map.forEach( (value, key, map) => {
      console.log(`"${key}": "${value}"`); 
  });*/
  
  for (const [key, value] of map) {
    console.log(`"${key}": "${value}"`);
  }
  /*for (let entry of map) { 
     console.log(entry); 
    
  }*/

}



mapBully({"a": "candy", "b": "dirt"}) ; 
//{"a": "", "b": "candy"}
mapBully({"a": "candy"}) ; 
// {"a": "", "b": "candy"}
mapBully({"a": "candy", "b": "carrot", "c": "meh"}) ; 
// {"a": "", "b": "candy", "c": "meh"}
console.log();


mapBully({"b": "carrot"}) ; 
// {"b": "carrot"}
mapBully({"c": "meh"}) ; 
// {"c": "meh"}
mapBully({"a": "sparkle", "c": "meh"}) ; 
// {"a": "", "b": "sparkle", "c": "meh"}
