function nicknameGenerator(name) {
  const letter = 'aeiou';
  let result = name[2];

  return result;
  //code goes here
}

console.log(nicknameGenerator('Jimmy')); // 'Jim');
console.log(nicknameGenerator('Samantha')); // 'Sam');
console.log(nicknameGenerator('Sam')); // 'Error: Name too short');
console.log(nicknameGenerator('Kayne')); // 'Kay', "'y' is not a vowel");
console.log(nicknameGenerator('Melissa')); // 'Mel');
console.log(nicknameGenerator('James')); // 'Jam');

/*
Nickname Generator

Write a function, nicknameGenerator that takes a string name 
as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".

Notes:

Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified
FUNDAMENTALSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES
*/
