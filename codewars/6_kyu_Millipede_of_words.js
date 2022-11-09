function solution(words) {
  const result = [];

  for (let i = 0; i < words.length; i += 1) {
    const resultLength = result.length;
    console.log(resultLength);

    if (!resultLength) {
      result.push(words[i]);
    } else if (
      result[resultLength - 1][result[resultLength - 1].length - 1] ===
      words[i][0]
    ) {
      console.log(result[resultLength - 1].length - 1);

      result.push(words[i]);
    }
    // else {
    //   console.log(
    //     result[resultLength - 1][result[resultLength - 1].length - 1],
    //   );
    // }
    // else if (words[i - 1][lastIndexLetter] === words[i][0]) {
    //   result.push(words[i]);
    // }
  }
  return result;
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
