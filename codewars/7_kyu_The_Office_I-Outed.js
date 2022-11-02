function outed(meet, boss) {
  let rating = 0;

  for (let key in meet) {
    if (key === boss) {
      rating += meet[key] * 2;
    } else if (meet[key] > 0) {
      rating += meet[key];
    }
  }

  return rating / 11 <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

console.log(
  outed(
    {
      tim: 8,
      jim: 0,
      randy: 0,
      sandy: 9,
      andy: 1,
      katie: 7,
      laura: 6,
      saajid: 3,
      alex: 1,
      john: 6,
      mr: 7,
    },
    'laura',
  ),
); //,  'Get Out Now!',

console.log(
  outed(
    {
      tim: 0,
      jim: 2,
      randy: 0,
      sandy: 7,
      andy: 0,
      katie: 5,
      laura: 1,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0,
    },
    'laura',
  ),
); //,  'Get Out Now!',

console.log(
  outed(
    {
      tim: 1,
      jim: 3,
      randy: 9,
      sandy: 6,
      andy: 7,
      katie: 6,
      laura: 9,
      saajid: 9,
      alex: 9,
      john: 9,
      mr: 8,
    },
    'katie',
  ),
); //  'Nice Work Champ!',

console.log(
  outed(
    {
      tim: 2,
      jim: 4,
      randy: 0,
      sandy: 5,
      andy: 8,
      katie: 6,
      laura: 2,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 8,
    },
    'john',
  ),
); // 'Get Out Now!',

/*

7 kyu  The Office I - Outed


1004491% of 1,1033,118 of 5,191PG14 Issues Reported
 JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

The Office II - Boredom Score
The Office III - Broken Photocopier
The Office IV - Find a Meeting Room
The Office V - Find a Chair

FUNDAMENTALSARRAYS


*/
