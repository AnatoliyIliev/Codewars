function isPowerOfTwo(n) {
  for (let i = 0; 2 ** i <= n; i += 1) {
    if (2 ** i === n) return true;
  }
  return false;
}

console.log(isPowerOfTwo(1)); // true)
console.log(isPowerOfTwo(2)); // true)
console.log(isPowerOfTwo(5)); // false)
console.log(isPowerOfTwo(1024)); // -> true
console.log(isPowerOfTwo(4096)); // -> true
console.log(isPowerOfTwo(333)); // -> false
console.log(isPowerOfTwo(4096)); // true)
console.log(isPowerOfTwo(234)); // false)
console.log(isPowerOfTwo(131072)); // true)
