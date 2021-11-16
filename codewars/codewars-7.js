function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) return false;
  return (
    array1
      .map(x => x * x)
      .sort()
      .toString() === array2.sort().toString()
  );
}

// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));

// describe('Tests', () => {
//   it('test', () => {
//     a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//     a2 = [
//       11 * 11,
//       121 * 121,
//       144 * 144,
//       19 * 19,
//       161 * 161,
//       19 * 19,
//       144 * 144,
//       19 * 19,
//     ];
//     Test.assertEquals(comp(a1, a2), true);
//   });
// });

/*
Для двух массивов a и b напишите функцию comp (a, b) (orcompSame (a, b)), 
которая проверяет, имеют ли два массива «одинаковые» 
элементы с одинаковой кратностью. «То же самое» здесь означает, 
что элементы в b являются элементами в квадрате, независимо от порядка.

Примеры
Действительный массив
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
 that checks whether the two arrays have the "same" elements,
  with the same multiplicities. "Same" means, here, 
  that the elements in b are the elements in a squared, 
  regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
*/
