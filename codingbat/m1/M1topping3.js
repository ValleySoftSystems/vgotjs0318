function topping3(map) {
    var m = new Map(Object.entries(map));
    if(m.get("potato")){
        m.set("fries", m.get("potato"));
    }
    if(m.get("salad")){
        m.set("spinach", m.get("salad"));
    }
return m;
}

console.log(topping3({"potato": "ketchup"})); // {"potato": "ketchup", "fries": "ketchup"}
console.log(topping3({"potato": "butter"})); // {"potato": "butter", "fries": "butter"}
console.log(topping3({"salad": "oil", "potato": "ketchup"})); // {"spinach": "oil", "salad": "oil", "potato": "ketchup", "fries": "ketchup"}
console.log(topping3({"toast": "butter", "salad": "oil", "potato": "ketchup"})); // {"toast": "butter", "spinach": "oil", "salad": "oil", "potato": "ketchup", "fries": "ketchup"}
console.log(topping3({})); // {}
console.log(topping3({"salad": "pepper", "fries": "salt"})); // {"spinach": "pepper", "salad": "pepper", "fries": "salt"}
