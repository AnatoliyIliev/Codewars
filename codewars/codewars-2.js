function duplicateCount(text) {
  const vce = text
    .toLowerCase()
    .split('')
    .filter((course, index, array) => array.indexOf(course) !== index)
    .filter((course, index, array) => array.indexOf(course) === index);

  return vce.length;
}

console.log(duplicateCount(''));
console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('Indivisibility'));
console.log(duplicateCount('Indivisibilities'));

/*
const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);



var arr = ["jam", "beef", "cream", "jam"]
var uniqs = arr.reduce((acc, val) => {
  acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
  return acc;
}, {});
console.log(uniqs)


  const vce = text
    .toLowerCase()
    .split('')
    .reduce((acc, unical) => {
      // console.log(acc);
      // console.log(unical);
      acc[unical] = acc[unical] ? (acc[unical] += 1) : 1;
      return acc;
    }, {});

  return vce;

Подсчитайте количество дубликатов
Напишите функцию, которая будет возвращать количество отдельных нечувствительных к регистру 
буквенных символов и числовых цифр, которые встречаются во входной строке более одного раза. 
Предполагается, что входная строка содержит только буквы (как в верхнем, так и в нижнем регистре) 
и числовые цифры.

Пример
«abcde» -> 0 # no characters repeats more than once
«aabbcde» -> 2 # 'a' and 'b'
«aabBcde» -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
«неделимость» -> 1 # 'i' occurs six times
«Неделимость» -> 2 # 'i' occurs seven times and 's' occurs twice
«aA11» -> 2 # 'a' and '1'
«ABBA» -> 2 # 'A' and 'B' each occur twice

Test.assertEquals(duplicateCount(""), 0);
Test.assertEquals(duplicateCount("abcde"), 0);
Test.assertEquals(duplicateCount("aabbcde"), 2);
Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
Test.assertEquals(duplicateCount("Indivisibility"), 1)
Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")



Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

FUNDAMENTALS   STRINGS


  if (lowerText.length === 0) {
    return 0;
  } else {
    for (let i = 0; i <= lowerText.length; i += 1) {
      for (let j = 1; j <= lowerText.length; j += 1) {
        if (lowerText[i] === lowerText[j]) {
          console.log(lowerText[i], lowerText[j]);

          lowerText.splice(lowerText[j], 1);
          counter.push(lowerText[i]);
        }
      }
      lowerText.splice(lowerText[i], 1);
    }
    return counter;
  }

*/
