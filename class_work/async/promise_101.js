/* 
background process:
> prints 10,20,...5000
> once it is done, it will return the string "done"

foreground process:
> prints -10, -20, ... -5000
> once it is done, it will print "yay"
*/

var autoIncrDecrCounter = function(callbackFunc, flag) {

	var i = 0

	var print = function() {
					console.log(`${(flag? "P" : "N")}: ${i}`)
					i += (flag? 10 : -10);
					if (Math.abs(i) === 200) { // exit
						callbackFunc(flag? "Done" : "Yay"); // invoke the passed in func, f (callback)
					}
					else {
						// add 100 ms delay to execution
						setTimeout(print, 50); // TDM - time division mux
					}
				}

	return print;
}



function printString(str) {
	console.log(str)
}

function onError(str) {
	console.log(str)
}

// a promise object is constructed
// a promise has a main() function which will be initialized to the
// function body passed into the constructor
// a promise has a property resolve which has to be used in main() func
// a promise also has a property reject which has to be used in main() func
// the author of promise implements main() func
var p = new Promise(function(resolve, reject) {
				var bgPrint = autoIncrDecrCounter(resolve, true)
				bgPrint();
			})

// invoker of promise sets resolve using then
// sets reject using catch
// finally allows to execute code that must be executed in either case
p.then(printString); // -> resolve

/*
p.catch(onError) // -> reject
p.finally(() => {
	console.log("will compulsorily execute for both success, error cases")
})
*/

/*
var bgPrint = autoIncrDecrCounter(printString, true)
setTimeout(bgPrint, 100) // non-blocking
*/

var fgPrint = autoIncrDecrCounter(printString, false)
fgPrint(); // blocking


