function Person(name, dob, gender, address) {
	this.name = name;
	this.dob = Date.parse(dob);
	this.gender = gender;
	this.address = address;
	this.alive = true
	this.jsonStringify = function() {
			console.log("")
			console.log(`Name: ${this.name}`);
			console.log(`Age: ${this.age()}`);
			console.log(`Gender: ${this.gender}`);
			console.log(`Address: ${this.address}`);
			(this.alive? console.log("") : console.log(`Expired: ${this.doe}`));
		}
}

Person.prototype.age = function() {
	var calculateAge = function() {
		const timeNow = new Date()
		const msDiff = timeNow - this.dob
		return msDiff;
	}
	calculateAge = calculateAge.bind(this)
	return calculateAge();
}

Person.prototype.changeAddress = function(newAddress) {
	this.address = newAddress;
}

 Person.prototype.expired = function(doe) {
	this.doe = Date.parse(doe)
	this.alive = false
}


// Prototype Inheritance
// 1. create child class constructor ... but also call parent class constructor
// 2. create shallow copy of parent prototype in child prototype
// 3. add extra methods that belong in child prototype only

function Patient(name, dob, gender, address, bloodGroup, ailments, vitals) {
	Person.call(this, name, dob, gender, address);
	this.bloodGroup = bloodGroup;
	this.ailments = ailments
	this.vitals = vitals

	this.myStringify = this.jsonStringify.bind(this);

	this.jsonStringify = function() {
			this.myStringify();
			console.log(`Blood Group: ${this.bloodGroup}`);
			console.log(`Ailments: ${JSON.stringify(this.ailments)}`);
			console.log(`Vitals: ${JSON.stringify(this.vitals)}`);
	}
}

// WRONG: Patient.prototype = Person.prototype
// WRONG: Patient.prototype = JSON.parse(JSON.stringify(Person.prototype))

Patient.prototype = Object.assign({}, Person.prototype)

var p = new Person("Mother Teresa", "1970-01-01", "F", "Calcutta")
p.changeAddress("Kolkata")
p.expired("1999-12-22")
p.jsonStringify();
console.log(`typeof p: ${typeof p}`)
console.log(`p instanceof Person: ${p instanceof Person}`)
console.log(`p instanceof Patient: ${p instanceof Patient}`)

var k = new Patient("Donald Trump", "1970-01-01", "M", "Some Place", 
					"COLA", ["demented"], ["5'7''", "220lb"])
k.changeAddress("WhiteHouse")
k.jsonStringify();
console.log(`typeof k: ${typeof k}`)
console.log(`k instanceof Person: ${k instanceof Person}`)
console.log(`k instanceof Patient: ${k instanceof Patient}`)


