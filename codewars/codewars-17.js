function century(year) {
  const yearString = year.toString();
  if (year < 101) {
    return 1;
  } else if (year > 100 && year < 1000) {
    return yearString.slice(1) > 0
      ? Number(yearString.slice(0, 1)) + 1
      : Number(yearString.slice(0, 1));
  } else if (year > 1000) {
    // console.log(yearString.slice(0, -2));
    return yearString.slice(2) > 0
      ? Number(yearString.slice(0, -2)) + 1
      : Number(yearString.slice(0, -2));
  }
}

console.log(century(1705)); //, 18
console.log(century(1900)); //, 19
console.log(century(1601)); //, 17
console.log(century(2000)); //, 20
console.log(century(89)); //, 1
console.log(century(101)); //,
console.log(century(500)); //,
console.log(century(1001)); //,
console.log(century(337797)); //, 3378
console.log(century(86900)); //, 869
/*

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
FUNDAMENTALSNUMBERSMATHEMATICSALGORITHMSBASIC LANGUAGE FEATURESDATES/TIME

*/
