const sortArr = arr => {
  let result = arr;

  for (let i = 0; i < result.length; i += 1) {
    for (let j = 0; j < result.length; j += 1) {
      if (result[i] < result[j]) {
        [result[i], result[j]] = [result[j], result[i]];
      }
    }
  }

  return result;
};

console.log(sortArr([5, 9, 11, 2, 7, 3, 6, 1, 4, 10, 8]));
