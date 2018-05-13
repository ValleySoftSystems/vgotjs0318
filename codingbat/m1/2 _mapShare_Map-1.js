/*
Problem:
	Modify and return the given map as follows: 
		if the key "a" has a value, set the key "b" to have that same value.
	 	In all cases remove the key "c", leaving the rest of the map unchanged.
*/
function mapShare(m) {
  
  var map = new Map();
      
  for (const [key, value] of Object.entries(m)) {
     map.set(key, value);
  }

  if(map.has("a")) {
    map.set("b", map.get("a")); 
  }
  map.delete("c");
  
  for (const [key, value] of map) {
    console.log(`"${key}": "${value}"`);
  }
  /*for (let entry of map) { 
     console.log(entry); 
    
  }*/
  
}

mapShare({"a": "aaa", "b": "bbb", "c": "ccc"}); 
// {"a": "aaa", "b": "aaa"}
console.log();

mapShare({"b": "xyz", "c": "ccc"}); 
// {"b": "xyz"}
console.log();
mapShare({"a": "aaa", "c": "meh", "d": "hi"}); 
// {"a": "aaa", "b": "aaa", "d": "hi"}
console.log();


mapShare({"a": "xyz", "b": "1234", "c": "yo", "z": "zzz"}); 
// {"a": "xyz", "b": "xyz", "z": "zzz"}
console.log();
mapShare({"a": "xyz", "b": "1234", "c": "yo", "d": "ddd", "e": "everything"}); 
// {"a": "xyz", "b": "xyz", "d": "ddd", "e": "everything"}

/*
console.log(mapShare({"a": "aaa", "b": "bbb", "c": "ccc"})); 
// {"a": "aaa", "b": "aaa"}
console.log(mapShare({"b": "xyz", "c": "ccc"})); 
// {"b": "xyz"}
console.log(mapShare({"a": "aaa", "c": "meh", "d": "hi"})); 
// {"a": "aaa", "b": "aaa", "d": "hi"}


console.log(mapShare({"a": "xyz", "b": "1234", "c": "yo", "z": "zzz"})); 
// {"a": "xyz", "b": "xyz", "z": "zzz"}
console.log(mapShare({"a": "xyz", "b": "1234", "c": "yo", "d": "ddd", "e": "everything"})); 
// {"a": "xyz", "b": "xyz", "d": "ddd", "e": "everything"}
*/
