function pairs(arr) {
 var map = new Map();
 for(var i=0; i<arr.length; i++){
     var first = arr[i];
     map.set(first[0], first[first.length-1]);
 }
 return map;
}

console.log(pairs(["code", "bug"])); // {"b": "g", "c": "e"}
console.log(pairs(["man", "moon", "main"])); // {"m": "n"}
console.log(pairs(["man", "moon", "good", "night"])); // {"g": "d", "m": "n", "n": "t"}
console.log(pairs([])); // {}
console.log(pairs(["a", "b"])); // {"a": "a", "b": "b"}
console.log(pairs(["are", "codes", "and", "cods"])); // {"a": "d", "c": "s"}
console.log(pairs(["apple", "banana", "tea", "coffee"])); // {"a": "e", "b": "a", "c": "e", "t": "a"}


