function zero(func) {
  return arguments.length === 1 ? arguments[0](0) : 0;
}
function one() {
  return arguments.length === 1 ? arguments[0](1) : 1;
}
function two() {
  return arguments.length === 1 ? arguments[0](2) : 2;
}
function three() {
  return arguments.length === 1 ? arguments[0](3) : 3;
}
function four() {
  return arguments.length === 1 ? arguments[0](4) : 4;
}
function five() {
  return arguments.length === 1 ? arguments[0](5) : 5;
}
function six() {
  return arguments.length === 1 ? arguments[0](6) : 6;
}
function seven() {
  return arguments.length === 1 ? arguments[0](7) : 7;
}
function eight() {
  return arguments.length === 1 ? arguments[0](8) : 8;
}
function nine() {
  return arguments.length === 1 ? arguments[0](9) : 9;
}

function plus(elem) {
  var val = arguments[0];
  return function (left) {
    return left + val;
  };
}
function minus() {
  var val = arguments[0];
  return function (left) {
    return left - val;
  };
}

function times() {
  var val = arguments[0];
  return function (left) {
    return left * val;
  };
}
function dividedBy() {
  var val = arguments[0];
  return function (left) {
    return Math.trunc(left / val);
    // return (left / val).toFixed(2);
  };
}

console.log(seven(times(five()))); //, 35);
console.log(four(plus(nine()))); //, 13);
console.log(eight(minus(three()))); //, 5);
console.log(six(dividedBy(two()))); //, 3);
console.log(seven(dividedBy(two()))); //, 3.5);
console.log(one(dividedBy(nine()))); //, 0);

/*
This time we want to write calculations using functions and get the results. 
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical 
operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
FUNDAMENTAL SFUNCTIONS CONTROL FLOWBASIC LANGUAGE FEATURES
*/

/*
function makeNum(num, func) {
  if (func === undefined) {
		return num;
	} else {
		return func(num);
	}
}

function zero(func) {
	return makeNum(0,func);
}
function one(func) {
	return makeNum(1,func);
}
function two(func) {
	return makeNum(2,func);
}
function three(func) {
	return makeNum(3,func);
}
function four(func) {
	return makeNum(4,func);
}
function five(func) {
	return makeNum(5,func);
}
function six(func) {
	return makeNum(6,func);
}
function seven(func) {
	return makeNum(7,func);
}
function eight(func) {
	return makeNum(8,func);
}
function nine(func) {
	return makeNum(9,func);
}

function plus(right) {
  return function(left) { return left + right; };
}
function minus(right) {
  return function(left) {
		return left - right;
	};
}
function times(right) {
  return function(left) { return left * right; };
}
function dividedBy(right) {
  return function(left) { return left / right; };
}



function zero() { return arguments.length === 1 ? arguments[0](0) : 0; }
function one() { return arguments.length === 1 ? arguments[0](1) : 1; }
function two() { return arguments.length === 1 ? arguments[0](2) : 2; }
function three() { return arguments.length === 1 ? arguments[0](3) : 3; }
function four() { return arguments.length === 1 ? arguments[0](4) : 4; }
function five() { return arguments.length === 1 ? arguments[0](5) : 5; }
function six() { return arguments.length === 1 ? arguments[0](6) : 6; }
function seven() { return arguments.length === 1 ? arguments[0](7) : 7; }
function eight() { return arguments.length === 1 ? arguments[0](8) : 8; }
function nine() { return arguments.length === 1 ? arguments[0](9) : 9; }

function plus() {var val = arguments[0]; return function(left) { return left + val; }}
function minus() {var val = arguments[0]; return function(left) { return left - val; }}
function times() {var val = arguments[0]; return function(left) { return left * val; }}
function dividedBy() {var val = arguments[0]; return function(left) { return left / val; }}
*/
