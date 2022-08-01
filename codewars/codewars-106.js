function cache(func) {
  const cache = new Map();
  return (...args) => {
    const strX = JSON.stringify(args);
    if (!cache.has(strX)) {
      cache.set(strX, func(...args));
    }
    return cache.get(strX);
  };
}

var complexFunction = function (arg1, arg2) {
  arg1 + arg2;
};
var cachedFunction = cache(complexFunction);

console.log(cachedFunction('foo', 'bar')); // complex function should be executed
console.log(cachedFunction('foo', 'bar')); // complex function should not be invoked again, instead the cached result should be returned
console.log(cachedFunction('foo', 'baz')); // should be executed, because the method wasn't invoked before with these arguments

function cacheFn(fn) {
  var cache = {};

  return function (arg) {
    if (cache[arg]) {
      return cache[arg];
    } else {
      cache[arg] = fn(arg);
      return cache[arg];
    }
  };
}

/*
If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

Usage example:

var complexFunction = function(arg1, arg2) {  complex calculation in here  };

var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments

*/
