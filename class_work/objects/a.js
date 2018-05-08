

'use strict';

function compel(){

	// rice cooking - rice, washing dish, rice cooking dish

	{
		// separate item that goes into rice later
		// dishes = marination, cooking
		// pour intermediate product into rice cooking dish
		// clean the bowls
	}

	// rice cooking is continuing
}





let x = 10, z=5; 

function test(y) {
	let x = 20;
	console.log(`x:${x}, y:${y}, z:${z}`); // 20
	x++; y--;
	console.log(`x:${x}, y:${y}, z:${z}`); // 21
	{
		let x = 10;
		console.log(`x:${x}, y:${y}, z:${z}`); // 10
		x++; y--;
		console.log(`x:${x}, y:${y}, z:${z}`); // 11
		{
			let x = 30; // shadowing
			console.log(`x:${x}, y:${y}, z:${z}`); // 30
			x++; y--;
			console.log(`x:${x}, y:${y}, z:${z}`); // 31
			{
				let x = 40;
				console.log(`x:${x}, y:${y}, z:${z}`); // 40
				x++; y--;
				console.log(`x:${x}, y:${y}, z:${z}`); // 41
			}
			x++; y--;
			console.log(`x:${x}, y:${y}, z:${z}`); // 32
		}
		x++; y--;
		console.log(`x:${x}, y:${y}, z:${z}`); // 12
	}
	x++; y--;
	console.log(`x:${x}, y:${y}, z:${z}`); // 22
}

test(x);




