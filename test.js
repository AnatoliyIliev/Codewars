// function partialUsingArguments(fn, ...args1) {
//   console.log(...args1, args1);
//   return function newFunc(...args2) {
//     console.log(...args2, args2);
//     return fn(...args1.concat(...args2));
//   };
// }

// const fn = function (x1, x2, x3, x4) {
//   return x1 + x2 + x3 + x4;
// };

// console.log(partialUsingArguments(fn, 'a')('b', 'c', 'd')); // => 'abcd'
// console.log(partialUsingArguments(fn, 'a', 'b')('c', 'd')); // => 'abcd'
// console.log(partialUsingArguments(fn, 'a', 'b', 'c')('d')); // => 'abcd'
// console.log(partialUsingArguments(fn, 'a', 'b', 'c', 'd')()); //) => 'abcd'

// function timeSpanToString(startDate, endDate) {
//   const d2 = new Date(startDate).getDate();
//   // let start = startDate.getDate();
//   return d2;
// }

// console.log(timeSpanToString(Date(2000, 1, 1, 10, 0, 0), Date(2000, 1, 1, 11, 0, 0)));
// console.log(timeSpanToString(Date(2000, 1, 1, 10, 0, 0), Date(2000, 1, 1, 10, 30, 0)));
// console.log(timeSpanToString(Date(2000, 1, 1, 10, 0, 0), Date(2000, 1, 1, 10, 0, 20)));
// console.log(timeSpanToString(Date(2000, 1, 1, 10, 0, 0), Date(2000, 1, 1, 10, 0, 0, 250)));
// console.log(timeSpanToString(Date(2000, 1, 1, 10, 0, 0), Date(2000, 1, 1, 15, 20, 10, 453)));

/*
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */

// function isLeapYear(date) {
//   const year = date.getFullYear();
//   if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) return false;
//   return true;
// }

// console.log(isLeapYear(Date(1900, 1, 1)));
// console.log(isLeapYear(Date(2000, 1, 1)));
// console.log(isLeapYear(Date(2001, 1, 1)));
// console.log(isLeapYear(Date(2012, 1, 1)));
// console.log(isLeapYear(Date(2015, 1, 1)));

/*
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */

// function swapHeadAndTail(arr) {
//   if (arr.length === 1) return arr;
//   const left = arr.filter((item, idx, array) => array.length / 2 > idx && item);
//   const right = arr.filter((item, idx, array) => array.length / 2 <= idx && item);
//   left.length !== right.length && right.push(left.pop());
//   return right.concat(left);
// }

// console.log(swapHeadAndTail([1, 2]));
// console.log(swapHeadAndTail([1, 2, 3, 4, 5]));
// console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(swapHeadAndTail([1, 2, 3, 4])); // [3, 4, 1, 2],

// [1, 2, 3, 4];
/*
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */

// function getElementByIndexes(arr, indexes) {
//   return indexes.reduce((acc, item) => acc[item], arr);
// }

// console.log(
//   getElementByIndexes(
//     [
//       [1, 2],
//       [3, 4],
//       [5, 6],
//     ],
//     [0, 0],
//   ),
// );
// console.log(getElementByIndexes(['one', 'two', 'three'], [2]));
// console.log(getElementByIndexes([[[1, 2, 3]]], [0, 0, 1]));

/*
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */

// function selectMany(arr, childrenSelector) {
//   return arr.reduce((acc, item) => acc.concat(childrenSelector(item)), []);
// }
// console.log(
//   selectMany(
//     [
//       [1, 2],
//       [3, 4],
//       [5, 6],
//     ],
//     x => x,
//   ),
// );
// console.log(selectMany(['one', 'two', 'three'], x => x.split('')));

/*
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], x=>x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */

// function group(array, keySelector, valueSelector) {
//   const newMap = array.reduce((acc, item) => acc.set(keySelector(item), []), new Map());
//   array.map(it => newMap.get(keySelector(it)).push(valueSelector(it)));
//   return newMap;
// }

// console.log(
//   group(
//     [
//       { country: 'Belarus', city: 'Brest' },
//       { country: 'Russia', city: 'Omsk' },
//       { country: 'Russia', city: 'Samara' },
//       { country: 'Belarus', city: 'Grodno' },
//       { country: 'Belarus', city: 'Minsk' },
//       { country: 'Poland', city: 'Lodz' },
//     ],
//     item => item.country,
//     item => item.city,
//   ),
// );

/*            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */

// function getIntervalArray(start, end) {
//   return new Array(end - start + 1).fill('').map((item, idx) => start + idx);
// }

// console.log(getIntervalArray(1, 5));
// console.log(getIntervalArray(-2, 2));
// console.log(getIntervalArray(0, 100));
// console.log(getIntervalArray(3, 3));

/*
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */

// function getIdentityMatrix(n) {
//   return new Array(n).fill(new Array(n).fill(0)).map((item, idx) => item.map((_, i) => (i === idx ? 1 : 0)));
// }

