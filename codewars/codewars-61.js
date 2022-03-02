function getParticipants(handshakes) {
  if (handshakes === 0) return 1;
  else {
    if (handshakes % 2 === 0) return handshakes / 2 + 1;
    else return Math.floor(handshakes / 2) + 2;
  }
}
console.log(getParticipants(0)); // 1
console.log(getParticipants(1)); // 2
console.log(getParticipants(3)); // 3
console.log(getParticipants(6)); // 4
console.log(getParticipants(7)); // 5
console.log(getParticipants(78)); // 13
console.log(getParticipants(76245)); // 391

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
