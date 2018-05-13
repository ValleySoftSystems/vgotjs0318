/*
Problem:
	Modify and return the given map as follows: if exactly one of the keys "a" or "b" has a value in the map (but not both), set the other to have that same value in the map.

*/

function mapAB3(m) {
 
  var map = new Map();
      
  for (const [key, value] of Object.entries(m)) {
     map.set(key, value);
  }
    
  if( !(
         map.has("a") && 
         map.has("b") 
        ) ) {
    
    if(map.has("a")) map.set("b", map.get("a"));
    if(map.has("b")) map.set("a", map.get("b"));
  }
  for (const [key, value] of map) {
    console.log(`"${key}": "${value}"`);
  }
  /*for (let entry of map) { 
     console.log(entry); 
    
  }*/
}

mapAB3({"a": "aaa", "c": "cake"}); 
// {"a": "aaa", "b": "aaa", "c": "cake"}
console.log();

mapAB3({"b": "bbb", "c": "cake"}); 
// {"a": "bbb", "b": "bbb", "c": "cake"}
console.log();
mapAB3({"a": "aaa", "b": "bbb", "c": "cake"}); 
// {"a": "aaa", "b": "bbb", "c": "cake"}
console.log();

mapAB3({"ccc": "ccc"}); 
// {"ccc": "ccc"}
console.log();
mapAB3({"c": "a", "d": "b"}); 
// {"c": "a", "d": "b"}
console.log();
mapAB3({}); 
// {}
console.log();

mapAB3({"a": ""}); // {"a": "", "b": ""}
console.log();
mapAB3({"b": ""}); // {"a": "", "b": ""}
console.log();
mapAB3({"a": "", "b": ""}); // {"a": "", "b": ""}
console.log();

mapAB3({"aa": "aa", "a": "apple", "z": "zzz"}); 
// {"aa": "aa", "a": "apple", "b": "apple", "z": "zzz"}
