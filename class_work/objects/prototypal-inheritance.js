function Person(name, dob, gender, address) {
	this.name = name;
	this.dob = Date.parse(dob);
	this.gender = gender;
	this.address = address;
}

Person.prototype.age = function() {
	return ((new Date() - this.dob) + " ms");
}

Person.prototype.changeAddress = function(newAddress) {
	this.address = newAddress;
}

Person.prototype.expired = function(doe) {
	this.doe = Date.parse(doe)
}

Person.prototype.isAlive = function() {
	return !this.doe;
}

Person.prototype.toString = function() {
	var str = (`\t\tName: ${this.name}`);
	str += (`\n\t\tAge: ${this.age()}`);
	str += (`\n\t\tGender: ${this.gender}`);
	str += (`\n\t\tAddress: ${this.address}`);
	(this.alive) && (str += (`\n\t\tExpired: ${this.doe}`));
	return str;
}


var p = new Person("Mother Teresa", "1970-01-01", "F", "Calcutta")
p.changeAddress("Kolkata")
p.expired("1999-12-22")

console.log(`\np.toString(): [\n${p.toString()}\n\t    ]`)
console.log(`typeof p: ${typeof p}`)
console.log(`p instanceof <Person>: ${p instanceof Person}`)
console.log(`p instanceof <Patient>: ${p instanceof Patient}`)


// Prototype Inheritance
// 1. create child class constructor ... but also call parent class constructor
// 2. create shallow copy of parent prototype in child prototype
// 3. add extra methods that belong in child prototype only

// constructor
function Patient(name, dob, gender, address, bloodGroup, ailments, vitals) {
	Person.call(this, name, dob, gender, address);
	this.bloodGroup = bloodGroup;
	this.ailments = ailments
	this.vitals = vitals
}

// WRONG: Patient.prototype = Person.prototype
// WRONG: Patient.prototype = JSON.parse(JSON.stringify(Person.prototype))

Patient.prototype = Object.assign({}, Person.prototype)

Patient.prototype.toString = function() {
	var str = Person.prototype.toString.call(this);
	str += (`\n\t\tBlood Group: ${this.bloodGroup}`);
	str += (`\n\t\tAilments: ${JSON.stringify(this.ailments)}`);
	str += (`\n\t\tVitals: ${JSON.stringify(this.vitals)}`);
	return str;
}

var k = new Patient("Donald Duck", "1970-01-01", "M", "Some Place", 
					"COLA", ["demented"], ["5'7''", "220lb"])
k.changeAddress("BlueHouse")

console.log(`\nk.toString(): [\n${k.toString()}\n\t    ]`)
console.log(`typeof k: ${typeof k}`)
console.log(`k instanceof <Person>: ${k instanceof Person}`)
console.log(`k instanceof <Patient>: ${k instanceof Patient}`)

