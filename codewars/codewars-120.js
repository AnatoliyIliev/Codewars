function count(string) {
  return string
    ? string.split('').reduce((accum, item) => {
        if (accum.hasOwnProperty(item)) {
          accum[item] += 1;
        } else accum[item] = 1;
        return accum;
      }, {})
    : {};
}

console.log(count('aba')); //, { a: 2, b: 1 });
console.log(count('')); //, {});

/*
6 kyu
Count characters in your string

The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
