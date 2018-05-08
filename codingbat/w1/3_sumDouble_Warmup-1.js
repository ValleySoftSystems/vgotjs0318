/*Given two int values, return their sum. 
Unless the two values are the same, then return double their sum. */

let sum = 0;
function sumDouble (a, b){
    sum = a + b;
    if( a === b){
        return 2 * sum;
    }
    return sum;
}
console.log( sumDouble(1, 2) );
console.log( sumDouble(3, 2) );
console.log( sumDouble(2, 2) );