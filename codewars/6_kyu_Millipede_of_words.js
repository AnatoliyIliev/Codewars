function solution(words) {
  const result = [];
  const rest = [];
  const inTwoLetters = words.map(item => item[0] + item.slice(-1));

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

  console.log(result.concat(rest));
  // console.log('restr', rest);
  // return result;
  // return solution(result.concat(rest));
}

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

// console.log(
//   solution([
//     'trade',
//     'pole',
//     'view',
//     'grave',
//     'ladder',
//     'mushroom',
//     'president',
//   ]),
// ); //  false,

// console.log(solution(['screen', 'desire', 'theater', 'excess', 'night'])); // true,
// console.log(solution(['engine', 'endure', 'elite', 'excess'])); //, true);
// console.log(solution(['east', 'e', 'e', 't', 't', 'e', 'time'])); //,      true,
// console.log(solution(['no', 'dog', 'on', 'good'])); //, false);

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
  for (let j = 0; j < words.length; j += 1) {
    const wordsArr = words.slice();

    for (let i = 0; i < wordsArr.length; i += 1) {
      const resultLength = result.length;
      // console.log(resultLength);
      if (!resultLength) {
        // result.push(wordsArr[i]);
        result.push(wordsArr.splice(i, 1, 0));
        console.log(1, wordsArr.length, wordsArr);
      } else if (
        result[resultLength - 1][result[resultLength - 1].length - 1] ===
        wordsArr[i][0]
      ) {
        // console.log(result[resultLength - 1].length - 1);
        // result.push(wordsArr[i]);
        result.push(wordsArr.splice(i, 1, 0));
        console.log(2, wordsArr.length, wordsArr);
      } else if (
        result[resultLength - 1][result[resultLength - 1].length - 1] !==
          wordsArr[i][0] &&
        result[0][0] === wordsArr[i][wordsArr[i].length - 1]
      ) {
        // console.log(words[i]);
        // result.unshift(wordsArr[i]);
        result.unshift(wordsArr.splice(i, 1, 0));
        console.log(3, wordsArr.length, wordsArr);
      }
    }
  }
  return result;
}
*/
