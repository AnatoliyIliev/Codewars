function solution(words) {
  const result = [];

  let inTwoLetters = words.map(item => item[0] + item.slice(-1));

  for (let i = 0; i < words.length; i += 1) {
    inSort();
  }

  function inSort() {
    if (inTwoLetters.length) {
      inTwoLetters = inTwoLetters.concat(result);
      result.splice(0, result.length);
      for (let i = 0; i < words.length; i += 1) {
        inTwoLetters.forEach((item, idx) => {
          if (!result.length) {
            result.push(...inTwoLetters.splice(0, 1));
          } else if (result[0][0] === item[1]) {
            result.unshift(...inTwoLetters.splice(idx, 1));
          } else if (result[result.length - 1][1] === item[0]) {
            result.push(...inTwoLetters.splice(idx, 1));
          }
        });
      }
    }
  }

  return result.length === words.length;
}

console.log(
  solution(
    ['trade', 'extract', 'transport', 'cycle', 'triangle', 'temperature'],
    false,
  ),
); //, false);
console.log(
  solution(['evaluate', 'evaluate', 'stereotype', 'tablet', 'effort'], true),
); //  true,

console.log(
  solution(
    ['excavate', 'trade', 'excavate', 'elephant', 'stereotype', 'expansion'],
    true,
  ),
); //  true,
console.log(solution(['dog', 'no', 'dragon', 'good'], true)); //  true,
console.log(
  solution(['strike', 'eye', 'exotic', 'east', 'cycle', 'excavate'], true),
); //  true,
console.log(
  solution(['strike', 'exotic', 'elephant', 'temperature', 'transport'], true),
); //  true,
console.log(
  solution(
    ['entertainment', 'cycle', 'endure', 'traffic', 'endorse', 'expansion'],
    true,
  ),
); //  true,
console.log(solution(['elephant', 'temperature', 'traffic'], true)); //  true,

console.log(
  solution(
    ['excavate', 'endure', 'desire', 'screen', 'theater', 'excess', 'night'],
    true,
  ),
); // true

console.log(
  solution(
    ['trade', 'pole', 'view', 'grave', 'ladder', 'mushroom', 'president'],
    false,
  ),
); //  false,

console.log(solution(['screen', 'desire', 'theater', 'excess', 'night'], true)); // true,
console.log(solution(['engine', 'endure', 'elite', 'excess'], true)); //, true);
console.log(solution(['east', 'e', 'e', 't', 't', 'e', 'time'], true)); //,      true,
console.log(solution(['no', 'dog', 'on', 'good'], false)); //, false);

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
// function solution(words, bool) {
//   const result = [];
//   // const rest = [];
//   const inTwoLetters = words.map(item => item[0] + item.slice(-1)).sort();
//   console.log('inTwoLetters', inTwoLetters);
//   for (let i = 0; i < words.length; i += 1) {
//     inTwoLetters.forEach((item, idx) => {
//       if (!result.length) {
//         result.push(...inTwoLetters.splice(idx, 1));
//       } else if (result[result.length - 1][1] === item[0]) {
//         result.push(...inTwoLetters.splice(idx, 1));
//       } else if (result[0][0] === item[1]) {
//         result.unshift(...inTwoLetters.splice(idx, 1));
//       }
//     });
//   }

//   console.log('inTwoLetters', inTwoLetters);
//   console.log('result', result);
//   // console.log('rest', rest);

//   console.log(JSON.stringify(bool));
//   return result.length === words.length;
// }

*/

/*

  function solution(words) {
  const result = [];
  const inTwoLetters = words.map(item => item[0] + item.slice(-1));

  // console.log('inTwoLetters', inTwoLetters);

  result.push(...inTwoLetters.splice(0, 1));

  for (let i = 0; i < words.length; i += 1) {
    for (let j = 0; j < inTwoLetters.length; j += 1) {
      if (result[0][0] === inTwoLetters[j][1]) {
        result.unshift(...inTwoLetters.splice(j, 1));
        break;
      } else if (result[0][1] === inTwoLetters[j][0]) {
        result.push(...inTwoLetters.splice(j, 1));
        break;
      }
      for (let h = 0; h < result.length - 1; h += 1) {
        if (
          inTwoLetters.length !== 0 &&
          result[result.length - 1][1] === inTwoLetters[j][0]
        ) {
          result.push(...inTwoLetters.splice(j, 1));
          break;
        }
        for (let k = 1; k < result.length; k += 1) {
          if (
            inTwoLetters.length !== 0 &&
            result[h][1] === inTwoLetters[j][0] &&
            result[k][0] === inTwoLetters[j][1]
          ) {
            result.splice(k, 0, ...inTwoLetters.splice(j, 1));
          }
        }
      }
    }
  }

  // console.log('inTwoLetters', inTwoLetters);
  // console.log('result', result);

  return inTwoLetters.length === 0;
}


*/

/*
function solution(words, bool) {
  const result = [];

  const inTwoLetters = words
    .map(item => item[0] + item.slice(-1))
    .sort((a, b) => a[0] - b[1]);
  console.log('inTwoLetters', inTwoLetters);

  result.push(...inTwoLetters.splice(0, 1));

  for (let i = 0; i < words.length; i += 1) {
    for (let j = 0; j < inTwoLetters.length; j += 1) {
      if (result[0][0] === inTwoLetters[j][1]) {
        result.unshift(...inTwoLetters.splice(j, 1));
        break;
      } else if (result[result.length - 1][1] === inTwoLetters[j][0]) {
        result.push(...inTwoLetters.splice(j, 1));
        break;
      }
      for (let h = 0; h < result.length; h += 1) {
        if (
          result.length !== 0 &&
          result[h][1] === inTwoLetters[j][0] &&
          result[h + 1][0] === inTwoLetters[j][1]
        ) {
          result.splice(h + 1, 0, ...inTwoLetters.splice(j, 1));
        }
      }
    }
  }

  console.log('inTwoLetters', inTwoLetters);
  console.log('result', result);
  console.log(bool);
  return inTwoLetters.length === 0;
}


*/
