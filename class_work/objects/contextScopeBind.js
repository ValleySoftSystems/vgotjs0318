
// this represents current context
// current context is nothing but the current object it's bound to

// if function does not belong to an object, it assumes global default context

// in a web-browser, 
// global default context is "window" object which is an instance of data type "Window"
// all global variables are inside "window" 

// in node, there is no global default context (object)
// so a global variable stands by itself

var nameOfPerson = "subba rao";

function testContextChange(/* no params */) {
	console.log(this.nameOfPerson);
	console.log(this.gender);
}

// testContextChange();


/*
	function f(a, b)

	f(a,b)
	f.call(<context>, a, b)
	f.apply(<context>, [a, b])

	var g = f.call(<context>, a, b);
	g();
 */

var myObj = { 
				nameOfPerson : "devi", 
				gender: "female"
			}


var newFunc = testContextChange.bind(myObj)


console.log("")
console.log(`Actual function: ${JSON.stringify(testContextChange.toString())}`)


console.log("")
console.log(`Function created by bind: ${JSON.stringify(newFunc.toString())}`)

var m1 = { 
				nameOfPerson : "jagannadh", 
				gender: "male"
			}
var m2 = { 
				nameOfPerson : "balaram", 
				gender: "male"
			}
var m3 = { 
				nameOfPerson : "subhadra", 
				gender: "female"
			}

console.log('\n\ncalling testContextChange with .call\n')
testContextChange.call(m1)
testContextChange.call(m2)
testContextChange.call(m3)

console.log('\n\ncalling newFunc w/o .call => no impact\n')
newFunc()
newFunc()

console.log('\n\ncalling newFunc with .call => no impact\n')
newFunc.call(m1)
newFunc.call(m2)
newFunc.call(m3)

