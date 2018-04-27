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
	var str = (`\t\t Name: ${this.name}`);
	str += (`\n\t\t Age: ${this.age()}`);
	str += (`\n\t\t Gender: ${this.gender}`);
	str += (`\n\t\t Address: ${this.address}`);
	(this.alive) && (str += (`\n\t\t Expired: ${this.doe}`));
	return str;
}


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
	str += (`\n\t\t Blood Group: ${this.bloodGroup}`);
	str += (`\n\t\t Ailments: ${JSON.stringify(this.ailments)}`);
	str += (`\n\t\t Vitals: ${JSON.stringify(this.vitals)}`);
	return str;
}


function dumpObj(obj) {
	console.log(`\nobj.toString(): [\n${obj.toString()}\n\t\t]`)
	console.log(`typeof obj: ${typeof obj}`)
	console.log(`obj instanceof <Person>: ${obj instanceof Person}`)
	console.log(`obj instanceof <Patient>: ${obj instanceof Patient}`)	
}


var p = new Person("Mother Teresa", "1970-01-01", "F", "Calcutta")
p.changeAddress("Kolkata")
p.expired("1999-12-22")
dumpObj(p)


var k = new Patient("Donald Duck", "1970-01-01", "M", "Some Place", 
					"COLA", ["demented"], ["5'7''", "220lb"])
k.changeAddress("BlueHouse")
dumpObj(k)

