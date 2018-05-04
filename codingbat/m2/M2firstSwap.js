function firstSwap(arr) {
    var map = new Map();
    for(var i=0; i<arr.length; i++){
        var key = arr[i].charAt(0);
        if(map.has(key)){
            if(map.get(key) != "done") {
                //swap
                var position = map.get(key);
                var temp = arr[position];
                arr[position] = arr[i];
                arr[i] = temp;
            }
            map.set(key,"done"); //once swapped make that key vale as done
        }else{
            map.set(key, i);
        }
    }
    return arr;
}

console.log(firstSwap(["ab", "ac"])); // ["ac", "ab"]
console.log(firstSwap(["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"])); // ["ay", "by", "cy", "cx", "bx", "ax", "aaa", "azz"]
console.log(firstSwap(["ax", "bx", "ay", "by", "ai", "aj", "bx", "by"])); // ["ay", "by", "ax", "bx", "ai", "aj", "bx", "by"]
console.log(firstSwap(["ax", "bx", "cx", "ay", "cy", "aaa", "abb"])); // ["ay", "bx", "cy", "ax", "cx", "aaa", "abb"]
console.log(firstSwap(["easy", "does", "it", "every", "ice", "eaten"])); // ["every", "does", "ice", "easy", "it", "eaten"]
console.log(firstSwap(["list", "of", "words", "swims", "over", "lily", "water", "wait"])); // ["lily", "over", "water", "swims", "of", "list", "words", "wait"]
console.log(firstSwap(["4", "8", "15", "16", "23", "42"])); // ["42", "8", "16", "15", "23", "4"]
console.log(firstSwap(["aaa"])); // ["aaa"]
console.log(firstSwap([])); // []
console.log(firstSwap(["a", "b", "c", "xx", "yy", "zz"])); // ["a", "b", "c", "xx", "yy", "zz"]
