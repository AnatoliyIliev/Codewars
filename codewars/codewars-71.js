function calculate() {
  const first = [...arguments].reduce((a, b) => a + b);
  return (...a) => {
    const second = [...a].reduce((a, b) => a + b);
    return first + second;
  };
}

let calc1 = calculate(1)(1);
console.log(calc1); // 2

// console.log(calculate(1, 1)(1)); // 3
// console.log(calculate(1, 1)(1, -1)); // 2

let calc4 = calculate(2, 4)(3, 7, 1);
console.log(calc4); // 17

/*

You are writing a function that takes two sets of arguments of arbitrary length.
The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17

*/
