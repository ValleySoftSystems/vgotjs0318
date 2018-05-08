

	// stack implementation as a closure (instead of class)
	var vssStack = function() {
		var data = [];

		var _peek = () => { if (data.length < 1) return null; else return data[data.length-1]; }

		var _pop = () => { if (data.length < 1) return null; else return data.pop(); }

		var _push = val => { data.push(val); }

		var _depth = () => data.length;

		var _toString = () => {
							return (`stack content: ${JSON.stringify(data)}`);
						}

		return {
			peek : _peek,
			pop  : _pop,
			push : _push,
			depth : _depth, 
			toString : _toString
		}
	}
