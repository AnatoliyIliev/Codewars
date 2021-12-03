function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const text = string.toLowerCase().split(' ').join('').split('');
  text.pop();

  console.log(text);
  const find = alphabet.some(alp => {
    return text.find(t => {
      if (alp === t) {
        return;
      }
    });
  });
  return find;
}

var string = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(string)); // true

// var string2 = 'This is not a pangram.';
// console.log(isPangram(string2)); // false

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
