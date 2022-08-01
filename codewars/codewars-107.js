function add(n) {
  const fn = function (x) {
    return add(n + x);
  };
  fn.valueOf = function () {
    return n;
  };
  return fn;
}

//"A single call should return the number passed in"
// console.log(add(1)); //, 1);

console.log(add(1)(2)); //, 3);
// console.log(add(1)(2)(3)); //, 6);
// console.log(add(1)(2)(3)(4)); //, 10);
// console.log(add(1)(2)(3)(4)(5)); //, 15);

// 'should be able to be mixed with numbers'
// console.log(add(1)(2) + 3); //, 6);

//'Must be able to store values'
const a = add(1)(2);
const b = add(3)(4);
console.log(a); //, 3);
console.log(b); //, 7);

//  'Must be able to store curried functions'
// const a1 = add(1)(2);
// console.log(a1, 3);
// console.log(a(3), 6);
// console.log(a1, 3);

//  'Must be callable with a curried function'
// const a2 = add(1)(2);
// const b2 = add(3)(4);
// console.log(a(b), 10);
// console.log(b(a), 10);
// console.log(a2, 3);
// console.log(b2, 7);

/*

We want to create a function that will add numbers together when called in succession.

add(1)(2); // == 3
We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
and so on.

A single call should be equal to the number passed in.

add(1); // == 1
We should be able to store the returned values and reuse them.

var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10
We can assume any number being passed in will be valid whole number.
*/
