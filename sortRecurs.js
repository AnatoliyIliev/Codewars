const sortArr = arr => {
  console.log(arr);
  if (arr.length < 2) {
    return arr;
  } else {
    let rightArr = [];
    let leftArr = [];
    let currentItem = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] <= currentItem) leftArr.push(arr[i]);
    }

    for (let j = 1; j < arr.length; j += 1) {
      if (arr[j] > currentItem) rightArr.push(arr[j]);
    }

    return sortArr(leftArr) + [currentItem] + sortArr(rightArr);
  }
};

// console.log(sortArr([5]));
console.log(sortArr([5, 9, 11, 2, 7, 3, 6, 1, 4, 10, 8]));
