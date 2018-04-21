
	var vssQueue = function() {
		var data = [];
		var _enqueue = val => { data.push(val); }
		var _dequeue = () => data.shift();
		var _peek = () => data[0];

		return {
			enQ : _enqueue,
			deQ : _dequeue, 
			peek : _peek
		}
	}
