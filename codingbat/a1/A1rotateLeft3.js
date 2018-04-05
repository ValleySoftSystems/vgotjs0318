function rotateLeft3(arr) {
    return [arr[1], arr[2], arr[0]];
}

console.log(rotateLeft3([1, 2, 3]));
console.log(rotateLeft3([5, 11, 9]));
console.log(rotateLeft3([7, 0, 0]));
console.log(rotateLeft3([1,2,1]));
console.log(rotateLeft3([0,0,1]));
