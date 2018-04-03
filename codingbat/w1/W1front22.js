function front22(str) {
    front = str.substring(0,2);
    return front+str+front;
}

console.log(front22("kitten"));

console.log(front22("Ha"));

console.log(front22("abc"));