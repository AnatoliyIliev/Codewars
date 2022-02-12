function getCard() {
  const bingoB = bingoRandom(1, 15, 'B', 5);
  const bingoI = bingoRandom(16, 30, 'I', 5);
  const bingoN = bingoRandom(31, 45, 'N', 4);
  const bingoG = bingoRandom(46, 60, 'G', 5);
  const bingoO = bingoRandom(61, 75, 'O', 5);

  return { ...[...bingoB, ...bingoI, ...bingoN, ...bingoG, ...bingoO] };
}

function bingoRandom(min, max, card, num) {
  let arr = [];

  for (let i = 0; i < max; i += 1) {
    let randomRes = Math.round(Math.random() * max + 1);
    arr.push(randomRes);
  }

  return filterNumber(min, arr, card, num);
}

function filterNumber(min, arr, card, num) {
  let filterNum = arr
    .filter((a, idx) => arr.indexOf(a) === idx)
    .filter(num => num > min)
    .slice(0, num);
  return connectNumAndLet(filterNum, card);
}

function connectNumAndLet(filterNum, card) {
  return filterNum.map(num => card + num);
}

getCard();

/*
After yet another dispute on their game the Bingo Association decides to change course and automate the game.

Can you help the association by writing a method to create a random Bingo card?

Task:

Finish method:
getCard()
A Bingo card contains 24 unique and random numbers according to this scheme:
5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75

The card must be returned as an array of Bingo style numbers:
{ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... }
The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.



*/
