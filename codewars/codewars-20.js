function fakeBin(x) {
  const str = x.split('');
  return str.map(num => (num < 5 ? 0 : 1)).join('');
}

console.log(fakeBin('45385593107843568')); // '01011110001100111'
console.log(fakeBin('509321967506747')); // '101000111101101'
console.log(fakeBin('366058562030849490134388085')); // '011011110000101010000011011'

/*
Given a string of digits, you should replace any digit below 5 with '0'
 and any digit 5 and above with '1'. Return the resulting string.
*/
