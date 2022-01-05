function digits(n) {
  return n.toString().length;
}

console.log(digits(5)); // 1, 'Fail!'
console.log(digits(12345)); // 5, 'Fail!'
console.log(digits(9876543210)); // 10, 'Fail!

/*
Determine the total number of digits in the integer (n>=0) 
given as input to the function. For example,
 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. 
Be careful to avoid overflows/underflows.
All inputs will be valid.

Определите общее количество цифр в integer ( n>=0),
заданном в качестве входных данных для функции.
Например, 9 - это одна цифра, 66 - 2 цифры, а 128685 - 6 цифр. 
Будьте осторожны, чтобы избежать переполнения / потери значимости.
*/
