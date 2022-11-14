function solution(words) {
  const result = [];
  const inTwoLetters = words.map(item => item[0] + item.slice(-1)).sort();
  console.log('inTwoLetters', inTwoLetters);
  for (let i = 0; i < words.length; i += 1) {
    inTwoLetters.forEach((item, idx) => {
      if (!result.length) {
        result.push(...inTwoLetters.splice(idx, 1));
      } else if (result[0][0] === item[1]) {
        result.unshift(...inTwoLetters.splice(idx, 1));
      } else if (result[result.length - 1][1] === item[0]) {
        result.push(...inTwoLetters.splice(idx, 1));
      }
    });
    console.log('result', result);
  }

  return result.length === words.length;
}

console.log(solution(['strike', 'eye', 'exotic', 'east', 'cycle', 'excavate'])); //  true,
console.log(
  solution(['strike', 'exotic', 'elephant', 'temperature', 'transport']),
); //  true,
console.log(
  solution([
    'entertainment',
    'cycle',
    'endure',
    'traffic',
    'endorse',
    'expansion',
  ]),
); //  true,
console.log(solution(['elephant', 'temperature', 'traffic'])); //  true,

console.log(
  solution([
    'excavate',
    'endure',
    'desire',
    'screen',
    'theater',
    'excess',
    'night',
  ]),
); // true

console.log(
  solution([
    'trade',
    'pole',
    'view',
    'grave',
    'ladder',
    'mushroom',
    'president',
  ]),
); //  false,

console.log(solution(['screen', 'desire', 'theater', 'excess', 'night'])); // true,
console.log(solution(['engine', 'endure', 'elite', 'excess'])); //, true);
console.log(solution(['east', 'e', 'e', 't', 't', 'e', 'time'])); //,      true,
console.log(solution(['no', 'dog', 'on', 'good'])); //, false);

/*
6 kyu
Millipede of words

The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same. 
Return true if all words of the set can be combined into one word. 
Each word can and must be used only once. Otherwise return false.

Input
Array of 3 to 7 words of random length. No capital letters.

Example true
Set: excavate, endure, desire, screen, theater, excess, night.
Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.

Example false
Set: trade, pole, view, grave, ladder, mushroom, president.
Millipede: presidenT Trade.

ALGORITHMS ARRAYS STRINGS
*/

/*

function solution(words) {
  const result = [];
  // const rest = [];
  const inTwoLetters = words.map(item => item[0] + item.slice(-1)).sort();
  // console.log('inTwoLetters', inTwoLetters);
  for (let i = 0; i < words.length; i += 1) {
    inTwoLetters.forEach((item, idx) => {
      if (!result.length) {
        result.push(...inTwoLetters.splice(idx, 1));
        // result.push(item);
      } else if (result[result.length - 1][1] === item[0]) {
        // console.log(result[result.length - 1], '===', item);
        result.push(...inTwoLetters.splice(idx, 1));
        // result.push(item);
      } else if (result[0][0] === item[1]) {
        result.unshift(...inTwoLetters.splice(idx, 1));
        // result.unshift(item);
      }
    });
  }

  // console.log('inTwoLetters', inTwoLetters);
  // console.log('result', result);
  // console.log('rest', rest);

  // console.log(inTwoLetters, 'result', result);
  return result.length === words.length;
}




 inTwoLetters.forEach(item => {
    if (!result.length) {
      result.push(item);
    } else if (result[result.length - 1][1] === item[0]) {
      result.push(item);
    } else if (result[0][0] === item[1]) {
      result.unshift(item);
    } else {
      rest.push(item);
    }
  });

  inTwoLetters.forEach((item, idx) => {
    if (!result.length) {
      result.push(...inTwoLetters.splice(0, 1));
    } else if (result[result.length - 1][1] === item[0]) {
      result.push(...inTwoLetters.splice(idx, 1));
    } else if (result[0][0] === item[1]) {
      result.unshift(...inTwoLetters.splice(idx, 1));
    } else {
      result.forEach((element, index) => {});
    }
  });


for (let i = 0; i < inTwoLetters.length; i += 1) {
    if (!result.length) {
      result.push(inTwoLetters[i]);
    } else if (result[result.length - 1][1] === inTwoLetters[i][0]) {
      result.push(inTwoLetters[i]);
    } else if (result[0][0] === inTwoLetters[i][1]) {
      result.unshift(inTwoLetters[i]);
    } else {
      rest.push(inTwoLetters[i]);
    }
  }
*/
