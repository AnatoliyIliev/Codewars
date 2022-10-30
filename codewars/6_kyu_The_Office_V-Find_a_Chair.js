function meeting(x, need) {
  if (need === 0) {
    return 'Game On';
  }

  const result = [];

  x.forEach(elem => {
    const chairsToRoom = elem[0].length;
    const chairsNeed = elem[1];
    const difference =
      chairsNeed - chairsToRoom < 0 ? 0 : chairsNeed - chairsToRoom;

    if (need > 0 && need >= difference) {
      if (chairsToRoom > chairsNeed) {
        result.push(0);
      } else {
        result.push(difference);
        need -= difference;
      }
    } else if (need > 0 && need < difference) {
      result.push(need);
      need = 0;
    }
  });
  return need > 0 ? 'Not enough!' : result;
}

console.log(
  meeting(
    [
      ['XXXX', 6],
      ['XXXX', 8],
      ['XXX', 1],
      ['XXXXXX', 2],
      ['XXXX', 5],
      ['X', 8],
      ['XX', 8],
    ],
    8,
  ),
); //  [ 2, 4, 0, 0, 1, 1 ],

console.log(
  meeting(
    [
      ['XXXXXXX', 1],
      ['XXXXXX', 1],
      ['XXXXX', 6],
      ['XXXXXXX', 6],
      ['XXXXXX', 8],
      ['XXXX', 8],
    ],
    8,
  ),
); //  'Not enough!',

console.log(
  meeting(
    [
      ['XXX', 3],
      ['XXXXX', 6],
      ['XXXXXX', 9],
      ['XXX', 2],
    ],
    4,
  ),
); //       [0, 1, 3],

console.log(
  meeting(
    [
      ['XXX', 3],
      ['XXXXX', 6],
      ['XXXXXX', 9],
    ],
    4,
  ),
); //       [0, 1, 3],

console.log(
  meeting(
    [
      ['XXX', 1],
      ['XXXXXX', 6],
      ['X', 2],
      ['XXXXXX', 8],
      ['X', 3],
      ['XXX', 1],
    ],
    5,
  ),
); //      [0, 0, 1, 2, 2],

console.log(
  meeting(
    [
      ['XX', 2],
      ['XXXX', 6],
      ['XXXXX', 4],
    ],
    0,
  ),
); //      'Game On',

/*

6 kyu
The Office V - Find a Chair

So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.

Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

Find the spare chairs from the array of meeting rooms. Each meeting room tuple will have the number of occupants as a string. Each occupant is represented by 'X'. The room tuple will also have an integer telling you how many chairs there are in the room.

You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

example:

[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

result -> [0, 1, 3] no chairs free in room 0, take 1 from room 1, take 3 from room 2. no need to consider room 3 as you have your 4 chairs already.

If you need no chairs, return "Game On". If there aren't enough spare chairs available, return "Not enough!".

More in this series:

The Office I - Outed
The Office II - Boredeom Score
The Office III - Broken Photocopier
The Office IV - Find a Meeting Room

FUNDAMENTALSARRAYSSTRINGS

*/
