
{ // Putting this code block in order to make the variable 'map' local to this file
  let map = new Map();

  function getMap(obj) {
    Object.keys(obj).forEach( key => map.set(key, obj[key]));
  }

  function mapBully(obj) {
     map.clear();
     getMap(obj);
     let temp ="";
     if (map.has('a')) {
       temp = map.get("a");
       map.set("a","").set("b",temp);
     }
     return map;
  }

  console.log(mapBully({"a": "candy", "b": "dirt"})); // → {"a": "", "b": "candy"}
  console.log(mapBully({"a": "candy"})); // → {"a": "", "b": "candy"}
  console.log(mapBully({"a": "candy", "b": "carrot", "c": "meh"})); // → {"a": "", "b": "candy", "c": "meh"}
}  