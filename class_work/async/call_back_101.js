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
			setTimeout(print, 50);
		}
	}

	return print;
}

function printString(str) {
	console.log(str)
}

var bgPrint = autoIncrDecrCounter(printString, true)
setTimeout(bgPrint, 100) // backgrounding

var fgPrint = autoIncrDecrCounter(printString, false)
fgPrint();
