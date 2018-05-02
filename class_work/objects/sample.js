
// number, boolean, character => copies var-table entry
// objects => copies var-table entry
// String => copies the actual value (a new copy)

var obj = { a: [1,23,4], b:132, c:"hello" };

/*
	obj v_table
	a 	object  y  xxxx     [ 1, 23, 4, 8 ]
	b   number  n  132
	c   string  y  yyyy     "hello"
 */


var p = Object.assign({}, obj);
/*
	p v_table
	a 	object  y  xxxx    
	b   number  n  444
	c   string  y  zzzz     "world"
*/

p.b = 444; // obj.b => 132, p.b => 444
p.a.push(8); // p.a => [1,23,4,8] ... obj.a => [1,23,4, 8]
p.c = "world"; // p.c => "world" ... obj.c => "hello"

console.log(`obj: ${JSON.stringify(obj)}`);
console.log(`p: ${JSON.stringify(p)}`);

// serialize & deserialize
// serialize => converting binary object (that's accessible in a prog. lang. memory) into a persistable form (mostly, encoded string where encoding could be simple UTF_8 or other types based on need... e.g. if object contains secure data or PII, it is not uncommon to use base-64 encoding)
// deserialize => converting a serialized string (encoded string of characters allowed within the encoding format used for serializatoin) into an object that can be used in program

// JSON.stringify(jsObj) --- serializes JS object into JSON string format 
// JSON.parse(jsonStr) --- deserializes a JSON string into a JS object


var obj2 = { a: [1,23,4], b:132, c:"hello" };

/*
	obj2 v_table
	a 	object  y  xxxx     [ 1, 23, 4 ]
	b   number  n  132
	c   string  y  yyyy     "hello"
 */


var jsonStr = JSON.stringify(obj2); // serializing obj2 i.e. generates a JSON string
var q = JSON.parse(jsonStr); // creates a new JS object in memory for q from a string
							// this step has no knowledge that obj2 exists because it
							// only knows about a JSON string
/*
	q v_table
	a 	object  y  yyyy    [ 1, 23, 4 ]    
	b   number  n  444
	c   string  y  zzzz     "world"
*/

q.b = 444; // obj2.b => 132, q.b => 444
q.a.push(8); // q.a => [1,23,4,8] ... obj2.a => [1,23,4]
q.c = "world"; // q.c => "world" ... obj2.c => "hello"

console.log("");
console.log(`obj2: ${JSON.stringify(obj2)}`);
console.log(`q: ${JSON.stringify(q)}`);


var obj3 = [
				{
					city: "San Jose",
					population: [
									{ year: 1980, pop:  3324243 },
									{ year: 1990, pop:  5676654 },
									{ year: 2000, pop:  7674575 },
									{ year: 2010, pop: 10929209 },
								]
				},
				{
					city: "Santa Clara",
					population: [
									{ year: 1980, pop:  332423 },
									{ year: 1990, pop:  567664 },
									{ year: 2000, pop:  767475 },
									{ year: 2010, pop: 1092909 },
								]
				},
				{
					city: "Fremont",
					population: [
									{ year: 1980, pop:  3324943 },
									{ year: 1990, pop:  5646654 },
									{ year: 2000, pop:  7673375 },
									{ year: 2010, pop: 10529209 },
								]
				}
		];

var shallowObj3 = Object.assign([], obj3);
var deepCloneObj3 = JSON.parse(JSON.stringify(obj3));

console.log("BEFORE 1");
console.log(`obj3: ${JSON.stringify(obj3)}`);
console.log(`shallowObj3: ${JSON.stringify(shallowObj3)}`);

shallowObj3[2].population[2].year = 1947;

console.log("AFTER 1");
console.log(`obj3: ${JSON.stringify(obj3)}`);
console.log(`shallowObj3: ${JSON.stringify(shallowObj3)}`);

console.log("2nd BEFORE");
console.log(`obj3: ${JSON.stringify(obj3)}`);
console.log(`deepCloneObj3: ${JSON.stringify(deepCloneObj3)}`);

deepCloneObj3[2].population[1].year = 2018;

console.log("2nd AFTER");
console.log(`obj3: ${JSON.stringify(obj3)}`);
console.log(`deepCloneObj3: ${JSON.stringify(deepCloneObj3)}`);

var k = JSON.parse('{"header" : "", "body" : "<p>Hello World</p>", "x" : "5", "footer" : "<p>Done.</p>"}'); // deserializing

console.log(k.header);
console.log(k.body);
console.log(k.x);
console.log(k.footer);

var z = JSON.parse('<p>Hello World</p>, "x" : "5", <p>Done.</p>');
console.log(z.x);




