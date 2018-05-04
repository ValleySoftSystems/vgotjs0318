function firstChar(arr) {
    var map = new Map();
    for(var i=0; i<arr.length; i++){
        var first = arr[i];
        if(!map.has(first[0])){    //if map doest not have the first char of arr[i]
            map.set(first[0], arr[i]);
        }else{
            map.set(first[0], map.get(first[0])+arr[i]);
        }
    }
 return map;
}

console.log(firstChar(["salt", "tea", "soda", "toast"])); // {"s": "saltsoda", "t": "teatoast"}
console.log(firstChar(["aa", "bb", "cc", "aAA", "cCC", "d"])); // {"a": "aaaAA", "b": "bb", "c": "cccCC", "d": "d"}
console.log(firstChar([])); // {}
console.log(firstChar(["apple", "bells", "salt", "aardvark", "bells", "sun", "zen", "bells"])); // {"a": "appleaardvark", "b": "bellsbellsbells", "s": "saltsun", "z": "zen"}
