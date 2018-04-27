
/* prototype class: constructor, prototype functions */

var fellow = "hello!"

function Person(name, dob, gender, address) {
	this.name = name;
	this.dob = Date.parse(dob);
	this.gender = gender;
	this.address = address;
}

Person.prototype.printAge = function() {

	console.log(' in printAge: ' + this.dob);

	var calculateAge = function() { // no object context, 
		// can access global context, global scope, local scope

		console.log(' in calculateAge: ' + this.dob);

		const timeNow = new Date()
		const msDiff = timeNow - this.dob
		// AT THIS LINE, 
		return msDiff;
	}

	calculateAge = calculateAge.bind(this)

	let age = calculateAge()

	console.log(`Age is: ${age()} ms`);
}


var dinosaur = new Person('velociraptor', '1970-10-22', 'M', 'Jurassic World')

dinosaur.printAge();



