
function diff21 (n) {
  if (n > 21)
    return (-(21 - n) * 2);
  else
    return (21 - n);
}

console.log(diff21(19));
console.log(diff21(10));
console.log(diff21(21));
console.log(diff21(28));
