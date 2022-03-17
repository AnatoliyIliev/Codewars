function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays == null || !arrayOfArrays.length) return 0;
  else {
    let val = 0;

    const arrLength = arrayOfArrays
      .map(arr => {
        if (arr == null || !arr.length) return 0;
        else return arr.length;
      })
      .sort((a, b) => a - b);

    for (let i = 0; i < arrLength.length; i += 1) {
      if (arrLength[i] == 0) return 0;
      else if (arrLength[i + 1] - arrLength[i] == 2) val = arrLength[i] + 1;
    }
    return val;
  }
}

console.log(
  getLengthOfMissingArray([
    [],
    [2, 1],
    [2, 3, 1],
    [4, 1, 3, 0],
    [2, 2, 3, 2, 1],
  ]),
); // 0);
console.log(getLengthOfMissingArray([])); // 0);
console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
); // 3);
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
); //  2);
console.log(getLengthOfMissingArray([[null], [null, null, null]])); // 2);
console.log(
  getLengthOfMissingArray([
    [1, 0, 0, 4, 0, 1, 1],
    [0, 1, 3],
    [1, 3, 4, 3],
    [1, 3, 0, 0, 3, 4],
  ]),
); // 5);

console.log(getLengthOfMissingArray([[], [4, 3, 0, 3], [0], [1, 2]]));

/*

You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.




function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays.length) return 0;
  else {
    let val = 0;
    for (let i = 0; i < arrayOfArrays.length; i += 1) {
      if (arrayOfArrays[i] == null || !arrayOfArrays[i].length) return 0;
    }

    arrayOfArrays
      .map(arr => {
        if (!arrayOfArrays.length) return 0;
        else return arr.length;
      })
      .sort((a, b) => a - b)
      .forEach((a, idx, arr) => {
        if (arr[idx + 1] - a == 2) val = a + 1;
      });

    return val;
  }
}
*/
