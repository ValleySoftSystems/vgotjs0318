/*
Problem:
	Modify and return the given map as follows: if the keys "a" and "b" are both in the map and have equal values, remove them both.

*/

function mapAB2(m) {
 
  var map = new Map();
      
  for (const [key, value] of Object.entries(m)) {
     map.set(key, value);
  }
    
  if(map.get("a") == map.get("b")) {
    map.delete("a");
    map.delete("b");
  }
  for (const [key, value] of map) {
    console.log(`"${key}": "${value}"`);
  }
  /*for (let entry of map) { 
     console.log(entry); 
    
  }*/
}

mapAB2({"a": "aaa", "b": "aaa", "c": "cake"}) ; // {"c": "cake"}
console.log();
mapAB2({"a": "aaa", "b": "bbb"}) ; // {"a": "aaa", "b": "bbb"}
console.log();
mapAB2({"a": "aaa", "b": "bbb", "c": "aaa"}) ; 
// {"a": "aaa", "b": "bbb", "c": "aaa"}
console.log();

mapAB2({"a": "aaa"}) ; // {"a": "aaa"}
console.log();
mapAB2({"b": "bbb"}) ; // {"b": "bbb"}
console.log();
mapAB2({"a": "", "b": "", "c": "ccc"}) ; // {"c": "ccc"}
console.log();

mapAB2({}) ; // {}
console.log();
mapAB2({"a": "a", "b": "b", "z": "zebra"}) ; 
// {"a": "a", "b": "b", "z": "zebra"}



