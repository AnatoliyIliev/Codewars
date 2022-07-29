var multiFilter = function (...fns) {
  return function (x) {
    let bool = true;
    fns.forEach(fn => {
      if (!fn(x)) bool = false;
    });
    return bool;
  };
};

function isEven(el) {
  return el % 2 === 0;
}

function isGTten(el) {
  return el > 10;
}

console.log([1, 2, 3, 4, 10, 11, 12, 20, 21, 22].filter(multiFilter(isEven, isGTten))); //[12,20,22]

/*
Write a function called multiFilter which receives a variable number of filter functions. The function should return a function that receives one element (a compound filter function).

That is, if we have two functions:

function isEven(el){
  return el % 2 === 0;
}
and

function isGTten(el){
  return el > 10;
}
then

[1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten));
should return [12,20,22]

Additional Rules
multiFilter can't be implemented using loops like:

for
while
do while
WARNING: Using ES6 features may break these rules because Babel can introduce some for loops when transpiling your code. Please, open an issue if it happens.


*/
