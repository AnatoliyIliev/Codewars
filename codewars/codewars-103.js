function once(fn) {
  let result = true;

  return function () {
    if (result) {
      result = false;
      console.log(this, arguments);
      return fn.apply(this, arguments);
    }
    return;
  };
}

const logOnce = once(console.log);
logOnce('foo'); // -> "foo"
logOnce('bar'); // -> no effect

// const logOnce = once(console.log);
// console.log(once('foo')); // -> "foo"
// console.log(once('bar')); // -> no effect

/*
You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).

For example:

logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
*/
