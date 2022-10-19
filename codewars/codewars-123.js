String.prototype.capitalize = function () {
  const findFirstLetter = this.replace(/^[a-z]/, item =>
    String.fromCodePoint(this.charCodeAt(0) - 32),
  );
  return findFirstLetter;
};

console.log('hello world'.capitalize()); // , 'Hello world');
console.log('an apple a day keeps the doctor away'.capitalize()); //,  'An apple a day keeps the doctor away',
console.log('today, I have a dream ... '.capitalize()); //  'Today, I have a dream ... ',
console.log('hello how are you?  i am john doe'.capitalize()); //  'Hello how are you?  I am John Doe',  'You were not asked to correct all of the capitalization errors in the string.',
console.log(
  '0123the first character of this sentence is not a letter'.capitalize(),
); //  '0123the first character of this sentence is not a letter',

/*
7 kyu  Capitalize first letter of a string

Capitalize First Letter of a String
Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:

Input	Output
string	String
hello World	Hello World
i love codewars	I love codewars
This sentence is already capitalized	This sentence is already capitalized
0123the first character of this sentence is not a letter	0123the first character of this sentence is not a letter
JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.

FUNDAMENTALS OBJECT-ORIENTED PROGRAMMING REGULAR EXPRESSIONS
*/
