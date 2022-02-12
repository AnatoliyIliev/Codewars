function isPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    let res = 0;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) res += 1;
      else res += 0;
    }
    return res > 0 ? false : true;
  }
}

console.log(isPrime(1000000000000)); //  false, "0 is not prime");
// console.log(isPrime(1)); //  false, "1 is not prime");
// console.log(isPrime(2)); //  true, "2 is prime");
// console.log(isPrime(73)); // true, "73 is prime");
// console.log(isPrime(75)); // false, "75 is not prime");
// console.log(isPrime(-1)); // false, "-1 is not prime");

/*

Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

/*

function isPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    let res = 0;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) res += 1;
      else res += 0;
    }
    return res > 0 ? false : true;
  }
}

*/
