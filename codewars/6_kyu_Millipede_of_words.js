function solution(words) {
  const result = [];
  const rest = [];
  const inTwoLetters = words.map(item => item[0] + item.slice(-1));
  console.log('inTwoLetters', inTwoLetters);

  for (let i = 0; i < words.length; i += 1) {
    if (!result.length) {
      result.push(...inTwoLetters.splice(0, 1));
    } else {
      //filetr ?
    }

    /*
    else if (result[result.length - 1][1] === inTwoLetters[i][0]) {
      result.push(inTwoLetters[i]);
    } else if (result[0][0] === inTwoLetters[i][1]) {
      result.unshift(inTwoLetters[i]);
    } else {
      rest.push(inTwoLetters[i]);
    }
    */
  }
  console.log('inTwoLetters', inTwoLetters);
  console.log('result', result);
  console.log('restr', rest);
  // console.log(result.concat(rest));
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
