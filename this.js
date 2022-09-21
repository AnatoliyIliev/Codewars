let text = 'Hello Marusia'

const fun =() => {
    console.log(text)
    console.log(this.text)
    let text = 'Hello, I am fun'
}

const rs = fun

console.log(rs())


// const test = {
//     prop: 42,
//     func: function() {
//       return this.prop;
//     },
//   };
  
//   console.log(test.func());