var Animal = function () {

}
Animal.prototype.mySound = function () {
    console.log("Iam from animal constructor");
}
var Dog = function () {
    Animal.call(this);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Iam from Dog constructor");
}
var Puppy = function () {
    Dog.call(this);
}
Puppy.prototype = Object.create(Dog.prototype);
Puppy.prototype.constructor = Puppy;
