const xMarksTheSpot = input => {
  const check = input.reduce((acc, elem) => {
    const findX = elem.filter(item => item === 'x');
    if (findX.length) {
      acc += 1;
    }
    return acc;
  }, 0);

  if (check === 0 || check > 1) {
    return [];
  } else {
    let line = 0;
    let column = 0;

    input.forEach((elem, index) => {
      const idxItem = elem.findIndex(item => item === 'x');

      if (idxItem !== -1) {
        line = index;
        column = idxItem;
      }
    });
    return [line, column];
  }
};

console.log(xMarksTheSpot([]), []);

console.log(
  xMarksTheSpot([
    ['o', 'o'],
    ['o', 'o'],
  ]),
); //  [],

console.log(
  xMarksTheSpot([
    ['x', 'o'],
    ['o', 'x'],
  ]),
); //      [],

console.log(
  xMarksTheSpot([
    ['x', 'o'],
    ['o', 'o'],
  ]),
); //      [0, 0],

let input = [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
];
console.log(xMarksTheSpot(input)); //, [4, 6]);

/*

7 kyu
'x' marks the spot.

Task:
Given a two dimensional array, return the co-ordinates of x.

If x is not inside the array, or if x appears multiple times, return [].

The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

Examples
Input: []
Return an empty array if input is an empty array => []

Input: [
  ['o', 'o'],
  ['o', 'o']
]
Return an empty array if no x found => []

Input: [
  ['x', 'o'],
  ['o', 'x']
]
Return an empty array if more than one x found => []

Input: [
  ['x', 'o'],
  ['o', 'o']
]
Return [0,0] when x at top left => [0, 0]

Input: [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
Return [4,6] for the example above => [4, 6]
FUNDAMENTALSARRAYSMATRIX
*/