// console.log(getIdentityMatrix(1));
// console.log(getIdentityMatrix(2));
// console.log(getIdentityMatrix(5));

/*
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */

// function sortCitiesArray(arr) {
//   return arr.sort((a, b) => {
//     if (a.country < b.country) return -1;
//     if (a.country > b.country) return 1;
//     if (a.city < b.city) return -1;
//     if (a.city > b.city) return 1;

//     return 0;
//   });
// }

// console.log(
//   sortCitiesArray([
//     { country: 'Russia', city: 'Moscow' },
//     { country: 'Belarus', city: 'Minsk' },
//     { country: 'Poland', city: 'Warsaw' },
//     { country: 'Russia', city: 'Saint Petersburg' },
//     { country: 'Poland', city: 'Krakow' },
//     { country: 'Belarus', city: 'Brest' },
//   ]),
// );
/*
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */

// function getFalsyValuesCount(arr) {
//   return arr.filter(item => !item || false).length;
// }
// console.log(getFalsyValuesCount([]));
// console.log(getFalsyValuesCount([1, '', 3]));
// console.log(getFalsyValuesCount([-1, 'false', null, 0]));
// console.log(getFalsyValuesCount([null, undefined, NaN, false, 0, '']));

/*
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */

// function sortDigitNamesByNumericOrder(arr) {
//   const numbers = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
//   return arr.sort((a, b) => numbers[a] - numbers[b]);
// }

// console.log(sortDigitNamesByNumericOrder([]));
// console.log(sortDigitNamesByNumericOrder(['nine', 'one']));
// console.log(sortDigitNamesByNumericOrder(['one', 'two', 'three']));
// console.log(sortDigitNamesByNumericOrder(['nine', 'eight', 'nine', 'eight']));
// console.log(sortDigitNamesByNumericOrder(['one', 'one', 'one', 'zero']));

/*
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */

// function getPositivesCount(arr) {
//   // return arr.filter(item => Number.isInteger(item));
//   return arr.filter(item => item > 0).filter(it => Number.isInteger(it)).length;
// }

// console.log(getPositivesCount([]));
// console.log(getPositivesCount([-1, 0, 1]));
// console.log(getPositivesCount([1, 2, 3]));
// console.log(getPositivesCount([null, 1, 'elephant']));
// console.log(getPositivesCount([1, '2']));

/*   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 * */

// function get3TopItems(arr) {
//   // return arr.reverse().filter((item, idx) => {
//   //   if (idx < 3) return item;
//   // });

//   return arr.reverse().filter((item, idx) => idx < 3 && item);
// }

// console.log(get3TopItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // => [ 10, 9, 8 ]
// console.log(get3TopItems([])); // => [ 10, 9, 8 ]
// console.log(get3TopItems([1, 2])); // => [ 10, 9, 8 ]

// function propagateItemsByPositionIndex(arr) {
//   return arr.reduce((acc, item, idx) => acc.concat(new Array(idx + 1).fill(item)), []);
// }

// console.log(propagateItemsByPositionIndex([1, 2, 3, 4, 5])); //  => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
// console.log(propagateItemsByPositionIndex(['a', 'b', 'c', null])); //  =>  [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]

// function getMovingSum(arr) {
//   let sum = 0;
//   return arr.map(item => (sum += item));
// }

// console.log(getMovingSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]

// function generateOdds(len) {
//   return new Array(len).fill(0).map((_, i) => 2 * i + 1);
// }

// console.log(generateOdds(1)); // [ 1 ]
// console.log(generateOdds(2)); // [ 1, 3 ]
// console.log(generateOdds(5)); // [ 1, 3, 5, 7, 9 ]
// console.log(generateOdds(16)); //  [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],

// function removeFirstOccurrences(str, value) {
//   return str.replace(value, '');
// }

// console.log(removeFirstOccurrences('To be or not to be', 'not')); // 'To be or  to be'
// console.log(removeFirstOccurrences('I like legends', 'end')); // 'I like legs',
// console.log(removeFirstOccurrences('ABABAB', 'BA')); // 'ABAB'

// function unbracketTag(str) {
//   // return str.match(/[^<]\w+[^>]/);
//   return str.match(/[\w+]+/);
// }

// console.log(unbracketTag('<div>')); //=> 'div'
// console.log(unbracketTag('<span>')); //=> 'span'
// console.log(unbracketTag('<a>')); // => 'a'

