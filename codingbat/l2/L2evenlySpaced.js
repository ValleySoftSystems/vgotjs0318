function evenlySpaced(a, b, c) {
        var min = Math.min(a, b, c);
        var max = Math.max(a, b, c);
        var mid = null;
        if ((min == a && max == b) || (min == b && max == a)) {
            mid = c;
        }
        if ((min == b && max == c) || (min == c && max == b)) {
            mid = a;
        }
        if ((min == c && max == a) || (min == a && max == c)) {
            mid = b;
        }

        return (Math.abs(min - mid) == Math.abs(mid - max));

    }

console.log(evenlySpaced(2, 4, 6)); // true
console.log(evenlySpaced(4, 6, 2)); // true
console.log(evenlySpaced(4, 6, 3)); // false
console.log(evenlySpaced(6, 2, 4)); // true
console.log(evenlySpaced(6, 2, 8)); // false
console.log(evenlySpaced(2, 2, 2)); // true
console.log(evenlySpaced(2, 2, 3)); // false
console.log(evenlySpaced(9, 10, 11)); // true
console.log(evenlySpaced(10, 9, 11)); // true
console.log(evenlySpaced(10, 9, 9)); // false
console.log(evenlySpaced(2, 4, 4)); // false
console.log(evenlySpaced(2, 2, 4)); // false
console.log(evenlySpaced(3, 6, 12)); // false
console.log(evenlySpaced(12, 3, 6)); // false
