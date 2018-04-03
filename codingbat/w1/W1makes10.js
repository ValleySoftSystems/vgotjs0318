function makes10(a,b){
    if((a==10 || b==10)|| (a+b == 10)){
        return true;
    }
    return false;

    //return ((a==10 || b==10)|| (a+b == 10))? true : false;    //can also use ternary operator '?' here
}

console.log(makes10(9,10));

console.log(makes10(9,9));

console.log(makes10(1,9));

console.log(makes10(10,10));