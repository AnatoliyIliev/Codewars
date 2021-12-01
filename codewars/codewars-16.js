function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const text = string.toLowerCase().split('');
  let acc = 0;
  //   const text = string.toLowerCase().split(' ').join('');
  const find = text.forEach(t => {
    for (let i = 0; i < alphabet.length; i += 1) {
      if (t === alphabet[i]) {
        acc += 1;
      }
    }
  });
  console.log(acc);
  if (acc === 26) return true;
  else return false;
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
