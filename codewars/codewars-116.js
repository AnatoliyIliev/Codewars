const createIterator = array => {
  let nextIndex = 0;

  return {
    next: () => ({ value: array[nextIndex++], done: nextIndex > array.length }),
    get index() {
      return Math.min(nextIndex, array.length);
    },
  };
};

const iterator = createIterator(['One', , 'Two']);

console.log(iterator.next()); // { value: 'One', done: false }
console.log(iterator.index); // 0
console.log(iterator.index); // 1

// A hole in the array - value is undefined
console.log(iterator.next()); // { value: undefined, done: false }
console.log(iterator.index); // 2

console.log(iterator.next()); // { value: 'Two', done: false }
console.log(iterator.index); // 3

// Iteration has finished - value is undefined, done becomes true
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.index); // 3

// Subsequent calls to next of a fully processed iterator don't change anything
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.index); // 3

// const array = ['One', 'Two'];
// const iterator = createIterator(array);

// console.log(iterator.index); //, 0, 'Index');

// console.log(iterator.next()); //, { value: array[0], done: false }, 'Сall next');
// console.log(iterator.index); //, 1, 'Index');

// console.log(iterator.next()); //, { value: array[1], done: false }, 'Сall next');
// console.log(iterator.index); //, 2, 'Index');

// console.log(iterator.next()); //, { value: undefined, done: true }, 'Сall over next');
// console.log(iterator.index); //, 2, 'Index');

// console.log(iterator.next()); //, { value: undefined, done: true }, 'Сall over next');
// console.log(iterator.index); //, 2, 'Index');

/*

Task
Implement an iterator which receives an array of values, and returns an object with:

a function next
a number index
A call to the next function should return an object with 2 attributes:

value (the next value in the input array; undefined if the value is not present or the array has been fully processed)
done (boolean which specifies whether the input array has been fully processed)
Accessing the index attribute should return the index of the value currently held by the iterator.

Example:
const iterator = createIterator(['One', , 'Two']);

iterator.index  // 0
iterator.next() // { value: 'One', done: false }
iterator.index  // 1
  
// A hole in the array - value is undefined
iterator.next() // { value: undefined, done: false }
iterator.index  // 2

iterator.next() // { value: 'Two', done: false }
iterator.index  // 3

// Iteration has finished - value is undefined, done becomes true
iterator.next() // { value: undefined, done: true }
iterator.index  // 3

// Subsequent calls to next of a fully processed iterator don't change anything
iterator.next() // { value: undefined, done: true }
iterator.index  // 3
FUNDAMENTALSARRAYS

*/
