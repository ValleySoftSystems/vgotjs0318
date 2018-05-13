/*
Problem:
	Modify and return the given map as follows: for this problem the map may or may not contain the "a" and "b" keys. If both keys are present, append their 2 string values together and store the result under the key "ab".
*/

function mapAB(m) {
  
  var map = new Map();
      
  for (const [key, value] of Object.entries(m)) {
     map.set(key, value);
  }

  if(map.has("a") && map.has("b")) { 
    map.set("ab", map.get("a") + map.get("b"));
  }
  
  
  for (const [key, value] of map) {
    console.log(`"${key}": "${value}"`);
  }
  /*for (let entry of map) { 
     console.log(entry); 
    
  }*/
  
}

mapAB({"a": "Hi", "b": "There"}); 
// {"a": "Hi", "ab": "HiThere", "b": "There"}
console.log();
mapAB({"a": "Hi"});
// {"a": "Hi"}
console.log();
mapAB({"b": "There"}); 
// {"b": "There"}
console.log();
console.log();

mapAB({"c": "meh"}); 
// {"c": "meh"}
console.log();
mapAB({"a": "aaa", "ab": "nope", "b": "bbb", "c": "ccc"}); 
// {"a": "aaa", "ab": "aaabbb", "b": "bbb", "c": "ccc"}
console.log();
mapAB({"ab": "nope", "b": "bbb", "c": "ccc"}); 
// {"ab": "nope", "b": "bbb", "c": "ccc"}

/*
console.log(mapAB({"a": "Hi", "b": "There"})); 
// {"a": "Hi", "ab": "HiThere", "b": "There"}
console.log(mapAB({"a": "Hi"}));
// {"a": "Hi"}
console.log(mapAB({"b": "There"})); 
// {"b": "There"}
console.log();

console.log(mapAB({"c": "meh"})); 
// {"c": "meh"}
console.log(mapAB({"a": "aaa", "ab": "nope", "b": "bbb", "c": "ccc"})); 
// {"a": "aaa", "ab": "aaabbb", "b": "bbb", "c": "ccc"}
console.log(mapAB({"ab": "nope", "b": "bbb", "c": "ccc"})); 
// {"ab": "nope", "b": "bbb", "c": "ccc"}
*/