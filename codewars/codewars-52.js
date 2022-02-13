function bingo(ticket, win) {
  let fil = ticket.filter(arr => {
    let lef = arr[0].split('').filter(a => a.charCodeAt() === arr[1]);
    return lef.length;
  });
  return fil.length >= win ? 'Winner!' : 'Loser!';
}

console.log(
  bingo(
    [
      ['NWZRZE', 80],
      ['IMOLZND', 66],
      ['AWH', 69],
      ['HWNJYD', 74],
      ['LXR', 81],
      ['ULTSSALP', 79],
      ['DCS', 76],
      ['QPHAENX', 69],
      ['PLK', 82],
    ],
    1,
  ),
); //, 'Winner!');

console.log(
  bingo(
    [
      ['KDKDNGF', 71],
      ['MJF', 66],
      ['URZVGQKV', 78],
      ['BU', 66],
    ],
    2,
  ),
); //, 'Winner!');

console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    2,
  ),
); //, 'Loser!');
console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    1,
  ),
); //, 'Winner!');
console.log(
  bingo(
    [
      ['HGTYRE', 74],
      ['BE', 66],
      ['JKTY', 74],
    ],
    3,
  ),
); //, 'Loser!');

/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.

*/
