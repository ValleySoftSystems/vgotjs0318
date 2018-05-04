function topping1(map) {
    var m = new Map(Object.entries(map));
    if(m.has("ice cream")){
        m.set("ice cream", "cherry");
    }
    if(m.has("bread")|| !m.has("bread")){
        m.set("bread", "butter");
    }
  return m;
}

console.log(topping1({"ice cream": "peanuts"})); // {"bread": "butter", "ice cream": "cherry"}
console.log(topping1({})); // {"bread": "butter"}
console.log(topping1({"pancake": "syrup"})); // {"bread": "butter", "pancake": "syrup"}
console.log(topping1({"bread": "dirt", "ice cream": "strawberries"})); // {"bread": "butter", "ice cream": "cherry"}
console.log(topping1({"bread": "jam", "ice cream": "strawberries", "salad": "oil"})); // {"bread": "butter", "ice cream": "cherry", "salad": "oil"}
