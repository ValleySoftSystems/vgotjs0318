function noTriples(arr){
    for(var i=0; i<arr.length-2; i++){
        if(arr[i] == arr[i+1] && arr[i+1] == arr[i+2] && arr[i] == arr[i+2])
            return false;

    }
    return true;
}

console.log(noTriples([1, 1, 2, 2, 1]));
console.log(noTriples([1, 1, 2, 2, 2, 1]));
console.log(noTriples([1, 1, 1, 2, 2, 2, 1]));
console.log(noTriples([1, 1, 2, 2, 1, 2, 1]));
console.log(noTriples([1, 2, 1]));
console.log(noTriples([1, 1, 1]));
console.log(noTriples([1, 1]));
console.log(noTriples([1]));
console.log(noTriples([]));


// need to see the i<arr.length statement