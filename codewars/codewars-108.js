function makeLooper(str) {
  let count = 0;
  return () => {
    const result = str[count];
    count = str.length - 1 == count ? 0 : (count += 1);
    return result;
  };
}

const abc = makeLooper('abc');
//'Should cycle through the given string'
console.log(abc()); ///, 'a');
console.log(abc()); ///, 'b');
console.log(abc()); ///, 'c');

//'Should return to its initial cycle once it reaches the end'
console.log(abc()); ///, 'a');
console.log(abc()); ///, 'b');
console.log(abc()); ///, 'c');

/*
The makeLooper() function (make_looper in Python) takes a string (of non-zero length) as an argument. 
It returns a function. The function it returns will return successive characters of the string on successive invocations. 
It will start back at the beginning of the string once it reaches the end.

For example:

var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call
Func<char> abc = Kata.MakeLooper("abc");
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call

*/