/*            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
// function getRectangleString(width, height) {
//   let result = '';
//   for (let i = 0; i < height; i += 1) {
//     let str = '';
//     for (let j = 0; j < width; j += 1) {
//       if (i === 0) {
//         if (j === 0) {
//           str += '┌';
//         } else if (j === width - 1) {
//           str += '┐';
//         } else {
//           str += '─';
//         }
//       } else if (i === height - 1) {
//         if (j === 0) {
//           str += '└';
//         } else if (j === width - 1) {
//           str += '┘';
//         } else {
//           str += '─';
//         }
//       } else if (i > 0 && i < height - 1) {
//         if (j === 0 || j === width - 1) {
//           str += '│';
//         } else {
//           str += ' ';
//         }
//       }
//     }
//     result += str + '\n';
//   }
//   return result;
// }

// console.log(getRectangleString(6, 4));
// console.log(getRectangleString(2, 2));
// console.log(getRectangleString(12, 3));

// function encodeToRot13(str) {
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//   const rot = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
//   let result = '';

//   for (let i = 0; i < str.length; i += 1) {
//     const idx = alphabet.indexOf(str[i]);
//     if (idx !== -1) {
//       result += rot[idx];
//     } else if (str[i] === ' ') {
//       result += ' ';
//     } else if (str[i] === '!') {
//       result += '!';
//     } else if (str[i] === '?') {
//       result += '?';
//     }
//   }
//   return result;
// }

// console.log(encodeToRot13('hello')); // => 'uryyb'
// console.log(encodeToRot13('Why did the chicken cross the road?')); // => 'Jul qvq gur puvpxra pebff gur ebnq?'
// console.log(encodeToRot13('Gb trg gb gur bgure fvqr!')); //  => 'To get to the other side!'
// console.log(encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')); //=> 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'

// function isString(value) {
//   return typeof value === 'string' || value instanceof String;
// }

// console.log(isString()); // => false
// console.log(isString(null)); // => false
// console.log(isString([])); // => false
// console.log(isString({})); // => false
// console.log(isString('test')); // => true
// console.log(isString(new String('test'))); // => true

// function getCardId(value) {
//   const card = [
//     'A♣',
//     '2♣',
//     '3♣',
//     '4♣',
//     '5♣',
//     '6♣',
//     '7♣',
//     '8♣',
//     '9♣',
//     '10♣',
//     'J♣',
//     'Q♣',
//     'K♣',
//     'A♦',
//     '2♦',
//     '3♦',
//     '4♦',
//     '5♦',
//     '6♦',
//     '7♦',
//     '8♦',
//     '9♦',
//     '10♦',
//     'J♦',
//     'Q♦',
//     'K♦',
//     'A♥',
//     '2♥',
//     '3♥',
//     '4♥',
//     '5♥',
//     '6♥',
//     '7♥',
//     '8♥',
//     '9♥',
//     '10♥',
//     'J♥',
//     'Q♥',
//     'K♥',
//     'A♠',
//     '2♠',
//     '3♠',
//     '4♠',
//     '5♠',
//     '6♠',
//     '7♠',
//     '8♠',
//     '9♠',
//     '10♠',
//     'J♠',
//     'Q♠',
//     'K♠',
//   ];
//   return card.indexOf(value);
// }

// console.log(getCardId('A♣')); // => 0
// console.log(getCardId('2♣')); //  => 1
// console.log(getCardId('3♣')); // => 2
// console.log(getCardId('Q♠')); // => 50
// console.log(getCardId('K♠')); // => 51

// Math.acos;

// function getAngleBetweenVectors(x1, y1, x2, y2) {
//   const res1 = Math.sqrt(x1 ** 2 + y1 ** 2);
//   const res2 = Math.sqrt(x2 ** 2 + y2 ** 2);

//   return Math.acos(((x1 * x2 + y1 * y2) / res1) * res2);
//   // return Math.acos(((x1 * x2 + y1 * y2) / Math.sqrt(x1 ** 2 + y1 ** 2)) * Math.sqrt(x2 ** 2 + y2 ** 2));
// }

// console.log(getAngleBetweenVectors(1, 0, 0, 1)); //, Math.PI / 2);
// console.log(getAngleBetweenVectors(0, 1, 0, -1)); // Math.PI);
// console.log(getAngleBetweenVectors(0, -1, 1, 0)); //, Math.PI / 2);
// console.log(getAngleBetweenVectors(0, 1, 0, 1)); //, 0);

// function roundToPowerOfTen(num, pow) {
//   return Math.round(num / Math.pow(10, pow)) * Math.pow(10, pow);
// }

//1234, 2 округляет( 1200 + Math.round( 0,34) * 10 ^ 2).
//1678, 3 округляет(1000 + Math.round(0, 678) * 10 ^ 3)

// console.log(roundToPowerOfTen(1234, 0)); //, 1234);
// console.log(roundToPowerOfTen(1234, 1)); //, 1230);
// console.log(roundToPowerOfTen(1234, 2)); //, 1200);
// console.log(roundToPowerOfTen(1234, 3)); //, 1000);

// console.log(roundToPowerOfTen(9678, 0)); //, 9678);
// console.log(roundToPowerOfTen(9678, 1)); //, 9680);
// console.log(roundToPowerOfTen(9678, 2)); //, 9700);
// console.log(roundToPowerOfTen(9678, 3)); //, 10000);

// function foo() {
//   console.log(this);
// }
// foo.call(null);

// const a = 4534;
// const b = 23423;
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
