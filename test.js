console.log('Hello world');

function foo() {
  console.log(this);
}
foo.call(null);

//=window

//-----//

// for (var i = 0; i < 10; i++) {
//   //...
// }
// console.log(i);

//10

//-----//

// console.log(
//   (function (a) {
//     arguments[0] = 10;
//     return a;
//   })(5),
// );

//10

//-----//

// console.log(message);
// var message = 'Hello';

//undefined

//-----//

// 'use strict';

// const details = {
//   message: 'Hello',
// };

// function gerMessage() {
//   return this.message;
// }

// console.log(gerMessage.call(details));

//Hello

//-----//

// const details = {
//   name: 'John',
// };
// function gerMessage(message) {
//   return `${message} ${this.name}`;
// }

// console.log(gerMessage.apply(details, ['Hello']));

// 'Hello John!'

//-----//

// 'use strict';

// function getThis() {
//   return this;
// }

// console.log(getThis());

//undefined

//-----//

// var a = 1,
//   b = function a(x) {
//     x && a(--x);
//   };
// console.log(a);

//1

//-----//

// function foo(a, b) {
//   return a * b;
// }

// const bar = foo.bind(null, 2);

// console.log(bar(2));

//4

//-----//

// printMessage();

// function printMessage() {
//   console.log('Hello');
// }

//'Hello!'

//-----//

// var name = 'John';

// function printName() {
//   console.log(name);
//   var name = 'Peter';
//   console.log(name);
// }
// printName();

//Peter

//-----//

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// 3 3 3

//-----//

// let a = 5;
// let b = 10;

//++ let f = function (a, b) { return a + b;};
//++ let f = new Function('a,b', 'return a+b');
//++ let f = new Function('a', 'b', 'return a+b');
//++ let f = (a, b) => a + b;
//-- let f = (a, b) => { a + b;};

// console.log(f(a, b));

//-----//

// function foo() {
//   return { bar: 1 };
// }
// console.log(typeof foo().bar);

// number

//-----//

//-- function foo() {
//   console.log(Function.getArguments(this));
// }

//+++ function foo() {
//   console.log(arguments);
// }

//--- function foo() {
//   console.log(foo.getArguments());
// }

// --- function foo() {
//   console.log(this.arguments);
// }

// foo(1, 2, 3.4, 6, [4, 6, 7], { a: 2 });

//-----//

// let f = function g() {
//   return 23;
// };

// console.log(typeof g());

//-----//

// function getThis() {
//   return this;
// }
// console.log(getThis());

// [object Window]

//-----//

// const foo = bar();

// const number = 2;

// function bar() {
//   return number;
// }

// console.log(foo);

// Error

//-----//

// let name = 'John';
// function printName() {
//   let name = 'Peter';
//   console.log(name);
// }

// printName();

//Peter

//-----//

// console.log(message);
// let message = 'Hello';

//Error

//-----//

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// 0 1 2

//-----//

// var name = 'John';

// var user = {
//   name: 'Peter',
//   printMessage() {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// var printMessage = user.printMessage;
// printMessage();
// console.log(printMessage());

// Hello, John!

//-----//
