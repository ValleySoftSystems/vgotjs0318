function evenOdd(arr) {
        var evenArr = [];
        var oddArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
              evenArr+= arr[i]; 
            } else if (arr[i] % 2 != 0){
                oddArr+= arr[i];
            }
        }
        arr = [...evenArr, ...oddArr];
        return arr;
}

console.log(evenOdd([1, 0, 1, 0, 0, 1, 1])); // → [0, 0, 0, 1, 1, 1, 1]
console.log(evenOdd([3, 3, 2])); // → [2, 3, 3]
console.log(evenOdd([2, 2, 2])); // → [2, 2, 2]