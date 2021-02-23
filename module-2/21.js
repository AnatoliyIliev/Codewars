function findLongestWord(string) {
  // Пиши код ниже этой строки
  let longWord = string.split(' ')[0];
  let equals = ''
  console.log(longWord)
for (str of string.split(' ')){
  if (longWord.length >= str.length){
    equals = longWord;
  } else {
    equals = str;
  }  
}
return equals;
  // Пиши код выше этой строки
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
console.log(findLongestWord('Google do a roll')); 
console.log(findLongestWord('May the force be with you')); 


/*  

Поиск самого длинного слова
Задание
Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string)
 и возвращает самое длинное слово в этой строке.

Тесты
Объявлена функция findLongestWord(string).
Вызов функции findLongestWord('The quick brown fox jumped over the lazy dog') возвращает jumped.
Вызов функции findLongestWord('Google do a roll') возвращает Google.
Вызов функции findLongestWord('May the force be with you') возвращает force.
Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.

console.log(); 
console.log(); 
console.log(); 
console.log(); 
console.log(); 

*/
