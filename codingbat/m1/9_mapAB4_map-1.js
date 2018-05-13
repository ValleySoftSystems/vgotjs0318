/*
Problem:
  Modify and return the given map as follows: if the keys "a" and "b" have values that have different lengths, then set "c" to have the longer value. If the values exist and have the same length, change them both to the empty string in the map.
*/

function mapAB4(m) {
 
  var map = new Map();
      
  for (const [key, value] of Object.entries(m)) {
     map.set(key, value);
  }
  
  var alen = (map.get("a") == "" || !map.get("a")) ? 0: map.get("a").length;
  var blen = (map.get("b") == "" || !map.get("b")) ? 0: map.get("b").length;
  var res = "{";
  
  if(map.has("a") && map.has("b")) {
     
    if( alen == blen) {
      map.set("a" ,"");
      map.set("b" ,"");
    }
    else {
      var max = (alen > blen)? map.get("a") :  map.get("b") ;
      map.set("c", max);
    }
  }
  for (const [key, value] of map) {
    
    res += `"${key}": "${value}" ; ` ;
       
  }
  console.log(res + "}");

  /*for (const [key, value] of map) {
    console.log(`"${key}": "${value}"`);
  }
  for (let entry of map) { 
     console.log(entry); 
    
  }*/
}


mapAB4({"a": "aaa", "b": "bb", "c": "cake"}) ; 
// {"a": "aaa", "b": "bb", "c": "aaa"}
mapAB4({"a": "aa", "b": "bbb", "c": "cake"}) ; 
// {"a": "aa", "b": "bbb", "c": "bbb"}
mapAB4({"a": "aa", "b": "bbb"}); 
// {"a": "aa", "b": "bbb", "c": "bbb"}
console.log();

mapAB4({"a": "aaa"}) ; // {"a": "aaa"}
mapAB4({"b": "bbb"}) ; // {"b": "bbb"}
mapAB4({"a": "aaa", "b": "bbb", "c": "cake"}) ; 
// {"a": "", "b": "", "c": "cake"}
console.log();

mapAB4({"a": "a", "b": "b", "c": "cake"}) ; 
// {"a": "", "b": "", "c": "cake"}
mapAB4({"a": "", "b": "b", "c": "cake"}) ; 
// {"a": "", "b": "b", "c": "b"}
mapAB4({"a": "a", "b": "", "c": "cake"}) ; 
// {"a": "a", "b": "", "c": "a"}
console.log();

mapAB4({"c": "cat", "d": "dog"}) ; 
// {"c": "cat", "d": "dog"}
mapAB4({"ccc": "ccc"}) ; 
// {"ccc": "ccc"}
mapAB4({"c": "a", "d": "b"}) ; 
// {"c": "a", "d": "b"}
console.log();

mapAB4({}) ; // {}
mapAB4({"a": "", "z": "z"}) ; // {"a": "", "z": "z"}
mapAB4({"b": "", "z": "z"}) ; // {"b": "", "z": "z"}
