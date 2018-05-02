		
	var queueW2Stacks = function() {

			var enQstack = vssStack(), 
				deQstack = vssStack();

			var _enque = val => { enQstack.push(val); },

				_transfer = () => {
									// if deQ stack is empty, 
									if (deQstack.depth() < 1) {
										// reverse enQ stack into deQ and
										// then, return the top of deQ
										// if any more elements are left in deQ,
										// then will be popped on next deQue operation
										while (true) {
											if (enQstack.depth() < 1) break;
											deQstack.push(enQstack.pop());
										}									
									}
							},
				_deque = () => {
								_transfer();

								// pop only if deQ has elements
								if (deQstack.depth() > 0) {
									return deQstack.pop();
								}

								return null;
							},
				_peek = function() {
								_transfer();

								// pop only if deQ has elements
								if (deQstack.depth() > 0) {
									return deQstack.peek();
								}

								return null;
							},
				_toString = function() {
									return (`\n\t enQstack: ${enQstack.toString()} \n\t deQstack: ${deQstack.toString()}`);
								}

			return {
				enque : _enque,
				deque : _deque,
				peek  : _peek,
				toString : _toString
			}
		}

