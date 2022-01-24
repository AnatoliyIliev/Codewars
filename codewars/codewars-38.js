function sortMyString(S) {
  let str = '';
  let str1 = '';
  for (let i = 0; i < S.length; i += 1) {
    if (i % 2 === 0) {
      str += S[i];
    } else {
      str1 += S[i];
    }
  }
  return str + ' ' + str1;
}

console.log(sortMyString('CodeWars')); // "CdWr oeas");
console.log(sortMyString("YCOLUE'VREER")); // "YOU'RE CLEVER");

/*

Given a string S. You have to return another string such 
that even-indexed and odd-indexed characters of S are grouped 
and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'

*/
