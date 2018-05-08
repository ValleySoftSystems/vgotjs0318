/* 
Problem:
	We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. 
*/


function makeBricks(small, big, goal) {
  
  // check for enough small and big bricks in total
  if (goal > big * 5 + small) return false;
  
  // check for enough small bricks
  if (goal % 5 > small) return false;
  
  return true;
  
}

console.log(makeBricks(3, 1, 8)); // true
console.log(makeBricks(3, 1, 9)); // false
console.log(makeBricks(3, 2, 10)); // true
console.log();

console.log(makeBricks(3, 2, 8)); // true
console.log(makeBricks(3, 2, 9)); // false
console.log(makeBricks(6, 1, 11)); // true
console.log();

console.log(makeBricks(6, 0, 11)); // false
console.log(makeBricks(1, 4, 11)); // true
console.log(makeBricks(0, 3, 10)); // true
console.log();

console.log(makeBricks(1, 4, 12)); // false
console.log(makeBricks(3, 1, 7)); // true
console.log(makeBricks(1, 1, 7)); // false
console.log();

console.log(makeBricks(2, 1, 7)); // true
console.log(makeBricks(7, 1, 11)); // true
console.log(makeBricks(7, 1, 8)); // true
console.log();

console.log(makeBricks(7, 1, 13)); // false
console.log(makeBricks(43, 1, 46)); // true
console.log(makeBricks(40, 1, 46)); // false
console.log();

console.log(makeBricks(40, 2, 47)); // true
console.log(makeBricks(40, 2, 50)); // true
console.log(makeBricks(40, 2, 52)); // false
console.log();

console.log(makeBricks(22, 2, 33)); // false
console.log(makeBricks(0, 2, 10)); // true
console.log(makeBricks(1000000, 1000, 1000100)); // true
console.log();

console.log(makeBricks(2, 1000000, 100003)); // false
console.log(makeBricks(20, 0, 19)); // true
console.log(makeBricks(20, 0, 21)); // false
console.log();

console.log(makeBricks(20, 4, 51)); // false
console.log(makeBricks(20, 4, 39)); // true


