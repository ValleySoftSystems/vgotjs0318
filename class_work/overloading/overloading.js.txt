
// overloading: enabling an operation to work with more parameters or different data types

int sum(int i, int j) {
	return i+j;
}

float sum(float f1, float f2) {
	return f1+f2;
}

int p = sum(5, 6);
int q = sum(5.5, 0.3); 

/*
function sum(i,j) {
	return i+j;
}
var k =sum(2,4)
var l = sum(.4,99.9)
*/

int sum(int a, int b, int c, int d, int e) {
	return a+b+c+d+e;
}

function sum(a,b,c,d,e) { // var s = a + b + c + d + e;
	var s = 0;
	if (a) s += a; // if (a!==undefined && a!==null) s+=a;
	if (b) s += b;
	if (c) s += c;
	if (d) s += d;
	if (e) s += e;
	return s;
}

var n = sum(2,3)
var n = sum(2,3,4,4)

function sum() {
	var s = 0;

	(i>j?(i<10&&j>5?(k<6?i%2==0?5:7:9):3):4)

	for (var i = 0; i < arguments.length; i++) if (arguments[i]) s+=arguments[i];

	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i]) {
			s += arguments[i];
		}
	}

	return s;
}
