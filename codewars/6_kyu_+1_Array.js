function upArray(arr) {
  const findNil = arr.length === 0 || arr.find(item => item > 9 || item < 0);

  const reverseArr = arr.reverse();
  reverseArr[0] += 1;

  const result = reverseArr
    .reduce((accum, item, idx, arr) => {
      if (item === 10) {
        accum.push(0);
        if (!arr[idx + 1]) {
          accum.push(1);
        } else {
          arr[idx + 1] += 1;
        }
      } else {
        accum.push(item);
      }
      return accum;
    }, [])
    .reverse();

  return findNil ? null : result;
}

console.log(upArray([])); // Null
console.log(upArray([1, -9])); // Null
console.log(upArray([1, 2, 33])); // Null
console.log(upArray([4, 3, 2, 5])); //, [4, 3, 2, 6]);
console.log(upArray([2, 3, 9, 9])); //, [2, 4, 0, 0]);
console.log(upArray([9, 9])); //, [1, 0, 0]);
console.log(upArray([0, 7])); //, [0, 8]);
console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1],

console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
); // Null
console.log(upArray([1, -9])); // Null
console.log(upArray([1, 10])); // Null

/*
6 kyu +1 Array

Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer

FUNDAMENTALS ARRAYS ALGORITHMS
*/
