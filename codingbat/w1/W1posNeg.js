function posNeg(a, b, negative) {
    if(negative){
        return ((a<0) && (b<0));
    }
    return (((a<0) && (b>0)) || ((a>0) && (b<0)));
}


console.log(posNeg(-1,2,false));

console.log(posNeg(1,-2,true));

console.log(posNeg(-1,-2,false));

console.log(posNeg(-1,-2,true));

console.log(posNeg(1,2,false));
