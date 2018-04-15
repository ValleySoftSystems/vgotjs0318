function dateFashion(you, date) {
    if((you>=0 && you<=2) || (date>=0 && date<=2)){
        return 0;
    }else if((you>=8 && you<=10) || (date>=8 && date<=10)){
        return 2;
    }else{
        return 1;
    }
}

console.log(dateFashion(5, 10)); // 2
console.log(dateFashion(5, 2)); // 0
console.log(dateFashion(5, 5)); // 1
console.log(dateFashion(3, 3)); // 1
console.log(dateFashion(10, 2)); // 0
console.log(dateFashion(2, 9)); // 0
console.log(dateFashion(9, 9)); // 2
console.log(dateFashion(10, 5)); // 2
console.log(dateFashion(2, 2)); // 0
console.log(dateFashion(3, 7)); // 1
console.log(dateFashion(2, 7)); // 0
console.log(dateFashion(6, 2)); // 0


