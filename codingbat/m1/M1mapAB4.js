function mapAB4(map) {
    var m = new Map(Object.entries(map));
    if(m.has("a") && m.has("b")) {
      if(m.get("a").length == m.get("b").length){
          m.set("a","");
          m.set("b","");
      }else {
          m.get("a").length > m.get("b").length ? m.set("c", m.get("a")) : m.set("c", m.get("b"));
      }
    }
return m;
}

console.log(mapAB4({"a": "aaa", "b": "bb", "c": "cake"})); // {"a": "aaa", "b": "bb", "c": "aaa"}
console.log(mapAB4({"a": "aa", "b": "bbb", "c": "cake"})); // {"a": "aa", "b": "bbb", "c": "bbb"}
console.log(mapAB4({"a": "aa", "b": "bbb"})); // {"a": "aa", "b": "bbb", "c": "bbb"}
console.log(mapAB4({"a": "aaa"})); // {"a": "aaa"}
console.log(mapAB4({"b": "bbb"})); // {"b": "bbb"}
console.log(mapAB4({"a": "aaa", "b": "bbb", "c": "cake"})); // {"a": "", "b": "", "c": "cake"}
console.log(mapAB4({"a": "a", "b": "b", "c": "cake"})); // {"a": "", "b": "", "c": "cake"}
console.log(mapAB4({"a": "", "b": "b", "c": "cake"})); // {"a": "", "b": "b", "c": "b"}
console.log(mapAB4({"a": "a", "b": "", "c": "cake"})); // {"a": "a", "b": "", "c": "a"}
console.log(mapAB4({"c": "cat", "d": "dog"})); // {"c": "cat", "d": "dog"}
console.log(mapAB4({"ccc": "ccc"})); // {"ccc": "ccc"}
console.log(mapAB4({"c": "a", "d": "b"})); // {"c": "a", "d": "b"}
console.log(mapAB4({})); // {}
console.log(mapAB4({"a": "", "z": "z"})); // {"a": "", "z": "z"}
console.log(mapAB4({"b": "", "z": "z"})); // {"b": "", "z": "z"}
