function front3(str) {
    if(str.length>=3){
        front = str.substring(0,3);
    }else{
        front = str;
    }
    return front + front + front;


    /*if(str.length<=3){
        return str+str+str;
    }

    front = str.substring(0,3);
    return front+front+front;*/

}

console.log(front3("Java"));

console.log(front3("Chocolate"));

console.log(front3("abc"));