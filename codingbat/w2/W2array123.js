function array123(arr) {
    for(var i=0; i<arr.length; i++){
        /*if(arr[i]==1){
            if(arr[i+1]==2){
                if(arr[i+2]==3){
                    return true;
                }
            }
        }*/
        if((arr[i]==1) && (arr[i+1]==2) && (arr[i+2]==3)) return true;
    }

return false;
}

console.log(array123([1, 1, 2, 3, 1]));
console.log(array123([1, 1, 2, 4, 1]));
console.log(array123([1, 1, 2, 1, 2, 3]));
console.log(array123([1, 1, 2, 1, 2, 1]) );
console.log(array123([1, 2, 3, 1, 2, 3]));
console.log(array123([1, 2, 3]));
console.log(array123([1, 1, 1]));
console.log(array123([1, 2]));
console.log(array123([1]));
console.log(array123([]));
