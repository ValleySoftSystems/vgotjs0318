function pre4(arr) {
        var count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != 4) count++;
            else break;
        }
        arr.length=count;
        return arr;
}

console.log(pre4([1, 2, 4, 1])); // → [1, 2]