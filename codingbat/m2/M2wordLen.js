function wordLen(arr) {
    var map = new Map();
    for(var i=0; i<arr.length; i++){
        map.set(arr[i],arr[i].length);
    }
return map;
}

console.log(wordLen(["a", "bb", "a", "bb"])); // {"bb": 2, "a": 1}
console.log(wordLen(["this", "and", "that", "and"])); // {"that": 4, "and": 3, "this": 4}
console.log(wordLen(["code", "code", "code", "bug"])); // {"code": 4, "bug": 3}
console.log(wordLen([])); // {}
console.log(wordLen(["z"])); // {"z": 1}
