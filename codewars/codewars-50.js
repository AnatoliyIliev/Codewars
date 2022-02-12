var whatTimeIsIt = function (angle) {
  const ang = angle / 30;
  const hour = Math.trunc(ang);
  const minute = Math.trunc(((ang % 1) * 60).toFixed(3));
  const time =
    ((9 < hour ? '' : '0') + hour === '00'
      ? '12'
      : (9 < hour ? '' : '0') + hour) +
    (9 < minute ? ':' : ':0') +
    minute;

  return time;
};

// console.log(whatTimeIsIt(0)); // '12:00');
console.log(whatTimeIsIt(284.59382816114623)); // '09:30');
console.log(whatTimeIsIt(8.686932164725878)); // '12:17');
console.log(whatTimeIsIt(32.54758261483944)); // '01:05');
console.log(whatTimeIsIt(146.307689241471)); // '04:52');
console.log(whatTimeIsIt(40)); // '01:20');
console.log(whatTimeIsIt(7.4988053180678715)); // '12:14');
// console.log(whatTimeIsIt(90)); // '03:00');
// console.log(whatTimeIsIt(180)); // '06:00');
// console.log(whatTimeIsIt(270)); // '09:00');
// console.log(whatTimeIsIt(360)); // '12:00');

/*
Story
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

And because the local council has lost most of our tax money 
to a Nigerian email scam there are no funds to fix the clock properly.

Instead, they are asking for volunteer programmers to write some code that tell 
the time by only looking at the remaining hour-hand!

What a bunch of cheapskates!
Can you do it?

Kata
Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. 
Round down to the nearest minute.

Examples
12:00 = 0 degrees
03:00 = 90 degrees
06:00 = 180 degrees
09:00 = 270 degrees
12:00 = 360 degrees
Notes
0 <= angle <= 360

Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.

3 o'clock is 03:00, not 15:00
7 minutes past midnight is 12:07
7 minutes past noon is also 12:07





var whatTimeIsIt = function (angle) {
  const hour = Math.floor(angle / 30);
  const minute = Math.round(((angle / 30) % 1) * 60);
  const time =
    ((9 < hour ? '' : '0') + hour === '00'
      ? '12'
      : (9 < hour ? '' : '0') + hour) +
    (9 < minute ? ':' : ':0') +
    minute;

  return time;
};
*/
