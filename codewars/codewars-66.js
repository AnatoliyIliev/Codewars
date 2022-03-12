var validWord = function (dictionary, word) {
  let result = [];
  const arrWord = word.split('');

  for (let j = 1; j < word.length + 1; j += 1) {
    console.log(arrWord);
    // console.log(word.slice(0, j));
    console.log(arrWord.join('').slice(0, j));
    if (dictionary.includes(arrWord.join('').slice(0, j))) {
      console.log(arrWord.join('').slice(0, j));
      result.push(arrWord.splice(0, j));
      console.log(result);
    }
  }
  console.log(result.join());
  return result.map(a => a.join('')).join('') === word ? true : false;
};

// console.log(validWord(['code', 'wars'], 'codewars')); //, true]);
// console.log(validWord(['wars', 'code'], 'codewars')); //, true]);
console.log(validWord(['code', 'wars'], 'codecodewars')); //, true]);
// console.log(validWord(['code', 'wars'], 'codewar')); //, false]);
// console.log(validWord(['code', 'wars'], 'codewarscode')); //, true]);
// console.log(validWord(['code', 'star', 'wars'], 'starwars')); //, true]);
// console.log(validWord(['Star', 'Code', 'Wars'], 'StarCodeWars')); //, true]);
// console.log(validWord(['Star', 'Code', 'Wars'], 'WarsStarCode')); //, true]);
// console.log(validWord(['Star', 'Code', 'Wars'], 'CodeStarsWar')); //, false]);
// console.log(validWord([], 'codewars')); //, false]);
// console.log(validWord(['code', 'wars'], 'code')); //, true]);
// console.log(validWord(['a', 'b', 'c', 'd', 'e', 'f'], 'abcdef')); //, true]);
// console.log(validWord(['a', 'b', 'c', 'd', 'e', 'f'], 'abcdefg')); //, false]);
// console.log(validWord(['ab', 'a', 'bc'], 'abc')); //, true]);
// console.log(validWord(['ab', 'bc'], 'abc')); //, false]);
// console.log(
//   validWord(
//     [
//       'jwdz',
//       'f',
//       'bfcn',
//       'cg',
//       'sh',
//       'h',
//       'wyp',
//       'j',
//       'scw',
//       'py',
//       'syn',
//       'shy',
//       'pylw',
//       'shy',
//     ],
//     'jwdzfbfcncgshhwypjscw',
//   ),
// ); // true

/*
You are given a sequence of valid words and a string. 
Test if the string is made up by one or more words from the array.

Task
Test if the string can be entirely formed by 
consecutively concatenating words of the dictionary.

For example:

dictionary: ["code", "wars"]

s1:         "codewars" =>  true  -> match 'code', 'wars'
s2:         "codewar"  =>  false -> match 'code', unmatched 'war'
One word from the dictionary can be used several times.

var validWord = function (dictionary, word) {
  let result = [];
  const strWord = word;
  const arrWord = word.split('');

  for (let i = 0; i < dictionary.length; i += 1) {
    // let sec = 0;
    for (let j = 1; j < arrWord.length + 1; j += 1) {
      console.log(strWord.slice(0, j));
      if (dictionary.includes(strWord.slice(0, j))) {
        console.log(dictionary, '=', arrWord.slice(0, j));
        result.push(arrWord.splice(0, j));
        console.log(result);
        // sec += 1;
      } else {
        // sec = 0;
      }
    }
  }
  console.log(arrWord);
  return result;
};
*/
