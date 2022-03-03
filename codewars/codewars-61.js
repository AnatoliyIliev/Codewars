function getParticipants(handshakes) {
  let result = 1;
  for (let i = 0; i < handshakes; ) {
    i += result;
    result += 1;
  }
  return result;
}

console.log(getParticipants(0)); // 1
console.log(getParticipants(1)); // 2
console.log(getParticipants(3)); // 3
console.log(getParticipants(6)); // 4
console.log(getParticipants(7)); // 5
console.log(getParticipants(78)); //  13
console.log(getParticipants(42778)); //  293

/*
1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11, 12, 13,
0, 1, 3, 6, 7,                            78,
*/

/*
Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. 
Johnny knows that no two farmers handshake more than once. 
He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people 
that participated this year just by counting all the handshakes.

Help Johnny by writing a function, that takes the amount 
of handshakes and returns the minimal amount of people needed 
to perform these handshakes (a pair of farmers handshake only once).
*/
