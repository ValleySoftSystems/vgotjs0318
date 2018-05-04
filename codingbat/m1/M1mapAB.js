function mapAB(map) {
    var m = new Map(Object.entries(map));
    if(m.has("a") && m.has("b")){
        m.set("ab", m.get("a") + m.get("b"));
    }
  return m;
}

console.log(mapAB({"a": "Hi", "b": "There"})); // {"a": "Hi", "ab": "HiThere", "b": "There"}
console.log(mapAB({"a": "Hi"})); // {"a": "Hi"}
console.log(mapAB({"b": "There"})); // {"b": "There"}
console.log(mapAB({"c": "meh"})); // {"c": "meh"}
console.log(mapAB({"a": "aaa", "ab": "nope", "b": "bbb", "c": "ccc"})); // {"a": "aaa", "ab": "aaabbb", "b": "bbb", "c": "ccc"}
console.log(mapAB({"ab": "nope", "b": "bbb", "c": "ccc"})); // {"ab": "nope", "b": "bbb", "c": "ccc"}
