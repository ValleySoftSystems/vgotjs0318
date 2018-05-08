
/*
CLOSURE - used for call backs, pure functions, encapsulation (as in class), name space organization (code organization)
Closure pattern -> Module pattern -> code organization

ES6 ---> import, export ---> eliminated Module pattern use
ES5 ---> prototype class ---> eliminated encapsulation by closure
ES6 ---> classical class ---> eliminated encapsulation by closure

encapsulation: data+ methods

	data: instantiated during construction, once
	 - instantiated (if it is derived data) ... in constructor on on demand

	methods: created


Module pattern is closure which has 3 parts
 - initialization
 - private impl
 - public methods wrapped in an object (returned)
All of this is in a IIFE

*/



// encapsulation (as a class) using closure

// problems of using closure for encapsulation:
// no inheritance
// no polymorphism

/*

// no type checking i.e. can't use instanceOf


var P1 = new Person();

function convertReligion(p) {
	if (!p) return;
	// i.e. P is not undefined and not null
	if (!p instanceOf Person) return;
	// p is an instance of Person class
}

*/


/*
returns an instance of Person as an object with closure scope

*/
var getPerson = function(name, address, gender, dob, doe) {

	// constructor

	var _name = name, _address = address, _gender = gender.toUpperCase(), 
		_dob = parseDate(dob), 
		_doe = doe ? parseDate(doe) : null;

	var isMaleFlag = (gender === "M");

		// definitions of internal methods

	var _dump = function(obj) { return JSON.stringify(obj); }

	var _move = function(newAddress) {
		console.log(`moving from ${_dump(_address)} to ${_dump(newAddress)}`);
		_address = newAddress;
	}

	var _age = function() {
		return (new Date() - _dob);
	}

	var _isAlive = function() { return (_doe ? false: true); }

	// instance of Person
	return {
		name: _name, 
		address: _address, 
		isMale : _isMaleFlag,
		dob : _dob, 
		doe : _doe,
		age: _age,
		isAlive: _isAlive,
		move: _move
	}
}

// prototype class (ES5) or classical class (ES6 class)

// constructor, prototype functions


/* 

Prototypes are objects (instances) i.e. dictionary / literal-object

Every data type in JS has a prototype
All instances of a data type share a single prototype
Each instance of a data type will have its own dictionary (variable table)
However the entry 'prototype' for that instance will refer to common instance

> prototype classes result in created an object (called Prototype) for that data type even before any instance of that class is created

> where as classical classes do not result in any object creation to represent common methods... they are part of the blue print... only when an instance is created of that data type the var table is created, however all common methods are still part of blue print - no object to hold them exists like in prototype

*/



