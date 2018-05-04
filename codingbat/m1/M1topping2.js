function topping2(map) {
    var m = new Map(Object.entries(map));
    if(m.has("ice cream")){
        m.set("yogurt", m.get("ice cream"));
    }
    if(m.has("spinach")) {
        m.set("spinach", "nuts");
    }
 return m;
}

console.log(topping2({"ice cream": "cherry"})); // {"yogurt": "cherry", "ice cream": "cherry"}
console.log(topping2({"spinach": "dirt", "ice cream": "cherry"})); // {"yogurt": "cherry", "spinach": "nuts", "ice cream": "cherry"}
console.log(topping2({"yogurt": "salt"})); // {"yogurt": "salt"}
console.log(topping2({"yogurt": "salt", "bread": "butter"})); // {"yogurt": "salt", "bread": "butter"}
console.log(topping2({})); // {}
console.log(topping2({"ice cream": "air", "salad": "oil"})); // {"yogurt": "air", "ice cream": "air", "salad": "oil"}
