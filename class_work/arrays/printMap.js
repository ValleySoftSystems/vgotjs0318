/*
function my2String(m){
	if (m && (typeof m == "object") && (m instanceof Map)) {
		// --  print map content
		var iterator1 = m[Symbol.iterator]();
		for (var item of iterator1) {
		  console.log(item);
		}
	}
}

my2String("hrlloe"); 
*/

Map.prototype.my2String = function(){
		// --  print map content
		var iterator1 = this[Symbol.iterator]();
		for (var item of iterator1) {
		  console.log(item);
		}
	}


/*
	typeof m == "object"
	typeof m === "object"

	var a = "6";
	var b = 6;

	a == b  // true
	a === b // false

*/

