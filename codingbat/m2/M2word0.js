function word0(arr) {
    // var result = new Map(arr.map((i) => [i, 0]));   -- This too works
    //return result;

    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        map.set(arr[i], 0);
    }
    return map;

}

console.log(word0(["a", "b", "a", "b"])); //{"a": 0, "b": 0}
console.log(word0(["a", "b", "a", "c", "b"])); // {"a": 0, "b": 0, "c": 0}
console.log(word0(["c", "b", "a"])); // {"a": 0, "b": 0, "c": 0}
console.log(word0(["c", "c", "c", "c"])); // {"c": 0}