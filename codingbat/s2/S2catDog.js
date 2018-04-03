function catDog(str) {
    var count1 = 0;
    var count2 = 0;
    for(var i=0; i<str.length-2; i++){
        //if(str[i]=="c" && str[i+1]=="a" && str[i+2]=="t")

        if(str.substring(i,i+3) == "cat"){          //easier way
            count1++;
        }
        //if(str[i]=="d" && str[i+1]=="o" && str[i+2]=="g")

        if(str.substring(i, i+3) == "dog"){         //easier way
            count2++;
        }
    }
    if (count1 == count2) {
        return true;
    }else return false;

}

//console.log(catDog("catxdogxdogxcat")); //true

console.log(catDog("catdog")); //true
console.log(catDog("catcat")); //false
console.log(catDog("1cat1cadodog")); //true
console.log(catDog("catxxdogxxxdog")); //false
//console.log("*");

console.log(catDog("catxdogxdogxcat")); //true

//console.log("*");

console.log(catDog("catxdogxdogxca"));
console.log(catDog("dogdogcat"));
console.log(catDog("dogogcat"));
console.log(catDog("dog"));
console.log(catDog("cat"));
console.log(catDog("ca"));
console.log(catDog("c"));
console.log(catDog(""));