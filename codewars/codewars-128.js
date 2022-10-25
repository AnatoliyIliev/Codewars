class SortedArray {
  constructor(dir, init) {
    this.dir = dir === 'asc' || dir === 'desc' ? dir : undefined;
    // this.dir = dir;
    this.init = init;
    this.array = [];
  }

  insert(...values) {
    this.array = this.array.concat(values);

    const result = this.array.sort((a, b) => {
      if (this.dir === 'asc') {
        return a - b;
      } else if (this.dir === 'desc') {
        return b - a;
      }
    });
    console.log(result);
    return result;
  }

  pop() {
    return this.array.pop();
  }

  shift() {
    return this.array.shift();
  }
}

const ascendingArray = new SortedArray('asc');
console.log(ascendingArray); //, []);
ascendingArray.insert(3);
console.log(ascendingArray); //, [3]);
ascendingArray.insert(1, 2);
console.log(ascendingArray); //, [1, 2, 3]);
ascendingArray.insert(6, 0);
console.log(ascendingArray); //, [0, 1, 2, 3, 6]);
ascendingArray.pop();
console.log(ascendingArray); //, [0, 1, 2, 3]);
ascendingArray.shift();
console.log(ascendingArray); //, [1, 2, 3]);
ascendingArray.insert(-1, 10);
console.log(ascendingArray); //, [-1, 1, 2, 3, 10]);

const descendingArray = new SortedArray('desc');
console.log(descendingArray); //, []);
descendingArray.insert(3);
console.log(descendingArray); //, [3]);
descendingArray.insert(1, 2);
console.log(descendingArray); //, [3, 2, 1]);
descendingArray.insert(6, 0);
console.log(descendingArray); //, [6, 3, 2, 1, 0]);
descendingArray.pop();
console.log(descendingArray); //, [6, 3, 2, 1]);
descendingArray.shift();
console.log(descendingArray); //, [3, 2, 1]);
descendingArray.insert(-1, 10);
console.log(descendingArray); //, [10, 3, 2, 1, -1]);

/*
6 kyu
Auto Sorted Array - Easy

Create a derived collection object that automatically sorts itself when its member methods are invoked. Inspecting (console.log) an instance of the collection should only return the values and not the methods.

The collection should be instantiated with 2 parameters (dir, init)

dir: asc || desc -- Determines the direction of the sort
(Must throw an error if dir is neither of these values)

init: number -- Identical to number in Array(number)

Methods:

insert([element1[, ...[, elementN]]]): Adds value(s) to the collection, sorts collection and returns the collection length.

pop(): Removes a value from the end of the collection and returns the removed value.

shift(): Removes a value from the start of the collection and returns the removed value.

The collection should get re-sorted on every insert.

FUNDAMENTALSSORTINGLANGUAGE FEATURESOBJECT-ORIENTED PROGRAMMING


*/
