Array.prototype.square = function () {
  return this.map(item => Math.pow(item, 2));
};

Array.prototype.cube = function () {
  return this.map(item => Math.pow(item, 3));
};

Array.prototype.sum = function () {
  return !this[0] ? NaN : this.reduce((count, item) => (count += item));
};

Array.prototype.average = function () {
  return this.sum(this) / this.length;
};

Array.prototype.even = function () {
  return this.filter(item => item % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter(item => item % 2 !== 0);
};

const numbers = [1, 2, 3, 4, 5];
// const numbers = [
//   75, 49, 27, 94, 50, 6, 72, 56, 85, 73, 5, 63, 71, 11, 45, 43, 96, 83, 61, 66,
// ];
const nan = [];
console.log(numbers.square()); //, [1, 4, 9, 16, 25]);
console.log(numbers.cube()); //, [1, 8, 27, 64, 125]);
console.log(numbers.sum()); //, 15, 'Wrong sum');
console.log(numbers.average()); //, 3, 'Wrong average');
console.log(nan.sum()); //, Nan
console.log(nan.average()); //, Nan
console.log(numbers.even()); //, [2, 4], 'Wrong result for even()');
console.log(numbers.odd()); //, [1, 3, 5], 'Wrong result for odd()');

// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// Example
// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

/*
Этот ката предназначен для проверки вашей способности расширять функциональность встроенных классов. 
В этом случае мы хотим, чтобы вы расширили встроенный класс Array следующими методами: 
Square(), Cube(), Average(), Sum(), Even() и odd().

Объяснение:

Square() должна возвращать копию массива, содержащего все значения в квадрате.
cube() должен возвращать копию массива, содержащего все значения в кубе.
Average() должен возвращать среднее значение всех значений массива; для пустого массива должен возвращать NaN 
(примечание: пустой массив не тестируется в Ruby!)
sum() должна возвращать сумму всех значений массива
even() должен возвращать массив всех четных чисел
od() должен возвращать массив всех нечетных чисел.
Примечание: исходный массив менять нельзя ни в коем случае!

*/
