

var GSKUtils = (function() {
					var _createCounter = function(base) {
						var count = (base ? base : 0);
						// implement _incr, _decr, _value functions
						return {
							incr : _incr, 
							decr : _decr,
							value : _value
						}
					}

					var _deepCopy = function(obj) {
						return JSON.parse(JSON.stringify(obj))
					}

					var _cloneArray = function(arr) {
						return Object.assign([], arr);
					}

					var _cloneObject = function(obj) {
						return Object.assign({}, obj);
					}

					return {
						createCounter : _createCounter,
						deepCopy : _deepCopy,
						cloneObject : _cloneObject,
						cloneArray : _cloneArray
					}
				})();
