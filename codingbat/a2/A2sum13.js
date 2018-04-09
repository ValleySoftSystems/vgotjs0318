/************************************************************/


function sum13(arr) {
    for(var i=0; i<=arr.length;){
        if(arr[i] == 13) arr.splice(i,2);
        if(arr[i]!=13) i++;
    }
    var sum = (arr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0));

    return sum;
}


console.log(sum13([1, 2, 2, 1])); // 6
console.log(sum13([1, 1])); // 2
console.log(sum13([1, 2, 2, 1, 13])); // 6
console.log(sum13([1, 2, 13, 2, 1, 13])); // 4
console.log(sum13([13, 1, 2, 13, 2, 1, 13])); // 3
console.log(sum13([])); // 0
console.log(sum13([13])); // 0
console.log(sum13([13, 13])); // 0
console.log(sum13([13, 0, 13])); // 0
console.log(sum13([13, 1, 13])); // 0
console.log(sum13([5, 7, 2])); // 14
console.log(sum13([5, 13, 2])); // 5
console.log(sum13([0])); // 0
console.log(sum13([13, 0])); // 0










