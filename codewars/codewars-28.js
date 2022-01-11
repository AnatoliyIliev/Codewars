function add(num1, num2) {
  let result = [];
  if (num1 < num2) {
    [num1, num2] = [num2, num1];
  }
  const arr1 = num1.toString().split('').reverse();
  const arr2 = num2.toString().split('').reverse();
  for (let i = 0; i < arr1.length; i += 1) {
    if (!arr2[i]) {
      result.push(Number(arr1[i]));
    } else {
      result.push(Number(arr1[i]) + Number(arr2[i]));
    }
  }
  return Number(result.reverse().join(''));
}

console.log(add(2, 11)); // 13);
console.log(add(0, 1)); // 1);
console.log(add(0, 0)); // 0);

console.log(add(16, 18)); // 214);
console.log(add(26, 39)); // 515);
console.log(add(122, 81)); // 1103);

console.log(add(1222, 30277)); // 31499);
console.log(add(1236, 30977)); // 31111013);
console.log(add(38810, 1383)); // 391193);
console.log(add(49999, 49999)); // 818181818);

/*

For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

In simple terms, our method does not like the principle 
of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.



​
 
ALGORITHMSARITHMETICMATHEMATICSNUMBERS


*/
