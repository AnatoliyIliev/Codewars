// Let's make a Cat constructor!
var Cat = (function () {
  let cats = [];
  const constructor = function (name, weight) {
    if (!name || !weight) {
      throw new Error('Error');
    }

    Object.defineProperty(this, 'weight', {
      get() {
        return weight;
      },
      set(newWeight) {
        return (weight = newWeight);
      },
    });

    this.name = name;
    cats.push(this);
  };

  constructor.averageWeight = () => cats.reduce((count, item) => count + item.weight, 0) / cats.length;

  return constructor;
})();

const fluffy = new Cat('fluffy', 15);
const garfield = new Cat('garfield', 25);

console.log(fluffy.weight); //, 15);
console.log(fluffy instanceof Cat); //, true);
console.log(fluffy.averageWeight); //, undefined);
console.log(typeof Cat.averageWeight); //, 'function');
console.log(Cat.averageWeight()); //, 20);

/*
In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby, this shared state would be tracked with a class variable. In javascript we achieve this through closures and immediately-invoked function expressions.

In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

garfield = new Cat('garfield', 25);
Cat.averageWeight(); // 25

felix = new Cat('felix', 15);
Cat.averageWeight();   // now 20
But that's not all. Cats can change weight. Use Object.defineProperty to write custom setters and getters for the weight property so that the following works properly even as instances change their weight value:

felix.weight = 25;
felix.weight // 25
Cat.averageWeight(); // now 25
Object.defineProperty must be used to pass all tests. Storing a reference to all instances and recalculating the average weight each time is easier, but would prevent garbage collection from working properly if used in a production environment.

Finally, since average weight is an aggregate statistic it's important that we validate constructor arguments so that no cats are created without a specified weight; so, make sure to throw an error if both arguments are not recieved by the constructor.

Summary of requirements:
Cat constructor, requiring arguments for name and weight
Throw an error if name or weight not specified when invoking the constructor.
Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
Must use Object.defineProperty

*/
