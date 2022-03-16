function nthFibo(n) {
  let count = [0, 0, 1, 1];
  if (n < 3) return count[n];
  for (let i = 4; i !== n + 1; i += 1) {
    count.push(count[i - 1] + count[i - 2]);
  }
  return count[n];
}

console.log(nthFibo(1)); // 0, '1-st Fibo'
console.log(nthFibo(2)); // 1, '2-nd Fibo'
console.log(nthFibo(3)); // 1, '3-rd Fibo'
console.log(nthFibo(4)); // 2, '4-th Fibo'
console.log(nthFibo(5)); // 3
console.log(nthFibo(6)); // 5

/*
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/
