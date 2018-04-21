function makeChocolate(small, big, goal) {
    if((goal > big*5 + small) || (goal%5 > small)){
        return -1;
    }

    if(big*5 > goal){
        return goal%5;
    }

    return goal - big*5;
}

console.log(makeChocolate(4, 1, 9)); // 4
console.log(makeChocolate(4, 1, 10)); // -1
console.log(makeChocolate(4, 1, 7)); // 2
console.log(makeChocolate(6, 2, 7)); // 2
console.log(makeChocolate(4, 1, 5)); // 0
console.log(makeChocolate(4, 1, 4)); // 4
console.log(makeChocolate(5, 4, 9)); // 4
console.log(makeChocolate(9, 3, 18)); // 3
console.log(makeChocolate(3, 1, 9)); // -1
console.log(makeChocolate(1, 2, 7)); // -1
console.log(makeChocolate(1, 2, 6)); // 1
console.log(makeChocolate(1, 2, 5)); // 0
console.log(makeChocolate(6, 1, 10)); // 5
console.log(makeChocolate(6, 1, 11)); // 6
console.log(makeChocolate(6, 1, 12)); // -1
console.log(makeChocolate(6, 1, 13)); // -1
console.log(makeChocolate(6, 2, 10)); // 0
console.log(makeChocolate(6, 2, 11)); // 1
console.log(makeChocolate(6, 2, 12)); // 2
console.log(makeChocolate(60, 100, 550)); // 50
console.log(makeChocolate(1000, 1000000, 5000006)); // 6
console.log(makeChocolate(7, 1, 12)); // 7
console.log(makeChocolate(7, 1, 13)); // -1
console.log(makeChocolate(7, 2, 13)); // 3
