function isPowerOfTwo(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  else {
    // console.log(Math.pow(2, n));
    console.log((n * 0.5) % 1);
    // return Math.sqrt(n) % 1 === 0 ? true : false;
    // return Math.pow(2, n) % 1 === 0 ? true : false;
    return (n * 0.5) % 1 === 0 ? true : false;
  }
  //   else return Math.sqrt(n) % 1 === 0 ? true : false;
}

// console.log(isPowerOfTwo(1024)); // -> true
// console.log(isPowerOfTwo(4096)); // -> true
// console.log(isPowerOfTwo(333)); // -> false
console.log(isPowerOfTwo(2)); // true)
console.log(isPowerOfTwo(4096)); // true)
console.log(isPowerOfTwo(5)); // false)
// console.log(isPowerOfTwo(234)); // false)
// console.log(isPowerOfTwo(131072)); // true)
