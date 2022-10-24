Number.prototype.toStringS = function () {
  return `${this}`;
};
Array.prototype.toStringS = function () {
  return `[${this}]`;
};

Boolean.prototype.toStringS = function () {
  return `${this}`;
};

// String.prototype.toStringS = function () {
//   return new String(this);
// };

console.log((123).toStringS()); //, '123');
console.log(Math.PI.toStringS()); //, '3.141592653589793');
console.log(Math.E.toStringS()); //, '2.718281828459045');
console.log(true.toStringS()); //, 'true');
console.log(false.toStringS()); //, 'false');
console.log([1, 2, 3, 4, 5].toStringS().replace(/\s+/g, '')); //,  '[1,2,3,4,5]',

/*
7 kyu
Strings, strings, strings (Easy)

Note to Kata translators: Please carefully consider the suitability of your chosen language with regards to implementing the idea proposed by this Kata before authoring and submitting a translation. "Inappropriate" language translations (such as Python which has already been proven to be a poor candidate for this Kata) will be rejected by the author of this Kata even if it is well-written (i.e. contains suitable Kata Description edits, plenty of fixed and random tests, etc.).

Strings, strings, strings (Easy)
Background
Oh no, there were some problems with your computer and now you cannot convert any data type to strings!

Task
The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the following data types.

I. Booleans
For booleans:

true should be converted to "true"
false should be converted to "false"
II. Numbers
For numbers, conversion should be as follows:

// e.g.
(3).toString() === "3"
(3.14).toString() === "3.14"
(-78).toString() === "-78"
Math.PI.toString() === "3.141592653589793"
III. Arrays
For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings. However, on top of fixing it, we would also like to improve it as well. We would like to keep the square brackets ([]) around the "stringified" array as it would be seen in Javascript code. For example:

// e.g.
[].toString() === "[]"
[1].toString() === "[1]"
[2,4,8,17].toString() === "[2, 4, 8, 17]"
[Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"
As you may have noticed in the examples above, when the array has more than one element, some of the strings have spaces as well as commas separating each item but some strings do not. For the purposes of this Kata whether there are whitespaces or not does not matter for stringified arrays - before conducting the tests your input is stripped of all whitespace.

Final Note - IMPORTANT
Your recovered toString() methods should only return the stringified version of the input - it should NOT alter the original value. Test cases have been created to confirm this.

Kata in this Series
Strings, strings, strings (Easy) - this Kata
Strings, strings, strings (Hard)
FUNDAMENTALSOBJECT-ORIENTED PROGRAMMING

*/
