function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const text = string.toLowerCase().split(' ').join('').split('');
  console.log(text);
  let acc = [];
  alphabet.some(alp => {
    text.find(t => {
      if (alp === t) {
        acc.push(t);
        return acc.length;
      }
    });
  });
  if (acc.length === 26) {
    return true;
  } else return false;
}

var string = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(string)); // true

var string2 = 'This is not a pangram.';
console.log(isPangram(string2)); // false

var string3 = 'Cwm fjord bank glyphs vext quiz';
console.log(isPangram(string3)); // false

var string4 = 'ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ';
console.log(isPangram(string4)); // false

var string5 = 'AbCdEfGhIjKlM zYxWvUtSrQpOn';
console.log(isPangram(string5)); // false

/*
A pangram is a sentence that contains every single letter 
of the alphabet at least once. For example, the sentence 
"The quick brown fox jumps over the lazy dog" is a pangram,
 because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not.
Ignore numbers and punctuation.

FUNDAMENTALS    STRINGS     DATA STRUCTURES
*/
