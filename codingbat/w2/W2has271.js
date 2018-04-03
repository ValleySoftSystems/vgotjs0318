function has271(arr) {

    for(var i=0; i<arr.length; i++){
        console.log(arr[i+1]);
        console.log((arr[i]+5));
        console.log(arr[i+2]);
        console.log((arr[i]-1));
        console.log((arr[i]-2));
        console.log((arr[i]-3));
        console.log((arr[i]+1));


        if((arr[i+1] == (arr[i]+5)) &&  ((arr[i+2] == (arr[i]-1))) || (arr[i+2] == (arr[i]-2))
                                        ||(arr[i+2] == (arr[i]-3))||(arr[i+2] == (arr[i]+1))) {
            return true;
        }
    }
    return false;
}


console.log(has271([2, 7, -2, 4, 10, 2]));

/*console.log(has271([1, 2, 7, 1])); T
console.log(has271([1, 2, 8, 1])); F
console.log(has271([2, 7, 1])); T
console.log(has271([3, 8, 2])); T
console.log(has271([2, 7, 3])); T
console.log(has271([2, 7, 4])); f
console.log(has271([2, 7, -1])); t
console.log(has271([2, 7, -2])); f
console.log(has271([4, 5, 3, 8, 0])); t
console.log(has271([2, 7, 5, 10, 4])); t
console.log(has271([2, 7, -2, 4, 9, 3])); t
console.log(has271([2, 7, 5, 10, 1])); f
console.log(has271([2, 7, -2, 4, 10, 2])); t
console.log(has271([1, 1, 4, 9, 0])); f
console.log(has271([1, 1, 4, 9, 4, 9, 2])); t*/
