Array.prototype.reduce = function (process, initial) {
  let result = !initial ? this[0] : initial;

  let i = !initial ? 1 : 0;

  for (i; i < this.length; i += 1) {
    console.log(i, result);
    result = process(result, this[i]);
  }

  return result;
};

console.log(
  ['a', 'y', '!'].reduce(function (x, y) {
    return x + y;
  }, 'y'),
); //  'yay!',);

console.log(
  [1, 2, 3].reduce(function (x, y) {
    return x + y;
  }),
); //  'yay!',);

/*
In this kata, you must define the Array.reduce method.

I have disabled the pre-existing reduce methods.

Here's how it works:

[1,2,3].reduce( function(sum, next){return sum+next}, 0) 
// => 6

['a','b','a'].reduce( function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj}, {})
// => {'a':2, 'b':1}
Summary: The reduce method goes through each element of an array, 
applies the function to whatever the function returned last, 
and returns the last outcome. On the first iteration, 
it should pass the initial value to the function, 
as well as the first element of the array. 
If no initial value is passed, skip to the first element of the array.

Ruby methods should expect a lambda.

*/
