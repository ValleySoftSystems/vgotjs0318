{

	function noX(arr) {
	    return arr.map(e => e.replace(/x/g,''));
	}

	console.log(noX(["ax", "bb", "cx"])); // → ["a", "bb", "c"]
	console.log(noX(["xxax", "xbxbx", "xxcx"])); // → ["a", "bb", "c"]
	console.log(noX(["x"])); // → [""]

}