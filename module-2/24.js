function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
  for (i = min; i <= max; i += 1){
    
    numbers.push(i)
  
  }

  // Пиши код выше этой строки
  return numbers;
}

console.log(createArrayOfNumbers(1, 3)); 
console.log(createArrayOfNumbers(14, 17)); 
console.log(createArrayOfNumbers(29, 34)); 



/*  

Метод push()
Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов.

const planets = ['Земля', 'Марс', 'Венера'];
planets.push('Юпитер');
planets.push('Сатурн', 'Уран', 'Нептун');

console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн', 'Уран', 'Нептун']
Задание
Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.

Тесты
Объявлена функция createArrayOfNumbers(min, max).
Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3].
Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17].
Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34].
Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив.
В цикле for использовался метод push.

console.log(); 
console.log(); 
console.log(); 
console.log(); 
console.log(); 

*/
