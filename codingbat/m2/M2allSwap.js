function allSwap(arr) {
    var map = new Map();
    for(var i=0; i<arr.length; i++){
        //var first = arr[i];   //arr[i].charAt[0]
        var key = arr[i].charAt(0);
        if(map.has(key)){
            //swap
            var position = map.get(key);
            var temp = arr[position];
            arr[position] = arr[i];
            arr[i] = temp;

            map.delete(key) //once swapped delete the kep from map
        }else{
            map.set(key, i);
        }
    }
 return arr;
}

console.log(allSwap(["ab", "ac"])); // ["ac", "ab"]
console.log(allSwap(["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"])); // ["ay", "by", "cy", "cx", "bx", "ax", "azz", "aaa"]
console.log(allSwap(["ax", "bx", "ay", "by", "ai", "aj", "bx", "by"])); // ["ay", "by", "ax", "bx", "aj", "ai", "by", "bx"]
console.log(allSwap(["ax", "bx", "cx", "ay", "cy", "aaa", "abb"])); // ["ay", "bx", "cy", "ax", "cx", "abb", "aaa"]
console.log(allSwap(["easy", "does", "it", "every", "ice", "eaten"])); // ["every", "does", "ice", "easy", "it", "eaten"]
console.log(allSwap(["list", "of", "words", "swims", "over", "lily", "water", "wait"])); // ["lily", "over", "water", "swims", "of", "list", "words", "wait"]
console.log(allSwap(["4", "8", "15", "16", "23", "42"])); // ["42", "8", "16", "15", "23", "4"]
console.log(allSwap(["aaa"])); // ["aaa"]
console.log(allSwap([])); // []
console.log(allSwap(["a", "b", "c", "xx", "yy", "zz"])); // ["a", "b", "c", "xx", "yy", "zz"]

