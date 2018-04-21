
	/*

	// call, apply clarity
	// debug this few times to understand better

	function addTwoNumbers(a, b) {
		return a+b;
	}

	var a2 = function() { return addTwoNumbers(arguments); }
	var b2 = function() { return addTwoNumbers.call(null, arguments); }
	var c2 = function() { return addTwoNumbers.apply(null, arguments); }


	clog(addTwoNumbers(5,3));
	clog(a2(5,3));
	clog(c2(5,3));

	*/

	var clog = function() { console.log.apply(null, arguments); } // short cut for clog
	// clog = () => {} // uncomment this if you want clog to work
