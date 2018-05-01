function parrotTrouble (talking, hour ){
  return (talking && (hour < 7 || hour > 20) )
  
}

console.log(parrotTrouble(true, 6) );
console.log(parrotTrouble(true, 7) );
console.log(parrotTrouble(false, 6) );