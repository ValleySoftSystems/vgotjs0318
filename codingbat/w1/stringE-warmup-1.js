function stringE(str) {
	if (typeof str === "string") {
    var count = 0;
    for (var i=0; i<(str.length); i++){
      if (str.substr(i,1) == "e"){
        count++;
      }
    }
    if (count <= 3)
      return true;
    else
      return false;
  } 
}

console.log(stringE("Hello"));// → true
console.log(stringE("Heelle"));// → true
console.log(stringE("Heelele"));// → false