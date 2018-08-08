 function isSquare(n){
    return n>=0 && Math.sqrt(n)%1 === 0;
}

console.log(isSquare(-1));