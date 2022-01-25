function vowelOne(s) {
  const vowels = 'aeiou';
  return s
    .toLowerCase()
    .split('')
    .map(vow => {
      if (vowels.includes(vow)) {
        return 1;
      } else return 0;
    })
    .join('');
}

console.log(vowelOne('vowelOne')); // "01010101" );
console.log(vowelOne('123, arou')); // "000001011" );

/*

vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"

*/
