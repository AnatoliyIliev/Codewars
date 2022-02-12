var countBits = function (n) {
  return Number(
    n
      .toString(2)
      .split('')
      .reduce(
        (previousValue, currentValue) =>
          Number(previousValue) + Number(currentValue),
      ),
  );
};

console.log(countBits(0)); // 0);
console.log(countBits(4)); // 1);
console.log(countBits(7)); // 3);
console.log(countBits(9)); // 2);
console.log(countBits(10)); // 2);
