
{ // To make the variable 'map' local to this file

  let map = new Map();

  function getMap(obj) {
    Object.keys(obj).forEach( key => map.set(key, obj[key]));
  }

  function mapAB(obj) {
     map.clear(); // clear the map so that it holds new data everytime the mapAB() is invoked
     getMap(obj);
     let temp ="";
     if (map.has('a') && map.has("b")) {
        temp = map.get("a")+map.get("b");
        map.set("ab",temp);
        return map;
     }
     return map;   

  }

  console.log(mapAB({"a": "Hi", "b": "There"})); // → {"a": "Hi", "ab": "HiThere", "b": "There"}
  console.log(mapAB({"a": "Hi"})); // → {"a": "Hi"}
  console.log(mapAB({"b": "There"})); // → {"b": "There"}
}  