// overriding

// standalone/base: prototype/constructor class
// 1. constructor: (a) state initialization
// 2. prototype functions


// derived: prototype/constructor class
// 1. constructor: (b) extra step of calling parent constructor with current object context
// 2. prototype shallow copy from parent
// 3. add child protyotype functions

// overriding

// -- standalone/base class
var Animal = function(name, gender) {
				// defensive programming
				// 1) to block dev errors
				// 2) to handle unforeseen data errors
				if (this instanceof Animal) {
					throw "ERROR: should not create an instance of abstract base class Animal. Instance must be of a derived type."
				}

				// using the code from https://gist.githubusercontent.com/gordonbrander/2230317/raw/e949b99b2c52c0dfb3044b68e401111e307087fa/ID.js
				// this function is credited to its author
				this.id = (function() {
				  // Math.random should be unique because of its seeding algorithm.
				  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
				  // after the decimal.
				  return '_' + Math.random().toString(36).substr(2, 9);
				})();

				this.name = name;
				this.gender = gender;
			}


Animal.prototype.makeSound = function() {
	throw "ERROR: makeSound must be overridden in child Object, cannot use Animal prototype instance for this function - this is a placeholder only"
}

Animal.prototype.toString = function() {
	return `(ID: ${this.id}, name: ${this.name}, gender: ${this.gender})`;
}


// -- derived class
var Dog = function(name, gender, breed) {
	Animal.call(this, name,gender); // 'this' here refer's to Dog context
	this.breed = breed;
	if (this instanceof Dog) {
		console.log(`Dog object ${this.name} created`)
	}
}

Dog.prototype = Object.assign({}, Animal.prototype); // shallow copy of parent prototype to child
// Dog.prototype = Animal.prototype;
// Dog.prototype = JSON.parse(JSON.stringify(Animal.prototype))


Dog.prototype.makeSound = function() {
	this.bark();
}

Dog.prototype.bark = function() {
	console.log("bhow bhow");
};


Dog.prototype.toString = function() {
	var s = Animal.prototype.toString.call(this);
	return `(${s}, breed: ${this.breed})`;
}


var Puppy = function(name, gender, breed, age) {
	Dog.call(this, name, gender, breed)
	this.age = age
	console.log(`Puppy object ${this.name} created`)
}

Puppy.prototype = Object.assign({}, Dog.prototype); // shallow copy of parent prototype to child

// normal override which simple provides new impl. over parent override
Puppy.prototype.bark = function() {
	console.log("vow vow");
};

// override with super() call i.e. first use parent func impl. and add extra impl.
Puppy.prototype.toString = function() {
	var s = Dog.prototype.toString.call(this);
	return `(${s}, age: ${this.age})`;
}


// Disney Club

// ERROR
// var animalObj = new Animal("Goofy", "M");

console.log("")
var dogObj = new Dog("Goofy", "M", "fedora");
dogObj.makeSound(); // Dog.prototype.makeSound is invoked and it uses Dog.prototype.bark
console.log(dogObj.toString());

console.log("")
var puppyObj = new Puppy("Pluto", "M", "mixed", "2weeks")
puppyObj.makeSound(); // Dog.prototype.makeSound is invoked, but it uses Puppy.prototype.bark
console.log(puppyObj.toString());
console.log("")

// Dog.prototype.makeSound is using polymorphism or dynamic binding to call right instance





