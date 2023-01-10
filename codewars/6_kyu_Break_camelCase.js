function solution(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === string[i].toUpperCase()) {
      result += ' ';
    }

    result += string[i];
  }

  return result;
}

console.log(solution('camelCasing')); //,      'camel Casing',      'Unexpected result',
console.log(solution('camelCasingTest')); //,      'camel Casing Test',      'Unexpected result',

/*
6 kyu  Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
STRINGSFUNDAMENTALS

*/
