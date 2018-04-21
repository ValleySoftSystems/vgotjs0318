

/*

DATA:

orders will contains list of orders
each order will be an object of following data:
 - id (unique)
 - type of cake
 - state of the cake
possible states:
 - ordered = 1
 - preparing = 2
 - baking = 3
 - ready = 4 
 - picked = 5

METHODS:

openBakery
placeOrder
cancelOrder
makePayment
pickupOrder
orderStatus

TODO: order processing assumes all cakes take same number of steps
 fix it to take different times for different cake types
 for that to happen, introduce a new data type that represents the cake type
 that data type should represent a cake type and cake prep. iteration count or complexity
 it could be a simple number than need to be decremented to 0, higher the number, 
 longer it takes to prepare the cake

*/



var BAKERY = (function() {

	var th = null;
	var quit = false;
	var count = 2094;
	var orders = [];
	var archive = []; // TODO: fix orders data structure so that completed orders can be moved to archive,
					// without creating ineffcient memory usage in the orders data (e.g. sparse array)

	function processOrder(order) {
		if (order.state) { // if order is not cancelled (because null represents cancelled state)
			switch (order.state) {
				case 1: // ordered to
					order.state = 2; // preparing
					prepareCake(order);
					break;
				case 2: // preparing to
					order.state = 3; // baking
					bakeCake(order);
					break;
				case 3: // baking to 
					order.state = 4; // ready
					packForPickup(order);
					if (order.isPaid && order.callBack) {
						order.callBack(order.id);
					}
					break;
				case 4: // ready to be picked, but customer is not here
					// intentionally left empty 
					// nothing to do 
					break;
				case 5: // picked, 
					// intentionally left empty 
					// nothing to do 
					break; 
				default: // yikes! it should not happen
					throw "Hello Bill Gates! Fix your state machine, something went wrong in impl.";
					break;
			}
		}
	}

	// NOTE: these are actual work items that could be represented by graphical actions, but resorting to simple log
	function takePayment(order) { console.log(`customer paid for order ${order.id}`); order.isPaid = true; }
	function prepareCake(order) { console.log(`preparing material needed for ${order.typeOfCake} in order ${order.id}`); }
	function bakeCake(order) { console.log(`baking the cake of ${order.typeOfCake} in order ${order.id}`); }
	function packForPickup(order) { console.log(`packing the cake of ${order.typeOfCake} in order ${order.id}`); }
	function handoverCakeBox(order) { console.log(`Hi ${order.cust}! Here is your ${order.typeOfCake} cake`); }

	function openTheBakery(){
		while (!quit) {
			for (var i = 0; i < orders.length; i++) {
				//processOrder(orders[i]);
				console.log(i);
			}
		}
	}

	function closeBakery() { // normal close on timeout
		quit = true;
	}

	function shutdownBakery() { // overriding shutdown
		quit = true;
		window.clearTimeout(th);
	}

	function _open() {
		th = window.setTimeout(closeBakery, 3000); // set timer to close bakery
		window.setTimeout(openTheBakery, 50); // set time to open
		// don't wait here, it will be stuck, return
	}

	// note: samosa represents the call back function param
	function placeOrder(typeOfCake, name, samosa, payment) {
		if (!typeOfCake || !name) {
			throw "name and cake description is required";
		}

		count++;
		orders.push({
			id: count, 
			cust: name, 
			state: 1,
			callBack: samosa,
			isPaid: (!payment),
			type: typeOfCake
		});
		return count;
	}

	function findOrderById(id) {
			// filter returns only those elements of the array
			// into a newly created array, for which the inner
			// function returns true
		var obj = orders.filter(
						function(o) {
							return (o.id === id);
						});
		if (obj) {
			return obj[0];
		}
		else {
			return null;
		}
	}

	function cancelOrder(id) {
		var obj = findOrderById(id);
		if (obj && obj.state === 1) {
			console.log(`order with ${id} is now cancelled!`);
			obj.state = null;
		}
	}

	function makePayment(id) {
		var obj = findOrderById(id);
		if (obj) {
			obj.isPaid = true;
			console.log(`order with ${id} is now paid`);
		}
	}

	function pickupOrder(id) {
		var obj = findOrderById(id);
		if (!obj) return;
		if (obj.isPaid) {
			obj.state = 5;
			handoverCakeBox(obj);
		}
		else {
			console.log("got some cash?");
		}

	}

	return {
		order : {
			pickup: pickupOrder,
			pay: makePayment, 
			cancel: cancelOrder, 
			newOrder: placeOrder, 
		},
		mgmt : {
			open: _open, 
			close: closeBakery,
			shutdown: shutdownBakery
		}
	}

})();


