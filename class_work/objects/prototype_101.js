/*
	Object: state, mutators, accessors
		- state is represented by letiables, properties
			- letiables are identifiers that have storage
			- properties are accessors for letiables, sometimes derived from letiables
		- mutators are methods that enable state transitions
		- accessors are methods that provide insight into current state

	Class: is an enclosure of data and relavant methods
	Object: is an instance that represents a live state and methods that allow state machine representation i.e. they enable state transition

	Class:
	Initializer: initializes a state
	Methods: accessors or mutators
	variables: representing state

	Prototype Class: (ES5) ... prototypal
	- Initializer: Constructor function
	- Prototype functions
	- properties accessible with this.

	Closure : (ES3) ... not a class 
	- Initializer: closure function (parent function)
	- Methods: Child functions that are part of closure
	- variables: all private data that's in closure scope
	==> no context => polymorphism ==> inheritance
	==> has no concrete data typpe
	==> scope, can manage state

	Class: (ES6) ... classical
	- Initializer: constructor
	- Methods: member functions
	- variables: properties
*/

/*
var Gender = {
		MALE: "male",
		FEMALE: "female"
}

var person = {
	name : "trump", 
	gender: Gender.MALE 
}

console.log(person.gender);
*/



var GarageDoorFSM = function() {
						// -- internal enumerated types
 
						this.DoorStates = {
							CLOSED: "Closed", 
							OPENED: "Opened",
							MOVING_DOWN : "Moving Down",
							MOVING_UP : "Moving Up",
							STOPPED_MIDWAY : "Stopped Midway"
						}

						this.Direction = {
							NONE: "None", 
							MOVING_DOWN : "Moving Down",
							MOVING_UP : "Moving Up"
						}

						// --- initialize the state 
						this.doorState = {
									state: DoorStates.CLOSED,
									direction: Direction.NONE;
								}
					}

GarageDoorFSM.prototype.onClick = function() {

	var stateTransition = function() {
		// private function
		// problem: this has no object context i.e. it can't access this. of current object
		// good part: has local scope of onClick i.e. it can access local variables of onClick
		this.doorState = {
			state: DoorStates.MOVING_UP
		}
	}

	stateTransition = stateTransition.bind(this); 

	// stateTransition.call(this);

}

var gd1 = new GarageDoorFSM();
var gd2 = new GarageDoorFSM();

gd1.onClick();
//gd1.stateTransition();










