function mapAB2(map) {
    var m = new Map(Object.entries(map));
    if(m.get("a")== m.get("b")){
        m.delete("a");
        m.delete("b");
    }
 return m;
}

console.log(mapAB2({"a": "aaa", "b": "aaa", "c": "cake"})); // {"c": "cake"}
console.log(mapAB2({"a": "aaa", "b": "bbb"})); // {"a": "aaa", "b": "bbb"}
console.log(mapAB2({"a": "aaa", "b": "bbb", "c": "aaa"})); // {"a": "aaa", "b": "bbb", "c": "aaa"}
console.log(mapAB2({"a": "aaa"})); // {"a": "aaa"}
console.log(mapAB2({"b": "bbb"})); // {"b": "bbb"}
console.log(mapAB2({"a": "", "b": "", "c": "ccc"})); // {"c": "ccc"}
console.log(mapAB2({})); // {}
console.log(mapAB2({"a": "a", "b": "b", "z": "zebra"})); // {"a": "a", "b": "b", "z": "zebra"}
