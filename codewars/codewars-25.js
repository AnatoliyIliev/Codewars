function solution(str, ending) {
  return ending === '' ? true : str.slice(-ending.length) === ending;
}

console.log(solution('abcde', 'cde')); // true
console.log(solution('abcde', 'abc')); // false
console.log(solution('abc', 'bc')); // returns true
console.log(solution('abc', 'd')); // returns false
console.log(solution('samurai', 'ai')); // true
console.log(solution('abc', '')); // true

/*
Завершите решение так, чтобы оно возвращало true, 
если первый переданный аргумент (строка) 
заканчивается вторым аргументом (тоже строкой).

Примеры:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
