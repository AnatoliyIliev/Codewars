function mergeArrays(arr1, arr2) {
  /* Быстрый вариант */
  //   return [...new Set(arr1.concat(arr2).sort((a, b) => a - b))];

  /* Второй вариант */
  const array = arr1.concat(arr2).sort((a, b) => a - b);
  return array.filter((arr, idx) => array.indexOf(arr) === idx);
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

/*

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];
mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr3 = [1, 3, 5, 7, 9];
arr4 = [10, 8, 6, 4, 2];
mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr5 = [1, 3, 5, 7, 9, 11, 12];
arr6 = [1, 2, 3, 4, 5, 10, 12];
mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


Вам даны два отсортированных массива, оба из которых содержат только целые числа. 
Ваша задача — найти способ объединить их в один, отсортированный по возрастанию. 
Завершите функцию mergeArrays(arr1, arr2), где arr1 и arr2 — исходные отсортированные массивы.

Вам не нужно беспокоиться о проверке, так как arr1 и arr2 должны быть массивами 
с 0 или более целыми числами. Если и arr1, и arr2 пусты, просто верните пустой массив.

Примечание: arr1 и arr2 могут быть отсортированы в разном порядке.
 Также arr1 и arr2 могут иметь одинаковые целые числа.
  Удалить дубликаты в возвращаемом результате.

*/
