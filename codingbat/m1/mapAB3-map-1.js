
{ // To make the variable 'map' local to this file

  let map = new Map();

  function getMap(obj) {
    Object.keys(obj).forEach( key => map.set(key, obj[key]));
  }

  function mapAB3(obj) {
     map.clear(); // clear the map so that it holds new data everytime the mapAB3() is invoked
     getMap(obj);
     if (map.has('a') && !map.has("b")) {
        map.set("b",map.get("a"));
     }
     if (!map.has('a') && map.has("b")) {
        map.set("a",map.get("b"));
     }
     return map;   

  }

  console.log(mapAB3({"a": "aaa", "c": "cake"})); // → {"a": "aaa", "b": "aaa", "c": "cake"}
  console.log(mapAB3({"b": "bbb", "c": "cake"})); // → {"a": "bbb", "b": "bbb", "c": "cake"}
  console.log(mapAB3({"a": "aaa", "b": "bbb", "c": "cake"})); // → {"a": "aaa", "b": "bbb", "c": "cake"}
}