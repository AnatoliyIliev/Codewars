function meeting(x) {}

assert.strictEqual(meeting(['X', 'O', 'X']), 1);
assert.strictEqual(meeting(['O', 'X', 'X', 'X', 'X']), 0);
assert.strictEqual(meeting(['X', 'X', 'X', 'X', 'X']), 'None available!');

/*
7 kyu
The Office IV - Find a Meeting Room

Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"

More in this series:

The Office I - Outed
The Office II - Boredeom Score
The Office III - Broken Photocopier
The Office V - Find a Chair

FUNDAMENTALSARRAYS

*/
