function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
if (maxLength >= message.length) {
  result = message;
} else {
  result = (`${message.slice(0, maxLength)}...`);
}
// Пиши код выше этой строки
  return result;
}

console.log(formatMessage('Curabitur ligula sapien', 16)); 
console.log(formatMessage('Curabitur ligula sapien', 23)); 
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); 
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); 
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); 
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));

/*  Вызов функции formatMessage('Curabitur ligula sapien', 16) возвращает 'Curabitur ligula...'.
    Вызов функции formatMessage('Curabitur ligula sapien', 23) возвращает 'Curabitur ligula sapien'.
    Вызов функции formatMessage('Vestibulum facilisis purus nec', 20) возвращает 'Vestibulum facilisis...'.
    Вызов функции formatMessage('Vestibulum facilisis purus nec', 30) возвращает 'Vestibulum facilisis purus nec'.
    Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 15) возвращает 'Nunc sed turpis...'.
    Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 41) возвращает 'Nunc sed turpis a felis in nunc fringilla'.


Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

Дополни код функции так, что если длина строки:

не превышает maxLength, функция возвращает её в исходном виде.
больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...', после чего возвращает укороченную версию.

*/
