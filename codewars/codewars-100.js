const compose =
  (...fns) =>
  x =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = a => a + 1;
const multTwo = b => b * 2;

console.log(compose(multTwo, addOne)(5)); //, 12, 'compose two functions');
console.log(compose(addOne, multTwo, addOne, addOne)(2)); //, 9, 'compose four functions');
console.log(compose(addOne)(3)); //, 4, 'compose one function');
console.log(compose()(10)); //, 10, 'compose no functions');

/*
Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be combined to form a new function which first adds one and then multiplies by two, as follows:

const addOne = (a) => a + 1
const multTwo = (b) => b * 2
const addOneMultTwo = (c) => multTwo(addOne(c))

addOneMultTwo(5) // returns 12
Combining functions like this is called function composition. Functional programming libraries in Javascript such as Ramda include a generic compose function which does the heavy lifting of combining functions for you. So you could implement addOneMultTwo as follows:

const addOneMultTwo = compose(multTwo, addOne)

addOneMultTwo(5) // returns 12
A simple implementation of compose, could work as follows:

const compose = (f, g) => (a) => f(g(a))
The arguments f and g are unary functions (i.e. functions which take one argument). The problem with this compose function is that it only composes two functions. Your task is to write a compose function which can compose any number of functions together.
*/
