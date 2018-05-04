function inOrder(a,b,c,bOK) {
    if((bOK && c>b) || (b>a && c>b)) return true;
   // if(b>a && c>b) return true;
    return false;
}


console.log(inOrder(1, 2, 4, false)); // true
console.log(inOrder(1, 2, 1, false)); // false
console.log(inOrder(1, 1, 2, true)); // true
console.log(inOrder(3, 2, 4, false)); // false
console.log(inOrder(2, 3, 4, false)); // true
console.log(inOrder(3, 2, 4, true)); // true
console.log(inOrder(4, 2, 2, true)); // false
console.log(inOrder(4, 5, 2, true)); // false
console.log(inOrder(2, 4, 6, true)); // true
console.log(inOrder(7, 9, 10, false)); // true
console.log(inOrder(7, 5, 6, true)); // true
console.log(inOrder(7, 5, 4, true)); // false

