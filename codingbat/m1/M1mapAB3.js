function mapAB3(map) {
    var m = new Map(Object.entries(map));
    if(m.get("a") && !m.get("b") || m.get("a")==""){
        m.set("b", m.get("a"));
    }
    if(m.get("b") && !m.get("a") || m.get("b")== ""){
        m.set("a", m.get("b"));
    }
return m;
}

console.log(mapAB3({"a": "aaa", "c": "cake"})); // {"a": "aaa", "b": "aaa", "c": "cake"}
console.log(mapAB3({"b": "bbb", "c": "cake"})); // {"a": "bbb", "b": "bbb", "c": "cake"}
console.log(mapAB3({"a": "aaa", "b": "bbb", "c": "cake"})); // {"a": "aaa", "b": "bbb", "c": "cake"}
console.log(mapAB3({"ccc": "ccc"})); // {"ccc": "ccc"}
console.log(mapAB3({"c": "a", "d": "b"})); // {"c": "a", "d": "b"}
console.log(mapAB3({})); // {}
console.log(mapAB3({"a": ""})); // {"a": "", "b": ""}
console.log(mapAB3({"b": ""})); // {"a": "", "b": ""}
console.log(mapAB3({"a": "", "b": ""})); // {"a": "", "b": ""}
console.log(mapAB3({"aa": "aa", "a": "apple", "z": "zzz"})); // {"aa": "aa", "a": "apple", "b": "apple", "z": "zzz"}

