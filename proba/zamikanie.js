// function foo() {
//   var a = 2;

//   function bar() {
//     console.log(a);
//     // return 5;
//   }

//   return bar;
//   //   return a;
// }

// var baz = foo(); // Передали всю функцию  bar в baz, не вызывая ее
// // console.log(baz);

// baz(); // 2 -- Ого, замыкание только что было раскрыто, мужики!
// // console.log(baz());

// for (var i = 1; i <= 5; i++) {
//   (function () {
//     var j = i;
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 1000);
//   })();
// }

function CoolModule() {
  var something = 'cool';
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(' ! '));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}

var foo = CoolModule();
console.log(foo);

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
