const curryPartial = (fn, ...args) => (args.length >= fn.length ? fn(...args) : (...params) => curryPartial(fn, ...args, ...params));

//  'Function with three random parameters'
function add(a, b, c) {
  return a + b + c;
}

var a = 1;
var b = 2;
var c = 3;
var sum = a + b + c;

console.log(add(a, b, c)); //, sum);
console.log(curryPartial(add)(a)(b)(c)); //, sum);
console.log(curryPartial(add, a)(b)(c)); //, sum);
console.log(curryPartial(add, a)(b, c)); //, sum);
console.log(curryPartial(add, a, b, c)); //, sum);
console.log(curryPartial(add, a, b, c, 20)); //, sum);
console.log(curryPartial(add)(a, b, c)); //, sum);
console.log(curryPartial(add)()(a, b, c)); //, sum);
console.log(curryPartial(add)()(a)()()(b, c)); //, sum);
console.log(curryPartial(add)()(a)()()(b, c, 5, 6, 7)); //, sum);

console.log(curryPartial(curryPartial(curryPartial(add, a), b), c)); //, sum);
console.log(curryPartial(curryPartial(add, a, b), c)); //, sum);
console.log(curryPartial(curryPartial(add, a), b, c)); //, sum);

console.log(curryPartial(curryPartial(add, a), b)(c)); //, sum);
console.log(curryPartial(curryPartial(add, a)(b), c)); //, sum);

console.log(curryPartial(curryPartial(curryPartial(add, a)), b, c)); //, sum);

//  'Function with two random parameters'
// function add(a, b) {
//   return a + b;
// }

// var a = 1;
// var b = 2;
// var sum = a + b;

// console.log(add(a, b), sum);
// console.log(curryPartial(add)(a)(b)); //, sum);
// console.log(curryPartial(add, a, b)); //, sum);
// console.log(curryPartial(add, a, b, 20)); //, sum);
// console.log(curryPartial(add)(a, b)); //, sum);
// console.log(curryPartial(add)()(a, b)); //, sum);
// console.log(curryPartial(add)()(a)()()(b)); //, sum);
// console.log(curryPartial(add)()(a)()()(b, 5, 6, 7)); //, sum);

// console.log(curryPartial(curryPartial(add, a), b)); //, sum);

// // 'Function with one random parameter'
// function double(a) {
//   return a * 2;
// }

// var a = 5;
// var result = a * 2;

// console.log(double(a), result);
// console.log(curryPartial(double)(a)); //, result);
// console.log(curryPartial(double, a)); //, result);
// console.log(curryPartial(double)()(a)); //, result);

// //  'Function with no parameters'
// var a = 5;

// function double() {
//   return a * 2;
// }

// var result = a * 2;

// console.log(double()); //, result);
// console.log(curryPartial(double)); //, result);

// //  'Function with four random parameters'
// function add(a, b, c, d) {
//   return 4 * a + 3 * b + 2 * c + d;
// }

// var a = 4;
// var b = 3;
// var c = 2;
// var d = 1;
// var sum = 4 * a + 3 * b + 2 * c + d;

// console.log(add(a, b, c, d)); //, sum);
// console.log(curryPartial(add)(a)(b)(c)(d)); //, sum);
// console.log(curryPartial(add)(a, b)(c)(d)); //, sum);
// console.log(curryPartial(add, a, b)(c)(d)); //, sum);
// console.log(curryPartial(add, a, b)(c, d)); //, sum);
// console.log(curryPartial(curryPartial(add, a, b), c, d)); //, sum);
// console.log(curryPartial(curryPartial(add, a, b)(c), d)); //, sum);
// console.log(curryPartial(curryPartial(add, a)(b, c), d)); //, sum);
// console.log(curryPartial(curryPartial(curryPartial(add, a), b), c, d)); //, sum);
// console.log(curryPartial(curryPartial(curryPartial(add, a), b), c)(d)); //, sum);
// console.log(curryPartial(curryPartial(curryPartial(curryPartial(add, a), b), c), d)); //, sum);

// //  "State isn't preserved"
// function add(a, b, c) {
//   return a + b + c;
// }

// var add1 = curryPartial(add, 1);
// console.log(add1(2, 3)); //, 6);
// console.log(add1(4, 5)); //, 10);

// var add2 = curryPartial(add)(2);
// console.log(add2(3, 4)); //, 9);
// console.log(add2(5)(6)); //, 13);

// var add_ = curryPartial(add);
// var it0 = [add_];
// var it1 = [].concat(...[0, 1].map(v => it0.map(f => f(v))));
// var it2 = [].concat(...[0, 2].map(v => it1.map(f => f(v))));
// var it3 = [].concat(...[0, 4].map(v => it2.map(f => f(v))));

// console.log(it3, [0, 1, 2, 3, 4, 5, 6, 7]); //, 'tree of calls');

/*
Currying and partial application are two ways of transforming a function into another function with a generally smaller arity. While they are often confused with each other, they work differently. The goal is to learn to differentiate them.

Currying
Is the technique of transforming a function that takes multiple arguments in such a way that it can be called as a chain of functions each with a single argument.

Currying takes a function:

f: X × Y → R
and turns it into a function:

f': X → (Y → R)
Instead of calling f with two arguments, we invoke f' with the first argument. The result is a function that we then call with the second argument to produce the result. Thus, if the uncurried f is invoked as:

f(3, 5)
then the curried f' is invoked as:

f'(3)(5)

Example
Given this function:

function add(x, y, z) {
  return x + y + z;
}
We can call in a normal way:

add(1, 2, 3); //6
But we can create a curried version of add(a, b, c)function:

function curriedAdd(a) {
  return function(b) {
    return function (c) {
      return add(a, b, c);
    };
  };
}

curriedAdd(1)(2)(3); //6
Partial application
Is the process of fixing a number of arguments to a function, producing another function of smaller arity.

Partial application takes a function:

f: X × Y → R
and a fixed value x for the first argument to produce a new function

f': Y → R
f' does the same as f, but only has to fill in the second parameter which is why its arity is one less than the arity of f. One says that the first argument is bound to x.

Example
function partialAdd(a) {
  return function(b, c) {
    return add(a, b, c);
  };
}

partialAdd(1)(2, 3); //6
Your work is to implement a generic curryPartial() function allows either currying or partial application.

For example:

var curriedAdd = curryPartial(add);
curriedAdd(1)(2)(3); //6

var partialAdd = curryPartial(add, 1);
partialAdd(2, 3); //6
We want the function be very flexible.

All these examples should produce the same result:

curryPartial(add)(1)(2)(3); //6
curryPartial(add, 1)(2)(3); //6
curryPartial(add, 1)(2, 3); //6
curryPartial(add, 1, 2)(3); //6
curryPartial(add, 1, 2, 3); //6
curryPartial(add)(1, 2, 3); //6
curryPartial(add)(1, 2)(3); //6
curryPartial(add)()(1, 2, 3); //6
curryPartial(add)()(1)()()(2)(3); //6

curryPartial(add)()(1)()()(2)(3, 4, 5, 6); //6
curryPartial(add, 1)(2, 3, 4, 5); //6
And also all of these:

curryPartial(curryPartial(curryPartial(add, 1), 2), 3); //6
curryPartial(curryPartial(add, 1, 2), 3); //6
curryPartial(curryPartial(add, 1), 2, 3); //6
curryPartial(curryPartial(add, 1), 2)(3); //6
curryPartial(curryPartial(add, 1)(2), 3); //6
curryPartial(curryPartial(curryPartial(add, 1)), 2, 3); //6
FUNCTIONAL PROGRAMMING

*/
