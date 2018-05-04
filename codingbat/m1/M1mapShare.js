function mapShare(map) {
    var m = new Map(Object.entries(map));
    if(m.has("a")){
        //var valuea = m.get("a");
        m.set("b", m.get("a"));
    }
    if(m.has("c")) {
        m.delete("c");
    }
 return m;
}

console.log(mapShare({"a": "aaa", "b": "bbb", "c": "ccc"})); // {"a": "aaa", "b": "aaa"}
console.log(mapShare({"b": "xyz", "c": "ccc"})); // {"b": "xyz"}
console.log(mapShare({"a": "aaa", "c": "meh", "d": "hi"})); // {"a": "aaa", "b": "aaa", "d": "hi"}
console.log(mapShare({"a": "xyz", "b": "1234", "c": "yo", "z": "zzz"})); // {"a": "xyz", "b": "xyz", "z": "zzz"}
console.log(mapShare({"a": "xyz", "b": "1234", "c": "yo", "d": "ddd", "e": "everything"})); // {"a": "xyz", "b": "xyz", "d": "ddd", "e": "everything"}
