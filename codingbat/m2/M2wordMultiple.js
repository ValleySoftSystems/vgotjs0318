function wordMultiple(arr) {
    var map = new Map();
    for (var i = 0; i < arr.length; i++) {
        if(!map.has(arr[i])){
            map.set(arr[i],false);
        }else{
            //map.set(arr[i], map.get(arr[i]+1));
            map.set(arr[i], true)
        }
    }

 return map;
}

console.log(wordMultiple(["a", "b", "a", "c", "b"])); // {"a": true, "b": true, "c": false}
console.log(wordMultiple(["c", "b", "a"])); // {"a": false, "b": false, "c": false}
console.log(wordMultiple(["c", "c", "c", "c"])); // {"c": true}
console.log(wordMultiple([])); // {}
console.log(wordMultiple(["this", "and", "this"])); // {"and": false, "this": true}
console.log(wordMultiple(["d", "a", "e", "d", "a", "d", "b", "b", "z", "a", "a", "b", "z", "x"])); // {"a": true, "b": true, "d": true, "e": false, "x": false, "z": true}
