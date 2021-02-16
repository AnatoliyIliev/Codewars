function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки

  result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')

  // Пиши код выше этой строки
  return result;
}

console.log(checkForSpam('Latest technology news')); 
console.log(checkForSpam('JavaScript weekly newsletter')); 
console.log(checkForSpam('Get best sale offers now!')); 
console.log(checkForSpam('Amazing SalE, only tonight!')); 
console.log(checkForSpam('Trust me, this is not a spam message')); 
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); 
console.log(checkForSpam('[SPAM] How to earn fast money?')); 


/*  
Проверка спама  
 
Задание

Функция checkForSpam(message) принимает строку (параметр message), 
проверяет её на содержание запрещённых слов spam и sale, 
и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

Если нашли запрещённое слово (spam или sale) то функция возвращает буль true.
Если в строке нет запрещённых слов, функция возвращает буль false.

Тесты

Объявлена функция checkForSpam(message).
Вызов функции checkForSpam('Latest technology news') возвращает false.
Вызов функции checkForSpam('JavaScript weekly newsletter')возвращает false.
Вызов функции checkForSpam('Get best sale offers now!') возвращает true.
Вызов функции checkForSpam('Amazing SalE, only tonight!') возвращает true.
Вызов функции checkForSpam('Trust me, this is not a spam message') возвращает true.
Вызов функции checkForSpam('Get rid of sPaM emails. Our book in on sale!') возвращает true.
Вызов функции checkForSpam('[SPAM] How to earn fast money?') возвращает true.

*/
