function mapBully(map) {
    var m = new Map(Object.entries(map));
    if(m.has("a")){
        var tmp = m.get("a");
        m.set("b", tmp);
        m.set("a","");
    }
    return m;
}

console.log(mapBully({"a": "candy", "b": "dirt"})); // {"a": "", "b": "candy"}
console.log(mapBully({"a": "candy"})); // {"a": "", "b": "candy"}
console.log(mapBully({"a": "candy", "b": "carrot", "c": "meh"})); // {"a": "", "b": "candy", "c": "meh"}
console.log(mapBully({"b": "carrot"})); // {"b": "carrot"}	{"b": "carrot"}
console.log(mapBully({"c": "meh"})); // {"c": "meh"}
console.log(mapBully({"a": "sparkle", "c": "meh"})); // {"a": "", "b": "sparkle", "c": "meh"}