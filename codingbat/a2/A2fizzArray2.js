function fizzArray2(n) {
    var arr =[];
    for(var i=0; i<n; i++){
        arr.push(i);
    }
//return arr.join().split(",");  fizzArray2(0) ==> [''] prints '' for this condition istead of []
return arr.map(String);
}

console.log(fizzArray2(4)); // ["0", "1", "2", "3"]
console.log(fizzArray2(10)); // ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
console.log(fizzArray2(2)); // ["0", "1"]
console.log(fizzArray2(1)); // ["0"]
console.log(fizzArray2(0)); // []
console.log(fizzArray2(7)); // ["0", "1", "2", "3", "4", "5", "6"]