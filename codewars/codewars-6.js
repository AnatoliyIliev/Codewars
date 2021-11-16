function squareDigits(num) {
  const numString = String(num);
  let equalNumber = '';
  for (let i = 0; i < numString.length; i += 1) {
    equalNumber += numString[i] ** 2;
  }
  return Number(equalNumber);
}

console.log(squareDigits(3212)); //should equal 9414', () => {assert.strictEqual(squareDigits(3212), 9414);
console.log(squareDigits(2112)); //should equal 4114', () => {assert.strictEqual(squareDigits(2112), 4114);
console.log(squareDigits(0)); //should equal 0', () => {assert.strictEqual(squareDigits(0), 0);

/*
Добро пожаловать. В этом ката вас просят возвести каждую цифру в квадрат.
числа и соедините их.

Например, если мы запустим 9119 через функцию,
Выйдет 811181, потому что 92 равно 81, а 12 равно 1.

Примечание: функция принимает целое число и возвращает целое число.

Welcome. In this kata, you are asked to square every digit 
of a number and concatenate them.

For example, if we run 9119 through the function, 
811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/
